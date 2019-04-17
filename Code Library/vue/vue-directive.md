## 注册全局 directive 和 filter

```js
import * as filters from './filters'
import * as directive from './directive'

// 注册 filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// // 注册 directive
Object.keys(directive).forEach(key => {
  Vue.directive(key, directive[key]())
})
```

### input 只输入数字
```js
export function inputNumOnly(){
    return {
      bind: function(el) {
          el.handler = function() {
              el.value = el.value.replace(/[^0-9.]+/, '')
          }
          el.addEventListener('input', el.handler)
      },
      unbind: function(el) {
          el.removeEventListener('input', el.handler)
      }
    }
}
```
