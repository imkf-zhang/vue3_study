<template>
  <div class="container">
    根组件
    <div>{{obj.name}}</div>
    <div>{{obj.age}}</div>
    <button @click="updataName">修改数据</button>
  </div>
</template>
<script>
import { onBeforeMount, onMounted, reactive } from "vue";
export default {
  name: "App",
  setup() {
    // reactive是一个函数，可以定义一个比较复杂的数据类型，成为响应式数据
    const obj = reactive({
      name: "ls",
      age: 18,
    });
    // 修改名字
    const updataName = () => {
        console.log("修改名字函数运行")
        obj.name = 'zs'
    }
    return { obj, updataName }
  },
};
</script>
<style lang='less' scoped>
</style>