// 倒计时

// debounce
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

// 深克隆
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = source[keys].constructor === Array ? [] : {}
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

// 获取 当前时间与目标时间 差，无定时器
function countDown(endDate) {
  var sTime = new Date(endDate);
  var mydate = new Date();
  var done = false;
  var T = Math.floor((sTime - mydate) / 1000);
  var D = Math.floor(T / (3600 * 24));
  var H = Math.floor((T - D * 24 * 3600) / 3600);
  var M = Math.floor((T / 60) - (D * 24 * 60 + H * 60));
  var S = T % 60;

  if (T == 0) {
    done = true
  }
  H = D * 24 + H;
  function setnum(t) {
    if (t < 10) {
      return '0' + t;
    } else {
      return t;
    }
  }

  return {
    done: done,
    d: D,
    h: setnum(H),
    m: setnum(M),
    s: setnum(S)
  }
}


// 根据经纬度算距离
function getDistance(lat1, lon1, lat2, lon2) {
  let TO_RADIANS = Math.PI / 180;
  let EARTH_MEAN_RADIUS = 6371008.7714;
  let x = (lon2 - lon1) * TO_RADIANS * Math.cos((lat2 + lat1) / 2.0 * TO_RADIANS);
  let y = (lat2 - lat1) * TO_RADIANS;
  let distance = Math.sqrt(x * x + y * y) * EARTH_MEAN_RADIUS;
  console.log('distance :', distance);
  let val = distance / 1000
  return val.toFixed(2)
}

// 时间格式化
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if (!time) {
    return ''
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') { return ['一', '二', '三', '四', '五', '六', '日'][value - 1] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}


// 当前月份第一天
export function getCurrentMonthFirst(date) {
  // var date = new Date();
  date.setDate(1);
  var month = parseInt(date.getMonth() + 1);
  var day = date.getDate();
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day;
}

// 当前月份最后一天
export function getCurrentMonthLast(date) {
  // var date = new Date();
  var currentMonth = date.getMonth();
  var nextMonth = ++currentMonth;
  var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  var oneDay = 1000 * 60 * 60 * 24;
  var lastTime = new Date(nextMonthFirstDay - oneDay);
  var month = parseInt(lastTime.getMonth() + 1);
  var day = lastTime.getDate();
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return date.getFullYear() + '-' + month + '-' + day
}