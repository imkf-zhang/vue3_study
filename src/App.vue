<template>
  <div id="container">
      <h1>父组件 {{money}}</h1>
      <button @click="money = 1000">发钱</button>
      <hr>
      <Sonn />
  </div>
</template>
<script>
import Sonn from './Soon.vue'
import { provide,ref } from 'vue'
export default {
  name: "App",
  components: {
     Sonn  
  },
  setup() {
    const money = ref(100);
    const changeMoney = (saleMoney) => {
        console.log('changeMoney',saleMoney)
        money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money',money)
    // 将函数提供给后代组件 provide
    provide('changeMoney',changeMoney)
    return { money };
  },
};
</script>
<style lang='less' scoped>
</style>