<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;" @click="followFn">{{loading?'请求中...':'关注'}}</a> </h1>
    <hr>
  </div>
</template>
<script>
import {followMixin} from './mixins'
export default {
  name: 'App',
  components: {
    
  },
  mixins: [followMixin]
}
</script>