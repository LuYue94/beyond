import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)
console.log('svg');

const requireAll = requireContext => requireContext.keys().map(requireContext)
// webpack 引入svg文件
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
