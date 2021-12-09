<template>
  <div class="container">
    根组件
   <div>{{name}}</div>
   <div>{{age}}</div>
   <button @click="updataName">修改数据</button>
  </div>
</template>
<script>
import { reactive,toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 1、响应式数据对象
    const obj = reactive({
        name: 'ls',
        age: 10
    });
    console.log(obj)
    
    // 2、toRefs
    const obj2 = toRefs(obj)
    console.log(obj2)
    // 方法
    const updataName = () => {
        obj2.name.value = "zhangsan"
        // 也可以写成如下代码：他们是相通的，值是关联的
        // obj.name = 'zs'
    }
    return { ...obj2,updataName }
  },
};
</script>
<style lang='less' scoped>
</style>