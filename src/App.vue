<template>
  <div class="container">
    根组件
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ sex }}</div>
    <button @click="updataName">修改数据</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    // 1、name数据
    const name = ref('ls')
    console.log(name)

    // 2、age数据
    const age = ref(56)

    // 3、方法
    const updataName = () => {
        name.value = "kaifan"
    }
   
    // ref 常用语定义简单数据类型的响应式数据
    // 其实也是可以定义复杂数据类型的响应式数据
    // 对于数据未知的情况下，ref是最实用的
    
    const sex = ref(null)
    setTimeout(() => {
        sex.value = "man"
    }, 1000);

    return { name, age, updataName, sex}
  },
};
</script>
<style lang='less' scoped>
</style>