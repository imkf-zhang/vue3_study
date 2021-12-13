<template>
  <div id="container">
      <h3>子组件</h3>
      <div>子组件内容:{{mon}}</div>
      <button @click="changeMoney">-1按钮</button>
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  name: "SonTwo",
  props: {
    mon: {
      type: Number,
      default: 0
    }
  },
  /**
   * props 父组件数据
   * emit 触发自定义事件函数
   */
  setup(props,context) {
    // 获取父组件的数据money
    console.log(props.mon)
    console.log(context)
    // 向父组件传值
    const changeMoney = () => {
        context.emit('change-money',1)
    }
    return { changeMoney};
  },
};
</script>
<style lang='less' scoped>
</style>