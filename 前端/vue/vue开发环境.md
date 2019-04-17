# 环境搭建
* nodejs安装——[官网](https://nodejs.org/en/)
* 配置npm源（换淘宝源）
```
npm config set registry https://registry.npm.taobao.org
```
在用户目录下打开.npmrc文件，复制下面代码替换：
```
registry=https://registry.npm.taobao.org/
phantomjs=http://npm.taobao.org/mirrors/phantomjs
ChromeDriver=http://npm.taobao.org/mirrors/chromedriver
Selenium=http://npm.taobao.org/mirrors/selenium
```
* 使用npm全局安装vue-cli
```
npm install -g vue-cli
```
* 使用vue命令创建项目
```
vue init webpack#2.0 my_project
```
———— 此处设置基础配置时注意不要开启eslint语法检查功能 ————
* 进入项目目录，安装包依赖
```
cd my_project
npm install
```
* 运行项目
```
npm run dev
```
* 打包项目
```
npm run build
```
* 单元测试
```
npm run unit
```
* e2e测试
```
npm run e2e
```
* 单独安装一个包
```
npm install vue-router --save-dev
```

# 开发工具
## Vue.js devtools
* chrome Vue开发插件——
[安装地址](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN)

# 学习资料
* [vuejs文档](http://cn.vuejs.org/)
* [vuex文档](http://vuex.vuejs.org/) ——（状态管理插件）
* [vue-router文档](http://router.vuejs.org/) ——（路由管理插件）
* [vue-resource文档](https://github.com/vuejs/vue-resource/tree/master/docs) ——（ajax插件）
* [vue-validator文档](http://vuejs.github.io/vue-validator/) ——（表单验证插件）
* [vuejs2.0文档-English](http://rc.vuejs.org/)
* [vuejs2.0文档-中文版](http://vuefe.cn/)
* [vue-router2.0文档](https://github.com/vuejs/vue-router/tree/next/docs/en)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)

# 开源项目
* [饿了么前端开源项目（很多项目用到vuejs）](https://github.com/ElemeFE)
* [蘑菇街移动端Vue-SPA](https://github.com/andylei18/vue-shopping)
* [Element（饿了么基于vue2.0的开源组件库）](http://element.eleme.io/)
* [HackerNews（vue2.0官方范例）](https://vue-hn.now.sh/top)