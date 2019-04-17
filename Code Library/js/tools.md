# chrome

axure
jsonview

## windows

windowTap 给所有软件窗口增加 tap 切换

## moment.js 日期处理类库

http://momentjs.cn/

## 开源文档工具

[docute](https://github.com/egoist/docute)

## angular-i18n

引入文件'node_modules/angular-i18n/angular-locale_zh-cn.js'  
注入依赖'ngLocale'

## postman

接口

## border

```js
[].forEach.call($$('*'), function(a) {
  a.style.outline =
    '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16);
});
```

## uib-modal

```js
var obj = {
    id: ticketId
}
$uibModal.open({
    templateUrl: '/views/modal/finance/showInv.html',
    controller: 'ShowInvController',
    controllerAs: 'vm',
    size: '',
    // 点击空白处，是否退出uib-modal
    backdrop: 'static',
    // 给uib-modal添加 rankPannel 类
    windowClass: 'rankPanel',
    keyboard: false,
    resolve: {
        items: function () {
            return obj
        }
    }
})

function ShowInvController($uibModalInstance, items) {
// 获取 items
vm.items = items
vm.close = close

function close() {
    $uibModalInstance.close()
}
```
