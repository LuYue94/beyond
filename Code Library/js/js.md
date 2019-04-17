# js lib

## 浏览器阻止新窗口(window.open或新窗的form提交)

设置请求方式为同步请求：
async: false, //就是设置这个最为关键的ajax同步  

https://www.cnblogs.com/eaysun/p/4758270.html

## css 校验

*[style] { 
    border: 5px solid red;
}

a:not([href]),  
a[href="#"],  
a[href=""],  
a[href*="javascript:void(0)"] { … } 

img:not([alt]) { ... } 


## textarea placeholder换行

&#13;&#10;

&#13; 表示回车
&#10;表示换行


## var 随机颜色

```js
'#' + (~~(Math.random() * (1 << 24))).toString(16)

'#' + parseInt(Math.random() * Math.pow(2, 24)).toString(16)
```

## var 取随机字符串

```js
Math.random().toString(16).substring(2)
Math.random().toString(36).substring(2)
```

## 取整

```js
a = ~~2.33
b = 2.33 | 0
c = 2.33 >> 0
```

## 格式化金钱

```js
// 用正则魔法实现：
var test1 = '1234567890'
var format = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

console.log(format) // 1,234,567,890
// 非正则的优雅实现：
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
console.log(formatCash('1234567890'))
```

## json深拷贝

```js
var a = {
    a: 1,
    b: { c: 1, d: 2 }
}
var b=JSON.parse(JSON.stringify(a))
```

## 将argruments对象转换成数组

```js
var argArray = Array.prototype.slice.call(arguments);

// 或者ES6：

var argArray = Array.from(arguments)
```

## js类型判断
`Object.prototype.toString.call([]).slice(8,-1);`

## 禁用表单自动填充
` autocomplete="off" readonly onfocus="this.removeAttribute('readonly');" 
`

## textarea在光标处插入内容
```js
function addExpressContent(str){
    var obj = document.getElementById("SMStextarea");
    if (document.selection) {  
        var sel = document.selection.createRange();  
        sel.text = str;  
    } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {  
        var startPos = obj.selectionStart;  
        var endPos = obj.selectionEnd;  
        var cursorPos = startPos;  
        var tmpStr = obj.value;  
        obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);  
        cursorPos += str.length;  
        obj.selectionStart = obj.selectionEnd = cursorPos;  
    } else {  
        obj.value += str;  
    }  
}
```

## 数字从0变大，
```js
function countFnSection1(n, num, suffix) {

  var dom = $('.section1_num' + n),
    start = 0,
    end = num,
    time = 1000,
    step = 30,
    between = (end - start).toFixed(2),
    current = 0;

  var timer = setInterval(function () {
    suffix ?
      current += Number((between / step).toFixed(2)) :
      current += Number((between / step).toFixed(0));

    current = Math.round(current * 100) / 100
    if (current >= end) {
      current = num
      clearInterval(timer)
    }

    suffix ?
      dom.html(current + suffix) :
      dom.html(formatNumber(current));

  }, time / step)
}

function formatNumber(num) {
  // 逗号分隔
  // 需转成string类型
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
```

## 倒计时
```js
function timer() {
  var now = new Date().getTime()
  var leftTime = end_time - now //计算剩余的毫秒数 
  var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数 
  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时 
  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10); //计算剩余的分钟 
  var seconds = parseInt(leftTime / 1000 % 60, 10); //计算剩余的秒数 
  days = checkTime(days);
  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  console.log(days, hours, minutes, seconds);
}
setInterval(function () {
  timer()
}, 1000);

function checkTime(i) { //将0-9的数字前面加上0，例1变为01 
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
```

##  requestAnimFrame 动
 页面切离时，停止动画
 页面切回时，开始动画
 ```js
  document.addEventListener('visibilitychange', function (e) {
    if (e.target.hidden) {
      window.cancelAnimationFrame(animFrame)
      console.log(1);
    } else {
      console.log(2);
      self.canvasLoop();
    }
  })
```

## url分割取值
```js
function getUrlPrams(){
    let href  = window.location.href;
    if(href.split('?')[1]){
        let arr = href.split('?')[1].split('&');
        let obj = {};
        for(var i=0;i<arr.length;i++){
          let arr2 = arr[i].split('=');
          obj[arr2[0]] = arr2[1]
        }
        return obj
    }else{
        return {}
    }
}

export { getUrlPrams }
```

## 浏览器定位
```js
var options = {
  enableHighAccuracy: true, //boolean 是否要求高精度的地理信息，默认为false
  maximumAge: 1000 //应用程序的缓存时间
};

if (navigator.geolocation) {
  //浏览器支持geolocation
  navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    options
  );
} else {
  //浏览器不支持geolocation
  this.onError("浏览器不支持!");
}

function onSuccess(position){}
function onError(error){}
```