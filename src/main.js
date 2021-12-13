// 以前main.js的作用是创建一个根实例，现在是创建一个vue应用

// 1、导入createApp函数
import { createApp } from "vue";

// 2、 编写一个根组件App.vue，导入进来
import App from "./App.vue";

// 3、基于根组件创建应用实例
const app = createApp(App);
// 4、挂载到index.html的#app容器

// vue2.0 Vue.mixin({ 全局混入的选项对象 })
// vue3.0 app.mixin({ 全局混入的选项对象 })
app.mixin({
  // 需求：在任何组件 dom 准备好的时候打印一句话
  mounted() {
      this.say()
  },
  methods: {
    say() {
      // $el是组件的根元素
      console.log("dom准备好了", this.$el);
    },
  },
});
app.mount("#app");
