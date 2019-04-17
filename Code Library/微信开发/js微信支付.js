// ## 公众号
// ----------------------支付回调-----------------------
import { Toast } from 'vue-ydui/dist/lib.rem/dialog';
function onBridgeReady(data, back) {

    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": data.appId,     //公众号名称，由商户传入
            "timeStamp": data.timeStamp, //时间戳，自1970年以来的秒数
            "nonceStr": data.nonceStr, //随机串
            "package": data.package,
            "signType": data.signType, //微信签名方式：
            "paySign": data.paySign //微信签名
        },
        function (res) {
            Toast({
                mes: res,
                timeout: 2000,
            });
            if (res.err_msg == "get_brand_wcpay_request:ok") {
                Toast({
                    mes: '支付成功!',
                    timeout: 2000,
                });
                if (back) {
                    // 自定义回调
                    back()
                }

            } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                Toast({
                    mes: '已取消支付!',
                    timeout: 2000,
                });
            } else {
                Toast({
                    mes: '支付失败!',
                    timeout: 2000,
                });
            }
        }
    );
}

// -----------------------监听支付回调事件----------------------
function wxPay(data, back) {
    if (typeof WeixinJSBridge == "undefined") {//微信浏览器内置对象。参考微信官方文档
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady(data, back), false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady(data, back));
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(data, back));
        }
    } else {
        onBridgeReady(data, back);
    }
}

export { wxPay }


// -----------------------调用----------------------
payCallBack(){
    let self = this;
    self.outTime = setTimeout(function(){
        self.$router.push('/schoolTg/index')
        clearTimeout(self.outTime)
    },2000)
},
wxPayFn(res){
    wxPay(res.wxpub,this.payCallBack)
},

// ## 小程序
wx.requestPayment({
    timeStamp: timeStamp,
    nonceStr: nonceStr,
    package: orderPackage,
    signType: 'MD5',
    paySign: paySign,
    success: function (res) {

      console.log(res)
      // console.log('wx',res)
      if (res.errMsg === 'requestPayment:ok') {
        // self.jumpToPayStatus('ok')
        wechat.showToast("支付成功")
        self.setData({
          sumbitEnd: false
        })
        wx.hideLoading()
      } else if (res.errMsg === 'requestPayment:fail cancel') {
        // self.cancelPay()
        wechat.showToast("支付失败")
        self.setData({
          sumbitEnd: false
        })
        wx.hideLoading()
      } else {
        // self.cancelPay()
        wechat.showToast("取消支付")
        self.setData({
          sumbitEnd: false
        })
        wx.hideLoading()
      }
    },
    fail: function (err) {
      console.log(err)
      wechat.showToast("取消支付")
      wx.hideLoading()
      self.setData({
        sumbitEnd: false
      })
      // self.cancelPay()
    },
  })