原生 JS 汇总

```js
JS选取DOM元素的方法 注意：原生JS选取DOM元素比使用jQuery类库选取要快很多

1、通过ID选取元素 document.getElementById('myid');
 2、通过CLASS选取元素 document.getElementsByClassName('myclass')[0]; 
 3、通过标签选取元素 document.getElementsByTagName('mydiv')[0];
 4、通过NAME属性选取元素（常用于表单） document.getElementsByName('myname')[0];


JS修改CSS样式 
document.getElementById('myid').style.display = 'none';
class 操作：

JS修改CLASS属性
document.getElementById('myid').className = 'active';

如果有多个CLASS属性，即用空格隔开
document.getElementById('myid').className = 'active div-1';

移除该元素上的所有CLASS
document.getElementById('myid').className = '';

注意：使用classList会优于使用className
document.getElementById('myid').classList.item(0);//item为类名的索引
document.getElementById('myid').classList.length;//只读属性
document.getElementById('myid').classList.add('newClass');//添加class
document.getElementById('myid').classList.remove('newClass');//移除class
document.getElementById('myid').classList.toggle('newClass');//切换，有则移除，没有则添加
document.getElementById('myid').classList.contains('newClass');//判断是否存在该class
补充：add和remove方法不允许链式操作，因为返回的都是undefined，其次，也不允许同时添加或删除多个class，可以自行扩展一下

DOMTokenList.prototype.adds = function(tokens){  
   tokens.split(' ').forEach(function(token){  
      this.add(token);  
   }).bind(this));  
   return this;  
};  
var clList = document.body.classList;  
clList.adds('a b c').toString();  
//a b c 


JS修改文本 

document.getElementById('myid').innerHTML = '123';


JS创建元素并向其中追加文本

var newdiv = document.createElement('div');
var newtext = document.createTextNode('123');
newdiv.appendChild(newtext);
document.body.appendChild(newdiv);
同理：removeChild()移除节点，并返回节点

cloneNode()复制节点

insertBefore()插入节点（父节点内容的最前面）

注意：insertBefore()有两个参数，第一个是插入的节点，第二个是插入的位置

例子：

var list = document.getElementById('myList');
list.insertBefore(newItem,list.childNodes[1]);
//插入新节点newItem到list的第二个子节点


JS返回所有子节点对象childNodes

var mylist = document.getElementById('myid');
for(var i=0,i<mylist.childNodes.length;i++){
console.log(mylist.childNodes[i]);
}
firstChild返回第一个子节点
lastChild返回最后一个子节点
parentNode返回父节点对象
nextSibling返回下一个兄弟节点对象
previousSibling返回前一个兄弟节点对象
nodeName返回节点的HTML标记名称
原生JS汇总：

一、节点
1.1 节点属性
Node.nodeName   //返回节点名称，只读
Node.nodeType   //返回节点类型的常数值，只读
Node.nodeValue  //返回Text或Comment节点的文本值，只读
Node.textContent  //返回当前节点和它的所有后代节点的文本内容，可读写
Node.baseURI    //返回当前网页的绝对路径

Node.ownerDocument  //返回当前节点所在的顶层文档对象，即document
Node.nextSibling  //返回紧跟在当前节点后面的第一个兄弟节点
Node.previousSibling  //返回当前节点前面的、距离最近的一个兄弟节点
Node.parentNode   //返回当前节点的父节点
Node.parentElement  //返回当前节点的父Element节点
Node.childNodes   //返回当前节点的所有子节点
Node.firstChild  //返回当前节点的第一个子节点
Node.lastChild   //返回当前节点的最后一个子节点

//parentNode接口
Node.children  //返回指定节点的所有Element子节点
Node.firstElementChild  //返回当前节点的第一个Element子节点
Node.lastElementChild   //返回当前节点的最后一个Element子节点
Node.childElementCount  //返回当前节点所有Element子节点的数目。
1.2 操作
Node.appendChild(node)   //向节点添加最后一个子节点
Node.hasChildNodes()   //返回布尔值，表示当前节点是否有子节点
Node.cloneNode(true);  // 默认为false(克隆节点), true(克隆节点及其属性，以及后代)
Node.insertBefore(newNode,oldNode)  // 在指定子节点之前插入新的子节点
Node.removeChild(node)   //删除节点，在要删除节点的父节点上操作
Node.replaceChild(newChild,oldChild)  //替换节点
Node.contains(node)  //返回一个布尔值，表示参数节点是否为当前节点的后代节点。
Node.compareDocumentPosition(node)   //返回一个7个比特位的二进制值，表示参数节点和当前节点的关系
Node.isEqualNode(noe)  //返回布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。
Node.normalize()   //用于清理当前节点内部的所有Text节点。它会去除空的文本节点，并且将毗邻的文本节点合并成一个。

//ChildNode接口
Node.remove()  //用于删除当前节点
Node.before()  //
Node.after()
Node.replaceWith()
1.3 Document节点
1.3.1 Document节点的属性
document.doctype   //
document.documentElement  //返回当前文档的根节点
document.defaultView   //返回document对象所在的window对象
document.body   //返回当前文档的<body>节点
document.head   //返回当前文档的<head>节点
document.activeElement  //返回当前文档中获得焦点的那个元素。

//节点集合属性
document.links  //返回当前文档的所有a元素
document.forms  //返回页面中所有表单元素
document.images  //返回页面中所有图片元素
document.embeds  //返回网页中所有嵌入对象
document.scripts  //返回当前文档的所有脚本
document.styleSheets  //返回当前网页的所有样式表

//文档信息属性
document.documentURI  //表示当前文档的网址
document.URL  //返回当前文档的网址
document.domain  //返回当前文档的域名
document.lastModified  //返回当前文档最后修改的时间戳
document.location  //返回location对象，提供当前文档的URL信息
document.referrer  //返回当前文档的访问来源
document.title    //返回当前文档的标题
document.characterSet属性返回渲染当前文档的字符集，比如UTF-8、ISO-8859-1。
document.readyState  //返回当前文档的状态
document.designMode  //控制当前文档是否可编辑，可读写
document.compatMode  //返回浏览器处理文档的模式
document.cookie   //用来操作Cookie
1.3.2 Document节点的方法
（1）读写方法
document.open()   //用于新建并打开一个文档
document.close()   //不安比open方法所新建的文档
document.write()   //用于向当前文档写入内容
document.writeIn()  //用于向当前文档写入内容，尾部添加换行符。
（2）查找节点
document.querySelector(selectors)   //接受一个CSS选择器作为参数，返回第一个匹配该选择器的元素节点。
document.querySelectorAll(selectors)  //接受一个CSS选择器作为参数，返回所有匹配该选择器的元素节点。
document.getElementsByTagName(tagName)  //返回所有指定HTML标签的元素
document.getElementsByClassName(className)   //返回包括了所有class名字符合指定条件的元素
document.getElementsByName(name)   //用于选择拥有name属性的HTML元素（比如<form>、<radio>、<img>、<frame>、<embed>和<object>等）
document.getElementById(id)   //返回匹配指定id属性的元素节点。
document.elementFromPoint(x,y)  //返回位于页面指定位置最上层的Element子节点。
（3）生成节点
document.createElement(tagName)   //用来生成HTML元素节点。
document.createTextNode(text)   //用来生成文本节点
document.createAttribute(name)  //生成一个新的属性对象节点，并返回它。
document.createDocumentFragment()  //生成一个DocumentFragment对象
（4）事件方法
document.createEvent(type)   //生成一个事件对象，该对象能被element.dispatchEvent()方法使用
document.addEventListener(type,listener,capture)  //注册事件
document.removeEventListener(type,listener,capture)  //注销事件
document.dispatchEvent(event)  //触发事件
（5）其他
document.hasFocus()   //返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。
document.adoptNode(externalNode)  //将某个节点，从其原来所在的文档移除，插入当前文档，并返回插入后的新节点。
document.importNode(externalNode, deep)   //从外部文档拷贝指定节点，插入当前文档。
1.4 Element节点
1.4.1 Element节点的属性
（1）特性属性
Element.attributes  //返回当前元素节点的所有属性节点
Element.id  //返回指定元素的id属性，可读写
Element.tagName  //返回指定元素的大写标签名
Element.innerHTML   //返回该元素包含的HTML代码，可读写
Element.outerHTML  //返回指定元素节点的所有HTML代码，包括它自身和包含的的所有子元素，可读写
Element.className  //返回当前元素的class属性，可读写
Element.classList  //返回当前元素节点的所有class集合
Element.dataset   //返回元素节点中所有的data-*属性。
（2）尺寸属性
Element.clientHeight   //返回元素节点可见部分的高度
Element.clientWidth   //返回元素节点可见部分的宽度
Element.clientLeft   //返回元素节点左边框的宽度
Element.clientTop   //返回元素节点顶部边框的宽度
Element.scrollHeight  //返回元素节点的总高度
Element.scrollWidth  //返回元素节点的总宽度
Element.scrollLeft   //返回元素节点的水平滚动条向右滚动的像素数值,通过设置这个属性可以改变元素的滚动位置
Element.scrollTop   //返回元素节点的垂直滚动向下滚动的像素数值
Element.offsetHeight   //返回元素的垂直高度(包含border,padding)
Element.offsetWidth    //返回元素的水平宽度(包含border,padding)
Element.offsetLeft    //返回当前元素左上角相对于Element.offsetParent节点的垂直偏移
Element.offsetTop   //返回水平位移
Element.style  //返回元素节点的行内样式
（3）节点相关属性
Element.children   //包括当前元素节点的所有子元素
Element.childElementCount   //返回当前元素节点包含的子HTML元素节点的个数
Element.firstElementChild  //返回当前节点的第一个Element子节点  
Element.lastElementChild   //返回当前节点的最后一个Element子节点  
Element.nextElementSibling  //返回当前元素节点的下一个兄弟HTML元素节点
Element.previousElementSibling  //返回当前元素节点的前一个兄弟HTML节点
Element.offsetParent   //返回当前元素节点的最靠近的、并且CSS的position属性不等于static的父元素。
1.4.2 Element节点的方法
（1）位置方法
getBoundingClientRect()  
// getBoundingClientRect返回一个对象，包含top,left,right,bottom,width,height // width、height 元素自身宽高
// top 元素上外边界距窗口最上面的距离
// right 元素右外边界距窗口最上面的距离
// bottom 元素下外边界距窗口最上面的距离
// left 元素左外边界距窗口最上面的距离
// width 元素自身宽(包含border,padding) 
// height 元素自身高(包含border,padding) 

getClientRects()   //返回当前元素在页面上形参的所有矩形。

// 元素在页面上的偏移量  
var rect = el.getBoundingClientRect()  
return {   
  top: rect.top + document.body.scrollTop,   
  left: rect.left + document.body.scrollLeft  
}
（2）属性方法
Element.getAttribute()：读取指定属性  
Element.setAttribute()：设置指定属性  
Element.hasAttribute()：返回一个布尔值，表示当前元素节点是否有指定的属性  
Element.removeAttribute()：移除指定属性
（3）查找方法
Element.querySelector()  
Element.querySelectorAll()  
Element.getElementsByTagName()  
Element.getElementsByClassName()
（4）事件方法
Element.addEventListener()：添加事件的回调函数  
Element.removeEventListener()：移除事件监听函数  
Element.dispatchEvent()：触发事件

//ie8
Element.attachEvent(oneventName,listener)
Element.detachEvent(oneventName,listener)

// event对象  
var event = window.event||event;    

// 事件的目标节点  
var target = event.target || event.srcElement;

// 事件代理  
ul.addEventListener('click', function(event) {   
  if (event.target.tagName.toLowerCase() === 'li') {   
    console.log(event.target.innerHTML)   
  }  
});
（5）其他
Element.scrollIntoView()   //滚动当前元素，进入浏览器的可见区域

//解析HTML字符串，然后将生成的节点插入DOM树的指定位置。
Element.insertAdjacentHTML(where, htmlString); 
Element.insertAdjacentHTML('beforeBegin', htmlString); // 在该元素前插入  
Element.insertAdjacentHTML('afterBegin', htmlString); // 在该元素第一个子元素前插入 
Element.insertAdjacentHTML('beforeEnd', htmlString); // 在该元素最后一个子元素后面插入 
Element.insertAdjacentHTML('afterEnd', htmlString); // 在该元素后插入

Element.remove()  //用于将当前元素节点从DOM中移除
Element.focus()   //用于将当前页面的焦点，转移到指定元素上
二、CSS操作
（1）类名操作
//ie8以下
Element.className  //获取元素节点的类名
Element.className += ' ' + newClassName  //新增一个类名

//判断是否有某个类名
function hasClass(element,className){
  return new RegExp(className,'gi').test(element.className);
}

//移除class
function removeClass(element,className){
  element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),'');
}

//ie10 
element.classList.add(className)  //新增
element.classList.remove(className)  //删除
element.classList.contains(className)  //是否包含
element.classList.toggle(className)  //toggle class
（2）style操作
element.setAttribute('style','')

element.style.backgroundColor = 'red'

element.style.cssText //用来读写或删除整个style属性

element.style.setProperty(propertyName,value)  //设置css属性
element.style.getPropertyValue(property)  //获取css属性
element.style.removeProperty(property)  //删除css属性
操作非内联样式
//ie8
element.currentStyle[attrName]
//ie9+
window.getComputedStyle(el,null)[attrName] 
window.getComputedStyle(el,null).getPropertyValue(attrName)
//伪类
window.getComputedStyle(el,':after')[attrName]
三、对象
3.1 Object对象
（1）生成实例对象
var o = new Object()
（2）属性
Object.prototype   //返回原型对象
（3）方法
Object.keys(o)   //遍历对象的可枚举属性
Object.getOwnPropertyName(o)   //遍历对象不可枚举的属性
对象实例的方法
valueOf()：返回当前对象对应的值。  
toString()：返回当前对象对应的字符串形式。  
toLocaleString()：返回当前对象对应的本地字符串形式。  
hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。 
isPrototypeOf()：判断当前对象是否为另一个对象的原型。
propertyIsEnumerable()：判断某个属性是否可枚举。
3.2 Array对象
（1）生成实例对象
var a = new Array()
（2）属性
a.length  //长度
（3）Array.isArray()
Array.isArray(a)   //用来判断一个值是否为数组
（4）Array实例的方法

[1, [2, [3, 4]]].toString() // "1,2,3,4"

a.valueof()   //返回数组本身
a.toString()  //返回数组的字符串形式
a.push(value,vlaue....)   //用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。
pop()   //用于删除数组的最后一个元素，并返回该元素
join()  //以参数作为分隔符，将所有数组成员组成一个字符串返回。如果不提供参数，默认用逗号分隔。
concat()  //用于多个数组的合并。它将新数组的成员，添加到原数组的尾部，然后返回一个新数组，原数组不变。
shift()  //用于删除数组的第一个元素，并返回该元素。
unshift(value)  //用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。
reverse()   //用于颠倒数组中元素的顺序，返回改变后的数组
slice(start_index, upto_index);   //用于提取原数组的一部分，返回一个新数组，原数组不变。第一个参数为起始位置（从0开始），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。负数表示倒数第几个。
splice(index, count_to_remove, addElement1, addElement2, ...);   //用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员，返回值是被删除的元素。第一个参数是删除的起始位置，第二个参数是被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。
sort()   //对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。如果想让sort方法按照自定义方式排序，可以传入一个函数作为参数，表示按照自定义方法进行排序。该函数本身又接受两个参数，表示进行比较的两个元素。如果返回值大于0，表示第一个元素排在第二个元素后面；其他情况下，都是第一个元素排在第二个元素前面。
map()   //对数组的所有成员依次调用一个函数，根据函数结果返回一个新数组。
map(elem,index,arr)   //map方法接受一个函数作为参数。该函数调用时，map方法会将其传入三个参数，分别是当前成员、当前位置和数组本身。
forEach()   //遍历数组的所有成员，执行某种操作,参数是一个函数。它接受三个参数，分别是当前位置的值、当前位置的编号和整个数组。
filter()   //参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。该方法不会改变原数组。
some()    //用来判断数组成员是否符合某种条件。接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组。只要有一个数组成员的返回值是true，则整个some方法的返回值就是true，否则false。
every()   //用来判断数组成员是否符合某种条件。接受一个函数作为参数，所有数组成员依次执行该函数，返回一个布尔值。该函数接受三个参数，依次是当前位置的成员、当前位置的序号和整个数组。所有数组成员的返回值都是true，才返回true，否则false。
reduce()   //依次处理数组的每个成员，最终累计为一个值。从左到右处理（从第一个成员到最后一个成员）
reduceRight()  //依次处理数组的每个成员，最终累计为一个值。从右到左（从最后一个成员到第一个成员）
indexOf(s)   //返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1。可以接受第二个参数，表示搜索的开始位置
lastIndexOf()  //返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。
3.3 Number对象
（1）生成对象
var n = new Number()
（2）Number对象的属性
Number.POSITIVE_INFINITY：正的无限，指向Infinity。  
Number.NEGATIVE_INFINITY：负的无限，指向-Infinity。  
Number.NaN：表示非数值，指向NaN。  
Number.MAX_VALUE：表示最大的正数，相应的，最小的负数为-Number.MAX_VALUE。  
Number.MIN_VALUE：表示最小的正数（即最接近0的正数，在64位浮点数体系中为5e-324），相应的，最接近0的负数为-Number.MIN_VALUE。  
Number.MAX_SAFE_INTEGER：表示能够精确表示的最大整数，即9007199254740991。  
Number.MIN_SAFE_INTEGER：表示能够精确表示的最小整数，即-9007199254740991。
（4）Number对象实例的方法
toString()   //用来将一个数值转为字符串形式.可以接受一个参数，表示输出的进制。如果省略这个参数，默认将数值先转为十进制，再输出字符串；否则，就根据参数指定的进制，将一个数字转化成某个进制的字符串。
toFixed()   //用于将一个数转为指定位数的小数，返回这个小数对应的字符串。
toExponential()  //用于将一个数转为科学计数法形式。可传入一个参数，参数表示小数点后有效数字的位数，范围为0到20，超出这个范围，会抛出一个RangeError。
toPrecision()  //用于将一个数转为指定位数的有效数字。
3.4 String 对象
（1）生成实例对象
var s = new String()
（2）String对象的属性
s.length   //返回字符串的长度
（3）方法
s.chatAt(index)   //返回指定位置的字符    //"123456"[0] == "1"
s.fromCharCode()    //该方法的参数是一系列Unicode码点，返回对应的字符串。
s.charCodeAt(index)    //返回给定位置字符的Unicode码点（十进制表示）
s.concat(s2)  //用于连接两个字符串
s.slice(start,end)   //用于从原字符串取出子字符串并返回，不改变原字符串。第一个参数是子字符串的开始位置，第二个参数是子字符串的结束位置（不含该位置）。如果参数是负值，表示从结尾开始倒数计算的位置，即该负值加上字符串长度。
s.substring(start,end)  //用于从原字符串取出子字符串并返回，不改变原字符串.第一个参数表示子字符串的开始位置，第二个位置表示结束位置。
s.substr(start,length)   //用于从原字符串取出子字符串并返回，不改变原字符串。第一个参数是子字符串的开始位置，第二个参数是子字符串的长度。如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串。
s.indexOf(s)   //返回给定元素在字符串中第一次出现的位置，如果没有出现则返回-1。可以接受第二个参数，表示搜索的开始位置 
s.lastIndexOf()  //返回给定元素在字符串中最后一次出现的位置，如果没有出现则返回-1。
s.trim()  //用于去除字符串两端的空格，返回一个新字符串
s.toLowerCase()  //用于将一个字符串全部转为小写,返回一个新字符串，不改变原字符串。
s.toUpperCase()  //全部转为大写
s.localeCompare(s2)  //用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。
s.match(regexp)   //用于确定原字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到匹配，则返回null。
s.search()  //返回值为匹配的第一个位置。如果没有找到匹配，则返回-1。
s.replace(oldValue,newValue)  //用于替换匹配的子字符串，一般情况下只替换第一个匹配（除非使用带有g修饰符的正则表达式）。
s.split()  //按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。还可传入第二个参数，决定了返回数组的成员数。
3.5 Math对象
（1）属性
Math.E：常数e。  
Math.LN2：2的自然对数。  
Math.LN10：10的自然对数。  
Math.LOG2E：以2为底的e的对数。  
Math.LOG10E：以10为底的e的对数。  
Math.PI：常数Pi。  
Math.SQRT1_2：0.5的平方根。  
Math.SQRT2：2的平方根。
（2）数学方法
Math.abs()：返回参数的绝对值  
Math.ceil()：向上取整，接受一个参数，返回大于该参数的最小整数。 
Math.floor()：向下取整  
Math.max(n,n1,...)：可接受多个参数，返回最大值  
Math.min(n,n1,..)：可接受多个参数，返回最小值  
Math.pow(n,e)：指数运算, 返回以第一个参数为底数、第二个参数为幂的指数值。 
Math.sqrt()：返回参数值的平方根。如果参数是一个负值，则返回NaN。  
Math.log()：返回以e为底的自然对数值。
Math.exp()：返回e的指数，也就是常数e的参数次方。
Math.round()：四舍五入  
Math.random()：返回0到1之间的一个伪随机数，可能等于0，但是一定小于1。
（3）三角函数方法
Math.sin()：返回参数的正弦  
Math.cos()：返回参数的余弦  
Math.tan()：返回参数的正切  
Math.asin()：返回参数的反正弦（弧度值）  
Math.acos()：返回参数的反余弦（弧度值）  
Math.atan()：返回参数的反正切（弧度值）
3.6 JSON对象
（1）方法
JSON.stringify()   
//用于将一个值转为字符串。该字符串应该符合JSON格式，并且可以被JSON.parse方法还原。
//（JSON.stringify(obj, selectedProperties)）还可以接受一个数组，作为第二个参数，指定需要转成字符串的属性。
//还可以接受第三个参数，用于增加返回的JSON字符串的可读性。如果是数字，表示每个属性前面添加的空格（最多不超过10个）；如果是字符串（不超过10个字符），则该字符串会添加在每行前面。

JSON.parse()   //用于将JSON字符串转化成对象。
3.7 console对象
（1）方法
console.log(text,text2,...)   //用于在console窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。如果第一个参数是格式字符串（使用了格式占位符），console.log方法将依次用后面的参数替换占位符，然后再进行输出。
console.info()   //在console窗口输出信息，同时，会在输出信息的前面，加上一个蓝色图标。
console.debug()  //在console窗口输出信息，同时，会在输出信息的前面，加上一个蓝色图标。
console.warn()  //输出信息时，在最前面加一个黄色三角，表示警告；
console.error()  //输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈
console.table()  //可以将复合类型的数据转为表格显示。
console.count()  //用于计数，输出它被调用了多少次。
console.dir()    //用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
console.dirxml()  //用于以目录树的形式，显示DOM节点。
console.assert()  //接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

//这两个方法用于计时，可以算出一个操作所花费的准确时间。
console.time()
console.timeEnd()
//time方法表示计时开始，timeEnd方法表示计时结束。它们的参数是计时器的名称。调用timeEnd方法之后，console窗口会显示“计时器名称: 所耗费的时间”。

console.profile()  //用来新建一个性能测试器（profile），它的参数是性能测试器的名字。
console.profileEnd()  //用来结束正在运行的性能测试器。

console.group()
console.groupend()
//上面这两个方法用于将显示的信息分组。它只在输出大量信息时有用，分在一组的信息，可以用鼠标折叠/展开。
console.groupCollapsed()  //用于将显示的信息分组，该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。

console.trace()  //显示当前执行的代码在堆栈中的调用路径。
console.clear()  //用于清除当前控制台的所有输出，将光标回置到第一行。


正则表达式：
只允许输入汉字：onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" 
只允许输入数字：onkeyup="this.value=this.value.replace(/\D/g,'')"
[1, [2, [3, 4]]].toString() // "1,2,3,4"
例子：

<ul class=”main”>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
请用原生JS实现：
        <ul class=”main”>
			<div>A</div>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<div>B</div>
</ul>


<body>
		<ul id="main">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
		<script type="text/javascript">
		  var main=document.getElementById("main");
		  var DIV=document.createElement("div");
		  DIV.innerText="B";
		  var P=document.createElement("p");
		  P.innerText="A";
		  main.appendChild(DIV);
		  main.insertBefore(P, main.firstChild);
		</script>
	</body>


JQuery选择器：

0、常用选择器
$('#div1')   //id为div1的节点，如<div id='div1'></div> 

$('span')   //所有的span结点，一个包装集
$('p span')   //p标签下的所有span节点，后代节点
$('p>span')   //p标签下的所有span子节点，子代节点

$('.red')  //使用样式red的节点，如<span class="red"></span>

$('*')  //所有节点

$("div,span,p.cls")  //选取所有<div>，<span>和拥有class为cls的<p>标签的一组元素


1、基本筛选器
$('span:first')    //第一个节点
$('span:last')     //最后一个节点

$("td:even")     //索引为偶数的节点，从 0 开始
$("td:odd")      //索引为奇数的节点，从 0 开始
 
$("td:eq(1)")    //给定索引值的节点
$("td:gt(0)")    //大于给定索引值的节点
$("td:lt(2)")    //小于给定索引值的节点

$(":focus")      //当前获取焦点的节点
$(":animated")   //正在执行动画效果的节点


2、内容选择器
$("div:contains('hello')")    //包含hello文本的节点
$("td:empty")    //不包含子节点或者文本的空节点
$("div:has(p)")  //含有选择器所匹配的节点
$("td:parent")   //含有子节点或者文本的节点


3、表单选择器
$("input:checked")    //所有选中的节点
$("select option:selected")    //select中所有选中的option节点

$(":input")      //匹配所有 input, textarea, select 和 button 节点
$(":text")       //所有的单行文本框
$(":password")   //所有密码框
$(":radio")      //所有单选按钮
$(":checkbox")   //所有复选框
$(":submit")     //所有提交按钮
$(":reset")      //所有重置按钮
$(":button")     //所有button按钮
$(":file")       //所有文件域


4、筛选与查找
$("p").eq(0)       //当前操作中第N个jQuery对象,类似索引
$('li').first()    //第一个节点
$('li').last()     //最后一个节点
$(this).hasClass("node")    //节点是否含有某个特定的类,返回布尔值
$('li').has('ul')  //包含特定后代的节点

$("div").children()      //div中的每个子节点,第一层
$("div").find("span")    //查找div下的所有span节点

$("p").next()       　　　//紧邻p节点后的一个同辈节点
$("p").nextAll()         //p节点之后所有的同辈节点
$("#node").nextUntil("#node2")    //id为"#node"节点之后到id为'#node2'之间所有的同辈节点,掐头去尾

$("p").prev()            //紧邻p节点前的一个同辈节点
$("p").prevAll()         //p节点之前所有的同辈节点
$("#node").prevUntil("#node2")    //id为"#node"节点之前到id为'#node2'之间所有的同辈节点,掐头去尾

$("p").parent()          //每个p节点的父节点
$("p").parents()         //每个p节点的所有祖先节点,body,html
$("#node").parentsUntil("#node2")    //id为"#node"节点到id为'#node2'之间所有的父级节点,掐头去尾

$("div").siblings()      //所有的同辈节点,不包括自己


5、属性操作
$("img").attr("src");    　　　　　　 //返回文档中所有图像的src属性值
$("img").attr("src","node.jpg");    //设置所有图像的src属性
$("img").removeAttr("src");    　　　//将文档中图像的src属性删除

$("input[type='checkbox']").prop("checked", true);    //选中复选框
$("input[type='checkbox']").prop("checked", false);   //不选中复选框
$("img").removeProp("src");    　　 //删除img的src属性


6、样式操作
$("p").addClass("selected");    　　//为p节点加上 'selected' 类
$("p").removeClass("selected");    //从p节点中删除 'selected' 类
$("p").toggleClass("selected");    //如果存在就删除,否则就添加HTML代码/文本/值


7、内容操作
$('p').html();    　　　　　　　　　　 //返回p节点的html内容
$("p").html("Hello <b>hello</b>!");  //设置p节点的html内容
$('p').text();    　　　　　　　　　　 //返回p节点的文本内容
$("p").text("hello");    　　　　　　　//设置p节点的文本内容
$("input").val();    　　　　　　　　 //获取文本框中的值
$("input").val("hello");     　　　　 //设置文本框中的内容
 

8、CSS操作
$("p").css("color");          //访问查看p节点的color属性
$("p").css("color","red");    //设置p节点的color属性为red
$("p").css({ "color": "red", "background": "yellow" });    //设置p节点的color为red，background属性为yellow（设置多个属性要用{}字典形式）


9、定位与偏移
$('p').offset()     //节点在当前视口的相对偏移,对象 {top: 5, left: 9}
$('p').offset().top
$('p').offset().left
$("p").position()   //节点相对父节点的偏移,对可见节点有效，Object {top: 5, left: 8}

$(window).scrollTop()    //获取滚轮滑的高度
$(window).scrollLeft()   //获取滚轮滑的宽度
$(window).scrollTop('25')    //设置滚轮滑的高度为25


10、尺寸
$("p").height();    //获取p节点的高度
$("p").width();     //获取p节点的宽度

$("p:first").innerHeight()    //获取第一个匹配节点内部区域高度(包括补白、不包括边框)
$("p:first").innerWidth()     //获取第一个匹配节点内部区域宽度(包括补白、不包括边框)

$("p:first").outerHeight()    //匹配节点外部高度(默认包括补白和边框)
$("p:first").outerWidth()     //匹配节点外部宽度(默认包括补白和边框)
$("p:first").outerHeight(true)    //为true时包括边距


11、DOM内部插入
$("p").append("<b>hello</b>");    //每个p节点内后面追加内容
$("p").appendTo("div");    　　　 //p节点追加到div内后
$("p").prepend("<b>Hello</b>");  //每个p节点内前面追加内容
$("p").prependTo("div");    　   //p节点追加到div内前


12、DOM外部插入
$("p").after("<b>hello</b>");     //每个p节点同级之后插入内容
$("p").before("<b>hello</b>");    //在每个p节点同级之前插入内容
$("p").insertAfter("#node");     //所有p节点插入到id为node节点的后面
$("p").insertBefore("#node");    //所有p节点插入到id为node节点的前面


13、DOM替换
$("p").replaceWith("<b>Paragraph. </b>");    //将所有匹配的节点替换成指定的HTML或DOM节点
$("<b>Paragraph. </b>").replaceAll("p");     //用匹配的节点替换掉所有 selector匹配到的节点


14、DOM删除
$("p").empty();     //删除匹配的节点集合中所有的子节点，不包括本身
$("p").remove();    //删除所有匹配的节点,包括本身
$("p").detach();    //删除所有匹配的节点(和remove()不同的是:所有绑定的事件、附加的数据会保留下来)


15、DOM复制
$("p").clone()    　　//克隆节点并选中克隆的副本
$("p").clone(true)   //布尔值指事件处理函数是否会被复制
 

16、DOM加载完成事件
$(document).ready(function(){
  您的代码...
});

//缩写
$(function($) {
  您的代码...
});


17、绑定事件
//bind 为每个匹配节点绑定事件处理函数，绑定多个用{}。
$("p").bind("click", function(){
  alert( $(this).text() );
});
$('#div1').bind({
    "mouseover":function () {
     $('#div1').parent().removeClass("hide");
     },"mouseout":function () {
     $('#div1').parent().addClass("hide");
}
});         

$("p").one( "click", function(){})    //事件绑定后只会执行一次
$("p").unbind( "click" )        //反绑一个事件

// 与bind 不同的是当时间发生时才去临时绑定。
$("p").delegate("click",function(){
  您的代码
});

$("p").undelegate();    　　　//p节点删除由 delegate() 方法添加的所有事件
$("p").undelegate("click")   //从p节点删除由 delegate() 方法添加的所有click事件

$("p").click();    　　//单击事件
$("p").dblclick();    //双击事件
$("input[type=text]").focus()  //节点获得焦点时,触发 focus 事件
$("input[type=text]").blur()   //节点失去焦点时,触发 blur事件
$("button").mousedown()//当按下鼠标时触发事件
$("button").mouseup()  //节点上放松鼠标按钮时触发事件
$("p").mousemove()     //当鼠标指针在指定的节点中移动时触发事件
$("p").mouseover()     //当鼠标指针位于节点上方时触发事件
$("p").mouseout()    　//当鼠标指针从节点上移开时触发事件
$(window).keydown()    //当键盘或按钮被按下时触发事件
$(window).keypress()   //当键盘或按钮被按下时触发事件,每输入一个字符都触发一次
$("input").keyup()     //当按钮被松开时触发事件
$(window).scroll()     //当用户滚动时触发事件
$(window).resize()     //当调整浏览器窗口的大小时触发事件
$("input[type='text']").change()    //当节点的值发生改变时触发事件
$("input").select()    //当input 节点中的文本被选择时触发事件
$("form").submit()     //当提交表单时触发事件
$(window).unload()     //用户离开页面时


18、事件对象
$("p").click(function(event){  
 alert(event.type); //"click"  
}); 

(evnet object)属性方法：
event.pageX 　 //事件发生时，鼠标距离网页左上角的水平距离
event.pageY 　 //事件发生时，鼠标距离网页左上角的垂直距离
event.type 　　//事件的类型
event.which 　 //按下了哪一个键
event.data 　　//在事件对象上绑定数据，然后传入事件处理函数
event.target 　//事件针对的网页节点
event.preventDefault() 　//阻止事件的默认行为(比如点击链接，会自动打开新页面)
event.stopPropagation()  //停止事件向上层节点冒泡


19、动态事件绑定
 $("p").on("click",'span',function(){
alert( $(this).text() );
});
//当p中增加span时仍然有效


20、动画效果
$("p").show()    　　　　//显示隐藏的匹配节点
$("p").show("slow");    //参数表示速度,("slow","normal","fast"),也可为600毫秒
$("p").hide()    　　　　//隐藏显示的节点
$("p").toggle();   　　 //切换 显示/隐藏

$("p").slideDown("600");    //用600毫秒时间将段落滑下
$("p").slideUp("600");    　//用600毫秒时间将段落滑上
$("p").slideToggle("600");  //用600毫秒时间将段落滑上，滑下淡入淡出

$("p").fadeIn("600");    　　  //用600毫秒时间将段落淡入
$("p").fadeOut("600");    　　 //用600毫秒时间将段落淡出
$("p").fadeToggle("600");    　//用600毫秒时间将段落淡入,淡出
$("p").fadeTo("slow", 0.6);    //用600毫秒时间将段落的透明度调整到0.6
 

21、工具方法
$("#form1").serialize()    //序列表表格内容为字符串。
$("select, :radio").serializeArray();  //序列化表单元素为数组返回 JSON 数据结构数据
$.trim() 　　//去除字符串两端的空格
$.each() 　　//遍历一个数组或对象，for循环
$.inArray() //返回一个值在数组中的索引位置，不存在返回-1  
$.grep() 　 //返回数组中符合某种标准的节点
$.extend({a:1,b:2},{b:3,c:4},{c:5:d:6})  //将多个对象，合并到第一个对象{a:1,b:3,c:5,d:6}
$.makeArray() //将对象转化为数组
$.type()    //判断对象的类别（函数对象、日期对象、数组对象、正则对象等等
$.isArray() //判断某个参数是否为数组
$.isEmptyObject() //判断某个对象是否为空(不含有任何属性)
$.isFunction()    //判断某个参数是否为函数
$.isPlainObject() //判断某个参数是否为用"{}"或"new Object"建立的对象
$.support()       //判断浏览器是否支持某个特性

22、AJAX
//保存数据到服务器，成功时显示信息
$.ajax({
   type: "POST",
   url: "some.php",
   data: "name=John&location=Boston",
   success: function(msg){
     alert( "Data Saved: " + msg );
   }
});

//加载 feeds.html 文件内容。
$("#feeds").load("feeds.html");

//请求 test.php 网页，传送2个参数，忽略返回值。
$.get("test.php", { name: "John", time: "2pm" } );

//从 Flickr JSONP API 载入 4 张最新的关于猫的图片。
$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format
=json&jsoncallback=?", function(data){
  $.each(data.items, function(i,item){
    $("<img/>").attr("src", item.media.m).appendTo("#images");
    if ( i == 3 ) return false;
  });
});

//加载并执行 test.js ，成功后显示信息
$.getScript("test.js", function(){
  alert("Script loaded and executed.");
});

//向页面 test.php 发送数据，并输出结果（HTML 或 XML，取决于所返回的内容）：
$.post("test.php", { name: "John", time: "2pm" },
   function(data){
     alert("Data Loaded: " + data);
   });
   
//AJAX 请求完成时执行函数。
 $("#msg").ajaxComplete(function(event,request, settings){
   $(this).append("<li>请求完成.</li>");
 });
 
//AJAX 请求失败时显示信息。
$("#msg").ajaxError(function(event,request, settings){
     $(this).append("<li>出错页面:" + settings.url + "</li>");
});

//AJAX 请求发送前显示信息。
 $("#msg").ajaxSend(function(evt, request, settings){
   $(this).append("<li>开始请求: " + settings.url + "</li>");
 });
 
 //AJAX 请求开始时显示信息。
 $("#loading").ajaxStart(function(){
   $(this).show();
 });
 
//AJAX 请求结束后隐藏信息。
 $("#loading").ajaxStop(function(){
   $(this).hide();
 });
 
//当 AJAX 请求成功后显示消息。
 $("#msg").ajaxSuccess(function(evt, request, settings){
   $(this).append("<li>请求成功!</li>");
 });
 
//请求前过滤
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) { 
   // Modify options, control originalOptions, store jqXHR, etc 
 });
 
 //设置全局 AJAX 默认选项，设置 AJAX 请求默认地址为 "/xmlhttp/"，禁止触发全局 AJAX 事件，用 POST 代替默认 GET 方法。其后的 AJAX 请求不再设置任何选项参数。
$.ajaxSetup({
  url: "/xmlhttp/",
  global: false,
  type: "POST"
});
$.ajax({ data: myData });






JavaScript中巧用位运算
日常前端开发中我们很少用到位运算，容易让人遗忘，让我们一起回顾下一下js中的位运算。
位运算详细说明查看JavaScript|MDN
下面主要回顾一下一些常用的位运算的巧用。
将十进制转化为二进制
var number = 3;
var result = number.toString(2);

var result2 = 14..toString(2); // "1110"


我们使用位运算来代替Math.floor()来向下取整
var data = 2.2352524535;
var result = data | 0; // 2


var re2 = ~~data; // 2

将颜色从RGA转换为Hex格式

var color = {r: 186, g: 218, b: 85};

// RGB to HEX
var rgb2hex = function(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).substr(1);
}
rgb2hex(color.r, color.g, color.b);//"#bada55"

区分两个数的大小
// variables
var a = 9285;
var b = 3569;

// 取大
var max = a ^ ((a ^ b) & -(a < b));//9285;

// 取小
var min =  b ^ ((a ^ b) & -(a < b);//3569

交换变量
var a = 10;
var b = 99;

a = (b^=a^=b)^a;

console.log(a) // 99
console.log(b) // 10

判断正负
function isPos(n) {
  return (n === (n >>> 0)) ? true : false;  
}
isPos(-1); // false
isPos(1); // true


常用函数：

/*========================常用函数========================*/

/*时间格式化*/
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, /*月份*/
        "d+": this.getDate(), /*日*/
        "h+": this.getHours(), /*小时*/
        "m+": this.getMinutes(), /*分*/
        "s+": this.getSeconds(), /*秒*/
        "q+": Math.floor((this.getMonth() + 3) / 3), /*季度*/
        "S": this.getMilliseconds() /*毫秒*/
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/*IE浏览器不支持date(time),所以用此方法转换*/
function NewDate(fmt) {
    /*首先将日期分隔 ，获取到日期部分 和 时间部分*/
    var day = fmt.split(' ');
    /*获取日期部分的年月日*/
    var days = day[0].split('-');
    /*获取时间部分的 时分秒*/
    var mi = day[day.length - 1].split(':');
    /*获取当前date类型日期*/
    var date = new Date();
    /*给date赋值  年月日*/
    date.setUTCFullYear(days[0], days[1] - 1, days[2]);
    /*给date赋值 时分秒  首先转换utc时区 ：+8*/
    date.setUTCHours(mi[0] - 8, mi[1], mi[2]);
    return date;
}

/*为空判断*/
function isEmpty(s) {
    switch (typeof(s)) {
        case 'string':
            return !s.length;
            break;
        case 'array':
        case 'object':
            for (var i in s) return false;
            return true;
            break;
        case 'undefined':
            return true;
            break;
        default:
            return !s;
            break;
    }
}

/*数字判断*/
function isNumber(s) {
    return typeof(s) == 'number' ? true : false;
}

/*整数判断*/
function isInt(s) {
    var re = /^-?\d*$/;
    return re.test(s);
}

/*正整数判断*/
function isUInt(s) {
    var re = /^\d*$/;
    return re.test(s) && s >= 0;
}

/*小数判断*/
function isDecimal(s, bit) {
    if (!arguments[1]) bit = -1;
    if (bit == -1) {
        var re = /^-?\d*.?\d*$/;
        return re.test(s);
    } else {
        var re = new RegExp('^-?\\d*.?\\d{0,' + bit + '}$');
        return re.test(s);
    }
}

/*正小数判断*/
function isUDecimal(s, bit) {
    if (!arguments[1]) bit = -1;
    if (bit == -1) {
        var re = /^\d*.?\d*$/;
        return re.test(s) && s >= 0;
    } else {
        var re = new RegExp('^\\d*.?\\d{0,' + bit + '}$');
        return re.test(s) && s >= 0;
    }
}

/*字符串判断*/
function isString(s) {
    return typeof(s) == 'string';
}

/*========================/常用函数========================*/

js onkeyup replace 自动替换

检测浮点数 只能是整数或者小数 
多余的就replace 掉 的表单验证


function checkFloatNum(obj)
{
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d.]/g,"");
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g,"");
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g,".");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
}
解决键盘弹出遮挡：

// 解决键盘弹出后挡表单的问题
		window.addEventListener('resize', function() {
			if(
				document.activeElement.tagName === 'INPUT' ||
				document.activeElement.tagName === 'TEXTAREA'
			) {
				window.setTimeout(function() {
					if('scrollIntoView' in document.activeElement) {
						document.activeElement.scrollIntoView();
					} else {
						document.activeElement.scrollIntoViewIfNeeded();
					}
				}, 0);
			}
		});




单个for循环实现排序：

var a = [12, 13, 65, 54, 86, 21, 37, 1, 95, 4];
var l=a.length;
		for(var i = 0; i < l; i++) {
			if(a[i] > a[i + 1]) {
				var tem = a[i];
				a[i] = a[i + 1];
				a[i + 1] = tem;
			}
			if(i == l - 1) {
				i = -1;
				l--;
			}
		}
		console.log(a);




Object.assign实现:

if (!Object.assign) {
    // 定义assign方法
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) { // assign方法的第一个参数
      'use strict';
      // 第一个参数为空，则抛错
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      // 遍历剩余所有参数
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        // 参数为空，则跳过，继续下一个
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        // 获取改参数的所有key值，并遍历
        var keysArray = Object.keys(nextSource);
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          // 如果不为空且可枚举，则直接浅拷贝赋值
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}
```