# angular

## focus
    setTimeout(function () {
      console.log('focus');
      $(".ifx-modal-wrap input:first").focus()
    }, 100)

## note

双冒号：数据单向绑定
ng-cloak：防止闪烁
$state.include()


$timeout(function () {
    $state.go('.', null, {
        reload: true
    })
}, 1500)

## 插件
* templateCache             gulp
* angular sortable view     拖动插件

    http://kamilkp.github.io/angular-sortable-view/#?tab=2

* infinite-scroll           懒加载
* checklist model           checkbox，多选


## 自定义指令
http://www.jb51.net/article/83051.htm

## seed
https://github.com/jiwenjiang/angularSeed

## ng-options用法
ng-options属性可以在表达式中使用数组或对象来自动生成一个select中的option列表。ng-options与ng-repeat很相似，很多时候可以用ng-repeat来代替ng-options。但是ng-options提供了一些好处，例如减少内存提高速度，以及提供选择框的选项来让用户选择。当select中一个选项被选择，该选项将会被绑定到ng-model。如果你想设一个默认值，可以像这样：$scope.selected = $scope.collection[3]。

之前一直在用ng-repeat就见到过track by，没有去了解它的用法，这次了解了一下。track by主要是防止值有重复，angularjs会报错。因为angularjs需要一个唯一值来与生成的dom绑定，以方便追踪数据。例如：items=[“a”,“a”,“b”],这样ng-repeat=“item in items”就会出错，而用ng-repeat=“(key,value) in items track by key”就不会出现错误了。

ng-options一般有以下用法：

```html
        <select ng-change="vm.validation.type.validate()" ng-model="vm.obj.type" ng-options="item.value as item.text for item in vm.varOptions"
          class="ifx-control" ng-class="vm.validateStatusMap[vm.validation.type.status]">
          <!-- <option value="">请选择变量类型</option> -->
        </select>
```
```js
// 对于数组：
 label for value in array
 select as label for value in array
 label group by group for value in array
 label disable when disable for value in array
 label group by group for value in array track by trackexpr
 label disable when disable for value in array track by trackexpr
 label for value in array | orderBy:orderexpr track by trackexpr(for including a filter with track by)
// 对于对象：
 label for (key , value) in object
 select as label for (key ,value) in object
 label group by group for (key,value) in object
 label disable when disable for (key, value) in object
 select as label group by group for(key, value) in object
 select as label disable when disable for (key, value) in object
 ```

```html
   <uib-pagination ng-if="vm.hasData" class="pull-right" 
   total-items="vm.totalItems" max-size="5" 
   previous-text="&lsaquo;" next-text="&rsaquo;" 
   first-text="&laquo;" last-text="&raquo;" max-size="5" 
   boundary-links="true" ng-model="vm.currentPage" 
   ng-change="vm.updateData({startNo:(vm.currentPage-1)*10})">
   </uib-pagination>
```

```js
pageNo = pageNo || 1,
startNo = 0,
pageSize = 10,
init = {
    startNo: pageSize * (pageNo - 1),
    pageSize: pageSize
}
```

## ng-class

isActive表达式为true，则 active，否则inactive
`<div ng-class="{true: 'active', false: 'inactive'}[isActive]"></div>`


对象key/value处理主要针对复杂的class混合
`<div ng-class {'selected': isSelected, 'car': isCar}"></div> `


## ng-select

```html
<select aaaaaa="province" class="form-control" ng-model="vm.province.aaaaaa" ng-options="p.aaaaaa as p.aaaaaa for p in vm.provinceList"
                                    ng-selected="vm.province.aaaaaa == p.aaaaaa" ng-change="vm.getCity(vm.province.aaaaaa)">
                                <option value="">选择省份</option>
```

```js
vm.province = {
    aaaaaa: ""
}
vm.provinceList = []
```


## popup


依赖
popupService, pop

```js
var vm = this
vm.pop = pop
vm.data = pop.data

vm.close = close
vm.confirm = confirm

function close() {
    $uibModalInstance.close(pop.id)
}

function confirm() {
    $uibModalInstance.close(pop.id)
}
```

```js
var obj = {

}
popupService.open({
    title: '发 信',
    html: '/views/modal/linklist/sendEmail.html',
    footer: true,
    controller: 'SendEmailLinklistController',
    class: 'modal-sendEmail',
    data: obj
})
```

## $timeout
在angular里面用setTimeout有bug！


## input validation

<input ng-focus = "vm.validation.aaaaaa.validateFocus(vm.obj.aaaaaa)" ng-class = "vm.validateStatusMap[vm.validation.aaaaaa.status]" ng-blur="vm.validation.aaaaaa.validate()" ng-model = "vm.obj.aaaaaa" type="text" class="ifx-control"/>
				<small ng-class = "vm.validateStatusMap[vm.validation.aaaaaa.status]" class="info help-block">
						<span ng-if= "vm.validation.aaaaaa.status == -1" class="iconfont icon-error"></span>
						<span ng-if= "vm.validation.aaaaaa.status == 0 && vm.validation.aaaaaa.showTips" class="iconfont icon-info"></span>
						<span ng-if= "vm.validation.aaaaaa.status == 1" class="iconfont icon-duigou"></span>
						<span ng-hide="vm.validation.aaaaaa.status == 0 && !vm.validation.aaaaaa.showTips">{{vm.validation.aaaaaa.message}}</span>
				</small>


                 ng-disabled="!vm.validation.validateStatus()" 




		vm.obj = {
			aaaaaa:''
		}
		vm.validateStatusMap = {
			'-1': 'error',
			'1': 'success',
			'0': 'info',
			'2': 'warn'
		}
		vm.validation = {
			aaaaaa: {
				validate: function () {
					if (!vm.obj.aaaaaa || vm.obj.aaaaaa == '') {
						vm.validation.aaaaaa.status = -1
						vm.validation.aaaaaa.message = '请输入地址列表名称'
					} else if (!vm.obj.aaaaaa.length > 48) {
						vm.validation.aaaaaa.status = -1
						vm.validation.aaaaaa.message = '列表名称过长，请控制在 48 个字符以内'
					} else {
						vm.validation.aaaaaa.status = 1
						vm.validation.aaaaaa.message = '输入完成'
					}

					maillistService.validate.aaaaaa(vm.obj).then(function (p) {
						if (p.data.success) {
							vm.validation.aaaaaa.status = 1
							vm.validation.aaaaaa.message = '输入完成'
						} else {
							vm.validation.aaaaaa.status = -1
							vm.validation.aaaaaa.message = p.data.message
						}
					})
				},
				status: 0,
				message: '请输入邮件名称',
				showTips: false,
				validateFocus: function (aaaaaa) {
					if (vm.validation.aaaaaa.status == 0) {
						vm.validation.aaaaaa.showTips = true
					}
				}
			},
			validateStatus: function () {
				var val1 = vm.validation.aaaaaa.status

				if (val1 == 1) {
					return true
				} else {
					return false
				}
			}
		}


## ifxsearch
<input ui-event = "{keydown:'vm.confirmSearchTask($event, vm.listObj)'}" ifxsearch ng-model="vm.listObj.taskNameLike" ui-keypress="{'keydown': 'vm.getData(vm.listObj)'}"  ng-blur="vm.searchFocus = false" ng-focus="vm.searchFocus = true" type="text" placeholder="检索任务名称" />

<div ng-click="vm.searchName = null" ng-if="vm.searchName" class="search-icon">
	<span class="iconfont icon-Error"></span>
</div>
ifxsearch


## 点击控件外，收起控件
```js
var demo = angular.module('demo', []);

demo.directive('menu', function(){

    return {
        restrict: 'E',
        scope: {},
        link: function(scope, element, attrs) {
            scope.displayMenu = false;
            
            scope.showMenu = function(e) {
                scope.displayMenu = true;
                e.stopPropagation();
            };
            
            scope.clickInner = function(e) {
                e.stopPropagation();
            };
            
            document.addEventListener('click', function(){
                scope.displayMenu = false;
                scope.$apply();
            }, false);
            
        },
        template: '<button class="showBtn" ng-click="showMenu($event)">显示菜单</button>' +
                  '<div class="menu" ng-class="{show: displayMenu}" ng-click="clickInner($event)">' +
                       '<ul>' +
                            '<li>菜单一</li>' +
                            '<li>菜单二</li>' +
                            '<li>菜单三</li>' +
                      '</ul>' +
                  '</div>'
    };
});
```

## uib-modal
```js
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

```

## 新开窗口
var url = $state.href('cp.report.showSMS', { id: $item.id })
window.open(url, "_blank")


## angular.module

;
(function () {
  'use strict'

  angular
    .module('ifaxin.controller.taskController.CreateMailTaskController', [])
    .controller('CreateMailTaskController', CreateMailTaskController)
  

})()