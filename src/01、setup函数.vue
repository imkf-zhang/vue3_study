<template>
  <div class="container">
      根组件
      <div>{{msg}}</div>
      <button @click="say()">点击</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  // 1、setup函数是组合Api的起点，将来组合Api的代码，基本都在这个里面
  // 2、可以理解为：在beforeCreate钩子函数至向前执行，组件创建实例之前
  // 3、因此啊含糊中不能使用this，这个时候this ===>undefined
  // 4、在模版中需要使用的数据和函数，需要在 setup 返回。
  setup() {
    console.log(this)  // undefined
    // 数据
    const msg = "hi vue3"
    // 方法
    const say = () => {
      console.log("hello,vite")
    }
    return {msg,say}
  },
  // 在vue3肿不建议使用老的生命钩子
  beforeCreate() {
    console.log(this)  // 可以打印出来的
  },
};
</script>
<style lang='less' scoped>
</style>