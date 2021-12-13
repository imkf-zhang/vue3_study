<template>
  <div id="container">
      <div>{{count}}</div>
      <button @click="add">+1</button>
    <!-- vue2.0 获取单个元素 -->
    <!-- 1. 通过ref属性绑定该元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 是个数组 获取所有遍历元素  -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

    <!-- 单个元素的情况 -->
    <div ref="dom">我是box</div>

    <!-- 被遍历元素的情况 -->
    <ul>
        <li v-for=" i in 4" :key="i" :ref="setDom">{{i}}</li>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted,onBeforeUpdate} from 'vue';
export default {
  name: "",
  setup() {
    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    // 1.2 setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据即可。
    const dom = ref(null)
    onMounted(() => {
        console.log(dom)
    })
    // 2. 获取v-for遍历的元素
    // 2.1 定义一个空数组，接收所有的LI
    // 2.2 定义一个函数，往空数组push DOM
    // 2.3 在循环的dom上，或者组件上使用:ref绑定这个函数
    let domList = []
    const setDom = (el) => {
        domList.push(el)
    }
    onMounted( () => {
        console.log(domList)
    })
    onBeforeUpdate( ()=> {
        console.log("组件更新了")
        domList = []
    })
    let count = ref(0)
    let add = () => {
        count.value++
    }
    return { dom, setDom, count,add };
  },
};
</script>
<style lang='less' scoped>
</style>