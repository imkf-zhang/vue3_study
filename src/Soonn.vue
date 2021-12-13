<template>
  <div id="container">
      <h1>子组件 {{modelValue}}</h1>
      <button @click="fn">按钮</button>
  </div>
</template>
<script>
export default {
  name: "Soonn",
  props: {
      modelValue: {
          type: Number,
          default: 0
      }
  },
  setup(props, {emit}) {
    const fn = () => {
        // 改变数据
        emit("update:modelValue",100)
    };
    return { fn };
  },
};
</script>
<style lang='less' scoped>
</style>