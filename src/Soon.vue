<template>
  <div id="container">
    <h3>子组件 {{money}}</h3>
    <hr />
    <GrandSon />
  </div>
</template>
<script>
import { inject } from 'vue';
import GrandSon from "./GrandSon.vue";
export default {
  name: "Sonn",
  components: {
    GrandSon,
  },
  setup(props) {
      // 接收祖先组件提供的数据
      const money = inject('money')
      // 不能在后代组件修改祖先组件传过来的值  -- 单向数据流
      // 数据遵循，谁定义，谁修改
      return { money }
  }
};
</script>
<style lang='less' scoped>
</style>