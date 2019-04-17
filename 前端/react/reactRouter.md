
## react router 4.0

`react-router React Router` 核心
`react-router-dom` 用于 DOM 绑定的 React Router
`react-router-native` 用于 React Native 的 React Router
react-router-redux React Router 和 Redux 的集成
`react-router-config` 静态路由配置的小助手
`react-router-redux` 搭配 Redux



## React Router 通配符



```js
<Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

//:paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。

<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

//()表示URL的这个部分是可选的。

<Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*">
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

//*匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。

<Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg

//** 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。

```