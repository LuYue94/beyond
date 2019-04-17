function ajax(url, fnSucc, fnFaild)
{
	//1.创建Ajax对象
	/*if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");//为了我兼容IE6.

	}*/

	var oAjax=new XMLHttpRequest()||new ActiveXObject("Microsoft.XMLHTTP");
	
	//2.连接服务器（打开和服务器的连接）
	oAjax.open('GET', url, true);
	
	
	
	//3.发送
	oAjax.send();
	
	//4.接收
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				//alert('成功了：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}
			else
			{
				//alert('失败了');
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}


function post(url, data, callback) {
  return $.ajax({
    type: 'POST',
    url: url,
    data: data,
    dataType: 'json', // 转成json格式
    contentType: 'application/x-www-form-urlencoded'
  });
}

function get(url, data) {
  return $.ajax({
    type: 'GET',
    url: url,
    data: data,
    dataType: '',
    contentType: 'application/x-www-form-urlencoded'
  });
}


var req = new XMLHttpRequest()
req.open('post', '/user/loginValidate.do')
req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    localStorage.setItem('userName', nameIpt.value)
    res = JSON.parse(req.response)
    if (res.success) {
      var _action = '/user/login.do?redirectUrl=' + encodeURIComponent(redirectUrl)
      loginForm.setAttribute('action', _action)
      loginForm.submit()
    } else {
      submitBtn.disabled = false
      hasError.className = 'form-group error'
      msg.innerText = res.message
      // getTryNum()
    }
  }
}
req.send(data)
}