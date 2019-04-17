/**
 * 微信 JS-SDK
 * https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
 * 官方演示
 * https://www.weixinsxy.com/jssdk/
 */

/**
 * 使用：
 */

/** main.js 引入 */
import wxinit from '@/common/wechat.js';

/** vue */
// 获取定位
getLocation() {
wechat.getLocation((type, res) => {
	if (type) {
	var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	this.onSuccess({
		latitude,
		longitude
	});
	} else {
	this.onError();
	}
});

// this.onSuccess();
},
onSuccess(pos) {
this.hasData = 1;
this.latitude = pos.latitude;
this.longitude = pos.longitude;

// this.latitude = 23.08331 ;
// this.longitude = 113.3172;

this.init();
},
onError(error) {
console.log("error :", error);
// alert(error.message);
this.hasData = 3;
},

/**
 * 封装微信js的相关功能
 * @param window
 * @param wx
 */
import axios from 'axios'

//生成随机字符串
function randomString(len) {
	len = len || 32;
	var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
	/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	var maxPos = $chars.length;
	var str = '';
	for (var i = 0; i < len; i++) {
		str += $chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return str;
}

//生成时间戳
function timest() {
	var tmp = Date.parse(new Date()).toString();
	tmp = tmp.substr(0, 10);
	return tmp;
}

; (function (window, wx) {
	var appId;
	var signature;
	var w = {};
	var timestamp = timest();
	var nonceStr = randomString(16);
	var curUrl = location.href.split('#')[0];
	console.log('curUrl :', curUrl);
	console.log('timestamp :', timestamp);
	console.log('nonceStr :', nonceStr);
	w.getAppid = function (callback) {
		if (appId == '' || signature == '' || appId == undefined || signature == undefined) {
			axios({
				url: '/wechat/getSignature',
				method: 'get',
				params: {
					noncestr: nonceStr,
					timestamp: timestamp,
					url: curUrl
				},
				responseType: 'json'
			}).then(function (res) {
				console.log(res)
				if (res.result.appId) {
					appId = res.result.appId;
					signature = res.result.signature;
					if (typeof (callback) == 'function') {
						// registerFn
						callback(appId, signature)
					}
				} else {
					console.log("获取不到signature");
				}
			}).catch(function () {
				console.log("服务器报错");
			});
		} else {
			if (typeof (callback) == 'function') {
				callback(appId, signature)
			}
		}

	}
	// 注入权限验证配置
	w.registerFn = function (appId, signature) {
		console.log('wx_registerFn')
		wx.config({
			debug: false,
			// appId: 'wxc3a6604859cbb8a5',
			// timestamp: 1548487651,
			// nonceStr: 'RYmHMS3sninGfmSK',
			// signature: '74e319a0d024070a9e1e7ff71d0c0575ea996a4c',
			appId: appId,
			timestamp: timestamp,
			nonceStr: nonceStr,
			signature: signature,
			jsApiList: [
				'scanQRCode',
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
				'onMenuShareQQ',
				'onMenuShareWeibo',
				'onMenuShareQZone',
				'getLocation'
			]
		});
	}
	w.init = function () {
		console.log('wx_init');
		// test
		// w.registerFn(appId, signature);

		if (appId == null || signature == null) {
			w.getAppid(w.registerFn);
		} else {
			w.registerFn(appId, signature);
		}
	}
	// 分享
	w.initShare = function (title, desc, link, imgUrl, success, cancel) {
		w.init();
		wx.ready(function () {

			// 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
			wx.onMenuShareTimeline({
				title: title,
				link: link,
				imgUrl: imgUrl
			});

			// 获取“分享给朋友”按钮点击状态及自定义分享内容接口
			wx.onMenuShareAppMessage({
				title: title,
				desc: desc,
				link: link,
				imgUrl: imgUrl,
				type: 'link', // 分享类型,music、video或link，不填默认为link
			});

			//获取“分享到QQ”按钮点击状态及自定义分享内容接口
			wx.onMenuShareQQ({
				title: title,
				desc: desc,
				link: link,
				imgUrl: imgUrl,
				success: function () {
					// 用户确认分享后执行的回调函数
					if (success) {
						success();
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
					if (cancel) {
						cancel();
					}
				}

			});

			//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
			wx.onMenuShareWeibo({
				title: title, // 分享标题
				desc: desc, // 分享描述
				link: link,
				imgUrl: imgUrl, // 分享图标
				success: function () {
					// 用户确认分享后执行的回调函数
					if (success) {
						success();
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
					if (cancel) {
						cancel();
					}
				}
			});

			//获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
			wx.onMenuShareQZone({
				title: title, // 分享标题
				desc: desc, // 分享描述
				link: link,
				imgUrl: imgUrl, // 分享图标
				success: function () {
					// 用户确认分享后执行的回调函数
					if (success) {
						success();
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
					if (cancel) {
						cancel();
					}
				}
			});
			wx.error(function (res) {
				console.log('err', res)
			});
		});
	}
	// 定位
	w.getLocation = function (callback) {
		w.init();
		wx.ready(function () {
			wx.getLocation({
				// type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				success: function (res) {
					// var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					// var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					// var speed = res.speed; // 速度，以米/每秒计
					// var accuracy = res.accuracy; // 位置精度
					// latitude
					// :
					// 23.08331
					// longitude
					// :
					// 113.3172
					callback(1, res)

				},
				cancel: function (res) {
					alert("cancel,未能获取地理位置");
				}
			});

			wx.error(function (res) {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。  
				alert("error,验证出错");
			});
		})

	}
	//扫一扫
	w.scan = function (callback) {
		// $.showLoading('正在调用扫一扫');
		w.init();
		if (appId && signature) {
			wx.scanQRCode({
				// 默认为0，扫描结果由微信处理，1则直接返回扫描结果
				needResult: 1,
				success: function (res) {
					var result = res.resultStr;
					if (callback) {
						callback(result);
					}
				}
			});
		}
		// $.hideLoading();
	}

	window.wechat = w;
})(window, wx);