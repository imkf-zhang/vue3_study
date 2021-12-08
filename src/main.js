// 以前main.js的作用是创建一个根实例，现在是创建一个vue应用

// 1、导入createApp函数
import { createApp } from "vue"

// 2、 编写一个根组件App.vue，导入进来
import App from './App.vue'

// 3、基于根组件创建应用实例
const app = createApp(App)
// 4、挂载到index.html的#app容器
app.mount('#app')
