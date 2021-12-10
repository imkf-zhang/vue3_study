<template>
  <div id="container">
      <div>
          <p>count的值：{{count}}</p>
          <button @click="add">+1按钮</button>
      </div>
      <hr>
      <div>
          <p>{{obj.name}}</p>
          <p>{{obj.age}}</p>
          <p>{{obj.brand.name}}</p>
          <button @click="updateName">改名字</button>
          <button @click="updateBrandName">改车的名字</button>
      </div>
  </div>
</template>
<script>
import { ref,watch,reactive } from 'vue'
export default {
  name: "",
  setup() {
    const count = ref(0);
    const add = () => {
        count.value++
    }

    const obj = reactive({
        name: 'ls',
        age: 10,
        brand: {
            id: 4,
            name: '宝马'
        }
    })
    const updateName = () => {
        obj.name = 'zs'
    }
    const updateBrandName = () => {
        obj.brand.name = "奔驰"
    }
    // 当需要监听数据变化  使用watch
    
    // 1、监听一个ref数据
    // 1.1、第一个参数 需要监听的目标
    // 1.2、第二个参数 改变后触发的函数
    watch(count, (newVal,oldVal) => {
        console.log(newVal,oldVal)
    })

    // 2、监听一个reactive数据
     watch(obj, (newVal,oldVal) => {
        console.log(newVal.name,oldVal.name)
    })

    // 3、监听多个数据的变化
    watch([count,obj],() => {
        console.log('监听了多个数据改变')
    })

    // 4、只想监听对象中的一个属性的变化 例如： obj.name
    // 写成函数的形式，比较像计算属性 是个函数返回值
    watch(()=>obj.name, ()=>{
        console.log("监听到obj.name变化了")
    })

    watch(()=>obj.brand, ()=> {
        console.log('车的品牌换了')
    },{
        // 深度监听
        // deep: true,
        // 想要默认触发
        // immediate: true
    })
    return { count, add, obj,updateName,updateBrandName };
  },
};
</script>
<style lang='less' scoped>
</style>