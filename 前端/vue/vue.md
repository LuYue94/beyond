## vue-cli

```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖，走你
$ cd my-project
$ npm install
$ npm run dev
```

> A Vue.js project

import 路径
@ ---- '@': resolve('src')

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## scss

第一步，

npm install node-sass --save-dev
`npm install node-sass@latest `
npm install sass-loader --save-dev



第二步，打开 webpack.base.config.js 在 loaders 里面加上

    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }

第三步，在需要用到 scss 的地方写上

<style lang="scss" scoped>

</style>

## vuex

npm install vuex --save

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

## element-ui

npm i element-ui

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
el: '#app',
render: h => h(App)
})

## vue-router

npm install vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

```js
routes

类型: Array<RouteConfig>

RouteConfig 的类型定义：

declare type RouteConfig = {
  path: string;
  component?: Component;
  name?: string;                              // 命名路由
  components?: { [name: string]: Component }; // 命名视图组件
  redirect?: string | Location | Function;
  props?: boolean | string | Function;
  alias?: string | Array<string>;
  children?: Array<RouteConfig>;              // 嵌套路由
  beforeEnter?: (to: Route, from: Route, next: Function) => void;
  meta?: any;

  // 2.6.0+
  caseSensitive?: boolean; // 匹配规则是否大小写敏感？(默认值：false)
  pathToRegexpOptions?: Object; // 编译正则的选项
}


mode

类型: string
默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境)
可选值: "hash" | "history" | "abstract"
配置路由模式:

    hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
    history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
    abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。


base 基路径
linkActiveClass
linkExatActiveClass
scrollBehavior
parseQuery / stringifyQuery
fallback
```

![生命周期](lifecycle.png)

## Vue 对象的选项

```js
var vm = new Vue({
  // 数据
  data: "声明需要响应式绑定的数据对象",
  props: "接收来自父组件的数据",
  propsData: "创建实例时手动传递props，方便测试props",
  computed: "计算属性",
  methods: "定义可以通过vm对象访问的方法",
  watch: "Vue实例化时会调用$watch()方法遍历watch对象的每个属性",
  // DOM
  el: "将页面上已存在的DOM元素作为Vue实例的挂载目标",
  template: "可以替换挂载元素的字符串模板",
  render: "渲染函数，字符串模板的替代方案",
  renderError: "仅用于开发环境，在render()出现错误时，提供另外的渲染输出",
  // 生命周期钩子
  beforeCreate: "发生在Vue实例初始化之后，data observer和event/watcher事件被配置之前",
  created: "发生在Vue实例初始化以及data observer和event/watcher事件被配置之后",
  beforeMount: "挂载开始之前被调用，此时render()首次被调用",
  mounted: "el被新建的vm.$el替换，并挂载到实例上之后调用",
  beforeUpdate: "数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前",
  updated: "数据更改导致虚拟DOM重新渲染和打补丁之后被调用",
  activated: "keep-alive组件激活时调用",
  deactivated: "keep-alive组件停用时调用",
  beforeDestroy: "实例销毁之前调用，Vue实例依然可用",
  destroyed: "Vue实例销毁后调用，事件监听和子实例全部被移除，释放系统资源",
  // 资源
  directives: "包含Vue实例可用指令的哈希表",
  filters: "包含Vue实例可用过滤器的哈希表",
  components: "包含Vue实例可用组件的哈希表",
  // 组合
  parent: "指定当前实例的父实例，子实例用this.$parent访问父实例，父实例通过$children数组访问子实例",
  mixins: "将属性混入Vue实例对象，并在Vue自身实例对象的属性被调用之前得到执行",
  extends: "用于声明继承另一个组件，从而无需使用Vue.extend，便于扩展单文件组件",
  provide&inject: "2个属性需要一起使用，用来向所有子组件注入依赖，类似于React的Context",
  // 其它
  name: "允许组件递归调用自身，便于调试时显示更加友好的警告信息",
  delimiters: "改变模板字符串的风格，默认为{{}}",
  functional: "让组件无状态(没有data)和无实例(没有this上下文)",
  model: "允许自定义组件使用v-model时定制prop和event",
  inheritAttrs: "默认情况下，父作用域的非props属性绑定会应用在子组件的根元素上。当编写嵌套有其它组件或元素的组件时，可以将该属性设置为false关闭这些默认行为",
  comments: "设为true时会保留并且渲染模板中的HTML注释"
});
```

## Vue 对象全局 API

```js
Vue.extend(options); // 通过继承一个option对象来创建一个Vue实例。
Vue.nextTick([callback, context]); // 在下次DOM更新循环结束之后执行延迟回调。
Vue.set(target, key, value); // 设置对象的属性，如果是响应式对象，将会触发视图更新。
Vue.delete(target, key); // 删除对象的属性，如果是响应式对象，将会触发视图更新。
Vue.directive(id, [definition]); // 注册或获取全局指令。
Vue.filter(id, [definition]); // 注册或获取全局过滤器。
Vue.component(id, [definition]); // 注册或获取全局组件。
Vue.use(plugin); // 安装Vue插件。
Vue.mixin(mixin); // 全局注册一个mixin对象。
Vue.compile(template); // 在render函数中编译模板字符串。
Vue.version; // 提供当前使用Vue的版本号。
```

## 实例属性和方法

Vue 实例暴露了一系列带有前缀$的实例属性与方法。

```js
let vm = new Vue();
vm = {
  // Vue实例属性的代理
  $data: '被watch的data对象',
  $props: '当前组件收到的props',
  $el: 'Vue实例使用的根DOM元素',
  $options: '当前Vue实例的初始化选项',
  $parent: '父组件Vue对象的实例',
  $root: '根组件Vue对象的实例',
  $children: '当前实例的直接子组件',
  $slots: '访问被slot分发的内容',
  $scopedSlots: '访问scoped slots',
  $refs: '包含所有拥有ref注册的子组件',
  $isServer: '判断Vue实例是否运行于服务器',
  $attrs: '包含父作用域中非props的属性绑定',
  $listeners: '包含了父作用域中的v-on事件监听器',
  // 数据
  $watch: '观察Vue实例变化的表达式、计算属性函数',
  $set: '全局Vue.set的别名',
  $delete: '全局Vue.delete的别名',
  // 事件
  $on: '监听当前实例上的自定义事件，事件可以由vm.$emit触发',
  $once: '监听一个自定义事件，触发一次之后就移除监听器',
  $off: '移除自定义事件监听器',
  $emit: '触发当前实例上的事件',
  // 生命周期
  $mount: '手动地挂载一个没有挂载的Vue实例',
  $forceUpdate: '强制Vue实例重新渲染，仅影响实例本身和插入插槽内容的子组件',
  $nextTick: '将回调延迟到下次DOM更新循环之后执行',
  $destroy: '完全销毁一个实例，解绑它的全部指令及事件监听器'
};
```

## 内置指令(2.4.2)：

```html
<html
  v-text = "更新元素的textContent"
  v-html = "更新元素的innerHTML","scoped不会应用在v-html内部，可使用css module"
  v-show = "根据表达式的true/false，切换HTML元素的display属性"
  v-for = "遍历内部的HTML元素"
  v-pre = "跳过表达式渲染过程，可以显示原始的Mustache标签"
  v-cloak = "保持在HTML元素上直到关联实例结束编译，可以隐藏未编译的Mustache"
  v-once = "只渲染元素和组件一次"
></html>
<!-- 根据表达式的true和false来决定是否渲染元素 -->
<div v-if="type === "A"">A</div>
<div v-else-if="type === "B"">B</div>
<div v-else-if="type === "C"">C</div>
<div v-else>Not A/B/C</div>
<!-- 动态地绑定属性或prop到表达式 -->
<p v-bind:attrOrProp
  .prop = "被用于绑定DOM属性"
  .camel = "将kebab-case特性名转换为camelCase"
  .sync = "语法糖，会扩展成一个更新父组件绑定值的v-on监听器"
></p>
<!-- 绑定事件监听器 -->
<button
  v-on:eventName
  .stop = "调用event.stopPropagation()"
  .prevent = "调用event.preventDefault()"
  .capture = "添加事件监听器时使用capture模式"
  .self = "当事件是从监听器绑定的元素本身触发时才触发回调"
  .native = "监听组件根元素的原生事件"-
  .once = "只触发一次回调"
  .left = "点击鼠标左键触发"
  .right = "点击鼠标右键触发"
  .middle = "点击鼠标中键触发"
  .passive = "以{passive: true}模式添加监听器"
  .{keyCode | keyAlias} = "触发特定键触事件"

  .keyup.13 = "按键"
  .keyup.enter = "按键别名"
        .tab
        .delete = "(捕获“删除”和“退格”键)"
        .esc
        .space
        .up
        .down
        .left
        .right
        .ctrl
        .alt
        .shift
        .meta  '⊞'
        .alt.67  'ctrl + c'

>
</button>
<!-- 表单控件的响应式绑定 -->
<input
  v-model
  .lazy = "取代input监听change事件"
  .number = "输入字符串转为数字"
  .trim = "过滤输入的首尾空格" />


v-for
数组  
  item in array
  (item, index) in array
对象
  value in obj
  (value, key) in obj
  (value, key, index) in obj


当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。


由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
    当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
    解决：Vue.set(example1.items, indexOfItem, newValue)
    当你修改数组的长度时，例如：vm.items.length = newLength
    解决：example1.items.splice(indexOfItem, 1, newValue)

还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：
  Vue.set(vm.userProfile, 'age', 27)
```

## 指令

### 钩子函数

```js
Vue.directive('**', {
  bind: '初始化调用',
  inserted: '被绑定元素插入父节点时调用',
  update: 'vnode更新是时调用',
  componentUpdated: '指令所在的组件的VNode及其子VNode全部更新后调用',
  unbind: '解绑时调用'
});
```

### 构造函数参数

* el：指令所绑定的元素，可以用来直接操作 DOM 。
* binding：一个对象，包含以下属性：
  * name：指令名，不包括 v- 前缀。
  * value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
  * oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
  * expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
  * arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
  * modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
* vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
* oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

## 实例方法 事件

vm.$emit( event, […args] ) 触发事件
vm.$on( event, callback ) 监听事件，支持 array
vm.$once( event, callback ) 监听一个事件，一次
vm.$off( [event, callback] ) 解绑

## 特殊属性

key
ref 子组件引用
slot 插槽
slot-scope
is
