<template>
  <div id="container">
    <h1 @click="$event.target.style.color = 'red'">父组件 {{ count }}</h1>
    <!-- 如果你想获取原生事件事件对象 -->
    <!-- 如果绑定事函数 fn fn(e){ // e 就是事件对象 } -->
    <!-- 如果绑定的是js表达式  此时提供一个默认的变量 $event -->
    <hr />
    <!-- count=$event 触发该自定义事件时的传参 -->
    <!-- 如果你想获取自定义事件  -->
    <!-- 如果绑定事函数 fn fn(data){ // data 触发自定义事件的传参 } -->
    <!-- 如果绑定的是js表达式  此时 $event代表触发自定义事件的传参 在此demo中也就是那个100 -->
    <!-- <Soonn :modelValue="count" @update:modelValue="count = $event" />  -->
    <!-- 上述代码，可以简写 -->
    <Soonn v-model="count" />
  </div>
</template>
<script>
import Soonn from "./Soonn.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    Soonn,
  },
  setup() {
    const count = ref(10);
    return { count };
  },
};
</script>
<style lang='less' scoped>
</style>