
## andriod ios 与 h5页面交互
```js
// 判断客户端
function devicDistinguish(){
    var ua = navigator.userAgent;
    var iSInAPP = (ua.indexOf("TGParent") >= 0 || ua.indexOf('TGVendor') >= 0);

    var isIos = true;
    if (ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1) {
        isIos = false;
    }
    if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        isIos = true;
    }
    if (!iSInAPP) {
        // console.log('不是app内部可以调用原生分享');
        return 0
    }
    if(!isIos){
        return 1
    }else{
        return 2
    }
    
}
// 客服端调用
function clickMenu() {
    let curretDevic = devicDistinguish();
    switch (curretDevic){
        case 0:
            console.log('不是app内部可以调用原生分享');
            break;
        case 1:
            jsInterface.showShareBoard();//初始化原生分享弹窗
            break;
        case 2:
            shareNew.iphoneEvent('showShareBoard');
            break
    }
}
// 客户端调用 window.test 可以传参过来
window.test = function(data){}
```

## 移动端H5字体支持ttf
```scss
@font-face {
    font-family: "DINCondensedC";
    src: url('./fonts/DINCondensedC.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/;
}
```

## 判断浏览器
```js
var browser={
    versions:function(){
      var u = navigator.userAgent, 
        app = navigator.appVersion;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
        iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        qq: u.match(/\sQQ/i) == " qq" //是否QQ
      };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
  }

  export { browser }
```