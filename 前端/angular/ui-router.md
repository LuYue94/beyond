# ui-router

```js
$state.go('.', {
    id: id,
}, {
    reload: true
})


.state('cp.linklist.list.add_list', {
    url: '/add_list',
    views: {
        'header': {
            templateUrl: 'linklist/header.html',
            controller: 'HeaderMaillistController',
            controllerAs: 'vm'
        },
        <!-- 四级页面，覆盖第三级，效果等同于cp.linklist.add_list -->
        'content@cp.linklist': {
            templateUrl: 'linklist/add_list.html',
            controller: 'AddLinkmanController',
            controllerAs: 'vm'
        }
    },
    params: {
        type: 0,
        id: 60690,
        addType: 0
    },
    data: {
        title: '新建联系人',
    }
})
```