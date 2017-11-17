<template>
  <footer>
    <p>这是foot的count: {{ this.$store.state.count }}</p>
    <button @click="decrement">footer的减少</button>
  </footer>
</template>
<script>
  export default {
    methods: {
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>
<style scoped>
  p {
    color: red;
  }
</style>
