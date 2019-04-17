## state
单一状态树
唯一数据源

## mapState

computed: mapState([
  // 映射 this.count 为 store.state.count
  'count'
])

computed: mapState({
  // 箭头函数可使代码更简练
  count: state => state.count,

  // 传字符串参数 'count' 等同于 `state => state.count`
  countAlias: 'count',

  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  countPlusLocalState (state) {
    return state.count + this.localCount
  }
})

## getter

## mapGetters
computed: mapGetters({
  // 映射 `this.doneCount` 为 `store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})

## mutation
Mutation 必须是同步函数

事件类型(type)
回调函数(handler)
载荷(payload)

定义：
mutations:{
  <string>'type' : <function>handler
}
调用：
store.commit('type', <object>payload)

or:
store.commit({
  type: 'add',
  count: 10
})

## mapMutations
methods: {
  ...mapMutations([
    'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    // `mapMutations` 也支持载荷：
    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
  ]),
  ...mapMutations({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  })
}

## action


Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作


context：上下文对象，这里你可以理解称store本身。
{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。


actions: {
  increment (context) {
    context.commit('increment')
  }
}

store.dispatch('increment')

context 对象：可以理解为 store 本身
{
  commit
  dispatch
  state
  getters
  rootState
  rootGetters
}