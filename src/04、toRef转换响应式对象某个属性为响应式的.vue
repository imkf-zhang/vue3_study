<template>
  <div class="container">
    根组件
   <div><i>名字：</i>{{name}}</div>
   <button @click="updataName">修改</button>
  </div>
</template>
<script>
import { onBeforeMount, onMounted, reactive,toRef } from "vue";
export default {
  name: "App",
  setup() {
    // 1、响应式数据对象
    const obj = reactive({
        name: 'ls',
        age: 10
    });
    // 2、模板只需要使用name
    const name = toRef(obj,'name');
    // 3、方法
    const updataName = () => {
        console.log('name',name)
        name.value = "zs"
    }

    return { name,updataName}
  },
};
</script>
<style lang='less' scoped>
</style>