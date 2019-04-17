## 注册全局 directive 和 filter

```js
import * as filters from './filters'
import * as directive from './directive'

// 注册 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// // 注册 directive
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]())
})
```


### 基于 moment.js 时间处理
```js

import moment from 'moment';

// 年月日
export function yyyymmdd(value) {
  return moment( new Date(value) ).format('YYYY年MM月DD日');
}

export function ymd(value) {
  return moment( new Date(value) ).format("YYYY-MM-DD");
}

export function ymdhm(value) {
  return moment( new Date(value) ).format("YYYY-MM-DD HH-mm");
}
// time ago
export function timeAgo(value) {
     // 19 小时前
  
  let h = moment(value).diff(moment(), 'hours');
  let m = moment(value).diff(moment(), 'm');
  
  let day = moment(value).diff(moment(), 'days');
  let str = '';
  moment().subtract(value, 'm')
  if(Math.abs(m)<60){
    if(Math.abs(m)<=0){
      str = '刚刚'
    }else{
      str =  Math.abs(m)+'分钟前'
    }
  }else if(Math.abs(h)>24){
    str = Math.abs(day) + '天前'
  }else{
    str =  Math.abs(h)+'小时前'
  }
  
  
  return str
}
```

## 时间处理

```js
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
```

## 数字处理

```js
// num : 102,123
export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
// 两位小数
export function parseTwoDecimal(num) {
  return num.toFixed(2)
}

// kb mb gb ...
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}
```


## 倒计时
```js
<template>
  <p>
      还剩 {{d}} 天 {{h}} 时 {{m}} 分 {{s}} 秒
  </p>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    targetTime: {
        default:undefined
    }
  },
  data() {
    return {
      d: 0,
      h: 0,
      m: 0,
      s: 0
    };
  },
  computed: {},
  created() {
    this.countTime();
  },
  methods: {
    countTime() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date(this.targetTime);
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime > 0) {
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        this.m = Math.floor((leftTime / 1000 / 60) % 60);
        this.s = Math.floor((leftTime / 1000) % 60);
      }
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime, 1000);
    }
  }
};
</script>

<style scoped>
</style>

```
<!-- 调用 -->
<count-down class="t" :targetTime="targetTime"/>
