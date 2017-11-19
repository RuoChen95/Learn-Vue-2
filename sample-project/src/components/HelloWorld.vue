<template>
  <div class="body">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <p>{{ this.$store.state.count }}</p>
    <button @click="increment">body的增加</button>
    <hr>
    <p>使用vuex的getter：</p>
    <button @click="doneTodosCount">计算奇数偶数</button>
    <p>{{ countMsg }}</p>
    <hr>
    <main-foot></main-foot>
  </div>
</template>

<script>
  import MainFoot from './common/Foot.vue'
  export default {
    components: {
      MainFoot
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: '12121Welcome to Your Vue.js App',
        countMsg: '等待计算'
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      doneTodosCount () {
        this.countMsg = this.$store.getters.doneTodos
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul {
  li {
    a {
      color: antiquewhite;
    }
  }
}
</style>
