## 浏览器
1、输入url到展示页面过程发生了什么？
2、重绘与回流 重绘(repaint): 当元素样式的改变不影响布局时，浏览器将使用重绘对元素进行更新，此时由于只需要UI层面的重新像素绘制，因此 损耗较少回流(reflow): 当元素的尺寸、结构或触发某些属性时，浏览器会重新渲染页面，称为回流。此时，浏览器需要重新经过计算，计算后还需要重新页面布局，因此是较重的操作。会触发回流的操作:* 页面初次渲染* 浏览器窗口大小改变* 元素尺寸、位置、内容发生改变* 元素字体大小变化* 添加或者删除可见的 dom 元素* 激活 CSS 伪类（例如：:hover）* 查询某些属性或调用某些方法* clientWidth、clientHeight、clientTop、clientLeft* offsetWidth、offsetHeight、offsetTop、offsetLeft* scrollWidth、scrollHeight、scrollTop、scrollLeft* getComputedStyle()* getBoundingClientRect()* scrollTo()回流必定触发重绘，重绘不一定触发回流。重绘的开销较小，回流的代价较高。
3、防抖与节流
4、cookies、session、sessionStorage、localStorage
5、浏览器内核服务端与网络1、常见状态码2、缓存 200 From cache和200 ok400,401,403状态码分别代表什么浏览器缓存3、cookie, session, token4、前端持久化的方式、区别5、DNS是怎么解析的6、cdn7、计算机网络的相关协议
8、http/https/http2.0
9、get post区别
10、ajax、 axios库
11、tcp三次握手，四次挥手流程
12、跨域
13、前端安全XSS、CSRF
14、websocket
15、Http请求中的keep-alive有了解吗
16、网络分层
17、即时通信，除了Ajax和websocket
18、模块化，commonJS，es6，cmd，amd