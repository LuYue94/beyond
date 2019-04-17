
## 检测是不是数组：
```js
arr instanceof Array      //通过构造函数
Array.isArray(arr)      
Array.prototype.isPrototypeOf(arr)    //通过原型
Object.prototype.toString.call(arr)  //[Object Array]
```

```js
arr.valueOf() 
arr.toString()
String(arr):将数组中每个元素转为字符串，并用逗号连接。
arr.join("连接符"):将数组中每个元素转为字符串，用自定义的"连接符"连接每个元素。

arr.reverse() 原数组会改变
arr.sort() 数组排序，按字符串大小排序
arr.concat(otherArr) 合并新元素，返回合并后的新数组
arr.slice(start,end) 剪切数组，含头不含尾 
注意：拼接和截取: 都无法直接修改原数组而是返回新数组，用变量接住
arr.split([ 起始位置 | 要删除元素的个数 | 要插入元素的值，可以写入多个值 ] )剪切数组/替    换/新增
arr.indexOf(item):返回第一个匹配到的元素在数组中所在的位置 or -1
arr.lastIndexOf(item)

arr.from(“hello”)  [“h”,”e”,”l”,”l”,”o”] 将类数组对象和可遍历的对象转换为真正的数组（包括ES6新增的数据结构Set和Map）
arr.of(1,2,3) [1,3,4] 将一组值转换为数组 Array()会因参数个数导致行为有差异
arr.find(function(val,index,arr){}) 找到第一个符合条件的数组成员
Array.findIndex(function(val,index,arr){}) 找到第一个符合条件的数组位置,这两个方法都可以发现NaN，弥补了数组的IndexOf方法的不足。
arr.includes(value,[start]) 可以找到NaN 
```

改变原数组的：
- shift：将第一个元素删除并且返回删除元素，空即为undefined
- unshift：向数组开头添加元素，并返回新的长度
- pop：删除最后一个并返回删除的元素
- push：向数组末尾添加元素，并返回新的长度
- reverse：颠倒数组顺序
- sort：对数组排序
- splice:splice(start,length,item)删，增，替换数组元素，返回被删除数组，无删除则不返回

不改变原数组的：
- concat：连接多个数组，返回新的数组
- join：将数组中所有元素以参数作为分隔符放入一个字符
- slice：slice(start,end)，返回选定元素
- map,filter,forEach,some,every等不改变原数组

## 迭代
```js
参数：[ 调用every的数组的每一项元素 | 对应元素所在的位置 | 表示该数组 ] 
arr.every(function(item,index,array){}) 该函数对每一项都返回true，则返回true 
arr.some(function(item,index,array){})  该函数对其中一项返回true，则返回true 
arr.filter(callback):返回满足条件的元素组成的数组
arr.map(callback): 对数组每一项进行计算等处理，返回处理结果组成的数组。每一项的结果是true/false
arr.reduce(fn) 前一个元素 | 当前元素，从1开始 | 后一个元素的序列，从1开始计数 | 表示该数组 ] 
var arr = [1,2,3,4,5];
var reduceArr = arr.reduce(function(pre,cur,index,array){
    return prev + cur;
})
```