## let,const

## 解构赋值

{ foo, bar } = { "aaa", "bbb" }

// 模式 变量
{ foo: baz } = { foo: "aaa", bar: "bbb" };
// 默认值
{ foo = baz } = { foo: "aaa", bar: "bbb" };

## 字符串扩展
str.includes()
str.startsWith()
str.endsWith()
str.repert()
str.padStart() 用于头部补全
str0padEnd() 用于尾部补全

## 模板字符串
```js
`string ${foo}`
```
## Number
Number.isFinite()
Number.isNaN()
Number.parseInt()
Number.parseFloat()
Number.isInteger()
Number.EPSILON

## 箭头函数
箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数

## 双冒号运算符
foo::bar;
// 等同于
bar.bind(foo);

## 扩展运算符
...
将一个数组转为用逗号分隔的参数序列。

## 数组的扩展
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);

const a1 = [1, 2];
const a2 = [...a1];
const [...a2] = a1;

Array.find()
Array.findIndex()
Array.includes()
Array.fill()


ES6 对数组空位的处理，则是明确将空位转为undefined。

## 对象的扩展
const baz = {foo};
// 等同于
const baz = {foo: foo};

{x, y};
// 等同于
{x: x, y: y};

function f(){
	foo,
	foo(){}
	foo:function(){}
}

// 对象
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
// 方法名
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

表达式不能为对象，"[object Object]"


### 方法名

foo.name
// foo
通过  获取方法的方法名

// bound.foo
bind方法创造的函数，name属性返回bound加上原函数的名字；

// anonymous
Function构造函数创造的函数，name属性返回anonymous。

如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。

### Object.is()
Object.is(a,b)

比较两个值是否严格相等
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

### Object.assign()
Object.assign(target,source1,source2)

Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

### super
指向当前对象的原型对象

super.foo等同于
Object.getPrototypeOf(this).foo（属性）
或
Object.getPrototypeOf(this).foo.call(this)（方法）。

### Object.keys()
Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。

let {keys, values, entries} = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
  console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
  console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

### 对象遍历的扩展
Object.values()
Object.keys()
Object.entries()
返回一个数组

## Symbol
Symbol作为对象属性名的时候，只能写在"[]"中

Symbol.for()
在全局登记一个Symbol

Symbol.for("bar") === Symbol.for("bar")
// true

Symbol("bar") === Symbol("bar")
// false


## Set
无重复的值

// 去除数组的重复成员
[...new Set(array)]

Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。

操作方法:
add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。

遍历方法:
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

Set的遍历顺序就是插入顺序

### WeakSet
WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用。

## Map
Map 结构提供了“值—值”的对应

size
set(key,value)
get(key)
has(key)
delete(key)
clear()

允许链式操作

遍历方法：
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历 Map 的所有成员。

Map 的遍历顺序就是插入顺序

## Proxy
代理
var proxy = new Proxy(target, handler)
    proxy实例          原对象，拦截行为

要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

- get(target, propKey, receiver)：           拦截对象属性的读取，比如proxy.foo和proxy['foo']。第三个参数receiver，总是为当前的 Proxy 实例.
- set(target, propKey, value, receiver)：    拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- has(target, propKey)：                     拦截propKey in proxy的操作，返回一个布尔值。
- deleteProperty(target, propKey)：          拦截delete proxy[propKey]的操作，返回一个布尔值。
- ownKeys(target)：                          拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而- Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：                拦截Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：                   拦截Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：                     拦截Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：            拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- apply(target, object, args)：              拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- construct(target, args)：                  拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。


## Reflect
反射
与 Proxy 对应，获取这些操作的默认行为(原生的行为，不被 Proxy 改变)


## Promise

三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）

promise.then(function(value) {
  // success
}, function(error) {
  // failure
});


Promise.prototype.then()
Promise.prototype.catch()
Promise.all()
Promise.race()
Promise.resolve()
Promise.reject()
Promise.try()

Promise.prototype.done()
Promise.prototype.finally()

一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法
// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });

## Iterator 遍历器
原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象

next()

### 遍历器接口
for...of
扩展运算符（...）
解构赋值
Array.from
内部调用的，都是遍历器接口，
它们都可以将Generator函数返回的Iterator对象，作为参数。

## for...of
for...in循环读取键名
for...of循环读取键值

for...in循环有几个缺点。
- 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
- for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
- 某些情况下，for...in循环会以任意顺序遍历键名。

for...of循环相比上面几种做法，有一些显著的优点。
- 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
- 不同于forEach方法，它可以与break、continue和return配合使用。
- 提供了遍历所有数据结构的统一操作接口。

可以使用break语句跳出for...of循环


## Generator
Generator 生成器
yield 产出

Generator 返回一个 iterator 对象


next
Generator.prototype.throw()
Generator.prototype.return()

yield*
在一个Generator函数里面执行另一个Generator函数。


控制流管理，用于所有步骤都是同步操作的情况，不能有异步操作的步骤

let steps = [step1Func, step2Func, step3Func];

function *iterateSteps(steps){
  for (var i=0; i< steps.length; i++){
    var step = steps[i];
    yield step();
  }
}


for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。

## async await
相比generator，async提供 自动执行器
返回值是Promise

async函数返回的Promise对象，必须等到内部所有await命令的Promise对象执行完，才会发生状态改变。
也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

只要一个await语句后面的Promise变为reject，那么整个async函数都会中断执行。

正常情况下，await命令后面是一个Promise对象。如果不是，会被转成一个立即resolve的Promise对象。


await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法

async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  };
}

## module
```js
export var name = 'Michael';

export {name, lastName, year};

export function add(x, y) {
  return x * y;
};

// 重命名
export {
  name as userName,
};

// 
export default
```