<template>
  <div id="container">
      <h1>父组件</h1>
      <div>{{money}}</div>
      <hr>
      <Son :mon="money" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue';
export default {
  name: "App",
  components: {
    Son  
  },
  setup() {
    const money = ref(101)
    return { money };
  },
};
</script>
<style lang='less' scoped>
</style>