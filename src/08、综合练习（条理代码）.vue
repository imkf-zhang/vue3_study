<template>
  <div class="container">
    <h1>鼠标移动</h1>
    <div>X: {{ x }}</div>
    <div>Y: {{ y }}</div>
    <hr />
    <h1>累加</h1>
    <div>{{count}}</div>
    <button @click="handleAdd">累加</button>
  </div>
</template>
<script>
import { reactive, onMounted, toRef, toRefs,ref, onUnmounted } from "vue";
const handleMove = () => {
     const mouse = reactive({
      x: 0,
      y: 0,
    });
    const move = (e) => {
      let timer = null;
      if (timer) {
        return;
      }
      timer = setTimeout(() => {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        timer = null;
      }, 100);
    };
    onMounted(() => {
      document.addEventListener("mousemove", move);
    });
    onUnmounted(() => {
        document.removeEventListener('mousemove',move)
    })
    return mouse
}
export default {
  name: "App",
  setup() {
    const mouse = handleMove();
    let count = ref(0);
    const handleAdd = () => {
        count.value += 1
    }
    return { ...toRefs(mouse),count,handleAdd };
  },
};
</script>
<style lang='less' scoped>
</style>