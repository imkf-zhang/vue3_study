<template>
  <div class="container">
      根组件
  </div>
</template>
<script>
import { onBeforeMount, onMounted} from 'vue'
export default {
  name: "",
  setup() {
    // 1、dom渲染前钩子
    onBeforeMount(() => {
        console.log('dom渲染前钩子',document.querySelector('.container'))  // null
    })
    // 2、dom渲染后钩子
    onMounted(() => {
        console.log('dom渲染后钩子',document.querySelector('.container')) // <div class="container">根组件</div>
    })
    // 可以定义多个生命周期钩子
     onBeforeMount(() => {
        console.log('dom渲染前钩子',"2222")  
    })
  }
};
</script>
<style lang='less' scoped>
</style>