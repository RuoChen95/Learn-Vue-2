<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped>
    div.home {
        margin: 25px;
    }
</style>

