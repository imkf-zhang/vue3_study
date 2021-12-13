<template>
  <div id="container">
    <h3>孙组件 {{ money }}</h3>
    <button @click="fn">消费</button>
    <hr />
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "GrandSon",
  components: {},
  setup(props) {
    const money = inject("money");
    // 不能在后代组件修改祖先组件传过来的值  -- 单向数据流
    // 数据遵循，谁定义，谁修改

    // 孙组件，消费50，通知父组件App.vue组件进行修改
    const changeMoney = inject('changeMoney')
    const fn = () => {
        changeMoney(20)
    }
    return { money,fn};
  },
};
</script>
<style lang='less' scoped>
</style>