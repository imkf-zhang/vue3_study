<template>
  <div id="container">
    <h1>父组件</h1>
    <div>{{ money }}</div>
    <hr />
    <son-two :mon="money" @change-money="unpdataMoney"></son-two>
  </div>
</template>
<script>
import { ref } from "vue";
import SonTwo from "./SonTwo.vue";
export default {
  name: "App",
  components: {
    SonTwo,
  },
  setup() {
    const money = ref(101);
    const unpdataMoney = (newMoney) => {
      money.value = money.value- newMoney;
    };
    return { money, unpdataMoney };
  },
};
</script>
<style lang='less' scoped>
</style>