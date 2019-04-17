/**
 * 尾调用优化
 */

// function Fibonacci2(n, ac1 = 1, ac2 = 1) {
// 	if (n <= 1) { return ac2 };

// 	return Fibonacci2(n - 1, ac2, ac1 + ac2);
// }

// var a = Fibonacci2(100) // 573147844013817200000
// var b = Fibonacci2(1000) // 7.0330367711422765e+208
// var c = Fibonacci2(10000) // Infinity

/**
 * 扩展运算符
 */

// const a1 = [1, 2];
// // const a2 = [...a1];
// const [...a2] = a1;

// console.log(a2);

/**
 * symbol
 */

// let sb1 = Symbol()
// let sb2 = Symbol("hello")

/**
 * Object.keys()
 */

// var obj = {
// 	sb1:'sb11',
// 	sb2:'sb22'
// }
// console.log(Object.keys(obj));

/**
 * Object.keys()
 */

// let map = new Map()
//     .set(1, "a")
//     .set(2, "b")
//     .set(3, "c");
// console.log(map);

/**
 * Proxy
 */

// var obj = new Proxy({},{
//     get:function(target,key,receiver){
//         console.log(`getting ${key}!`);
//         return Reflect.get(target,key,receiver);
//     },

//     set:function(target,key,receiver){
//         console.log(`setting ${key}!`);
//         return Reflect.set(target,key,receiver);
//     }
// })

/**
 * Promise
 */

// function time(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, "done"); // 定时器启动时候，第三个以后的参数是作为第一个func()的参数传进去。
//     });
// }

// time(100).then(value => console.log(value));

/**
 * Iterator
 */

// let set = new Set()
//     .add("a")
//     .add("b")
//     .add("c");

// let [x, y] = set;

// let [first, ...reset] = set;

/**
 * Generator
 */

// function* generator() {
//   yield 1;
//   yield 2;
//   return 'ending';
// }

// var gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* foo() {
//   yield 1;
//   yield* bar();
//   yield 4;
// }

// function* bar() {
//   yield 2;
//   yield 3;
// }

// for (const value of foo()) {
//   console.log(value);
// }

/**
 * 中序变量完全二叉树
 */

// // 下面是二叉树的构造函数，
// // 三个参数分别是左树、当前节点和右树
// function Tree(left, label, right) {
//   this.left = left;
//   this.label = label;
//   this.right = right;
// }

// // 下面是中序（inorder）遍历函数。
// // 由于返回的是一个遍历器，所以要用generator函数。
// // 函数体内采用递归算法，所以左树和右树要用yield*遍历
// function* inorder(t) {
//   if (t) {
//     yield* inorder(t.left);
//     yield t.label;
//     yield* inorder(t.right);
//   }
// }

// // 下面生成二叉树
// function make(array) {
//   // 判断是否为叶节点
//   if (array.length == 1) return new Tree(null, array[0], null);
//   return new Tree(make(array[0]), array[1], make(array[2]));
// }
// let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// // 遍历二叉树
// var result = [];
// for (let node of inorder(tree)) {
//   result.push(node);
// }

// console.log(result);
// // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// // 用generator实现状态机
// var clock = function*() {
//   while (true) {
//     console.log('Tick!');
//     yield;
//     console.log('Tock!');
//     yield;
//   }
// };
