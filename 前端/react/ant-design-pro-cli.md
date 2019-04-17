## Cli for Ant Design Pro
https://github.com/ant-design/ant-design-pro-cli

npm install ant-design-pro-cli -g

pro new // will download ant-design-pro in current directory
pro new --no-auto-install // not auto install dependencies 

## roadhog
https://www.npmjs.com/package/roadhog


## react

## react 全家桶简介
https://zhuanlan.zhihu.com/p/33419716


## react-router

## react-redux

store     
action    载荷
dispatch  
type      动作
reducer   

store.dispatch() 将 action 传到 store。

## roadhog

## dva

reducers      处理数据
effects       接受数据
subscriptions 监听数据

dispatch    

effects:
put  用来发起一条action
call 以异步的方式调用函数,支出promise
select 从state中获取相关的数据
take 获取发送的数据

---jsx                            ---modal
state => dispatch(namespace.type,action) => modal/type/{state,effects,reducers}
effects(namespace.type) => put => reducers

npm start

npm run build

## 代理
---- package.json
+    "proxy": "http://localhost:3001/",

## scss

### 第一种：修改 npm script
npm install --save node-sass
npm install --save npm-run-all

---- package.json
+    "build-css": "node-sass src/ -o src/",
+    "watch-css": "npm run build-css && node-sass src/ -o src/ --watch --recursive",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",

### 第二种：修改 create-react-app的webpack配置
/node_modules/react-scripts/config

loader

