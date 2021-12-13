<template>
  <div id="container">
      <h3>子组件</h3>
      <div>子组件内容:{{mon}}</div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: "Son",
  props: {
    mon: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    // 获取父传子的数据 获取失败，错误的写法
    // onMounted(() => {
    //   console.log(this.mon)
    // })

    console.log(props)
    return {};
  },
};
</script>
<style lang='less' scoped>
</style>