<template>
  <div id="container">
      <h1>年龄</h1>
      <div>今年：{{age}}</div>
      <div>后年：{{newAge}}</div>
  </div>
</template>
<script>
import { ref, computed} from 'vue'
export default {
  name: "App",
  setup() {
    // 1、计算属性：需要依赖现有响应式数据，根据一定的逻辑得到一个新的数据
    const age = ref(6)
    // 2、必须要return，这个返回值就是计算属性的值
    const newAge = computed(() => {
        return age.value + 2
    })

    return { age, newAge};
  },
};
</script>
<style lang='less' scoped>
</style>