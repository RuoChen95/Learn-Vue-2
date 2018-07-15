<template>
    <div>
        {{couponValue}}
    </div>
</template>
<script>
  export default {
    props: {
      couponValue: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
</style>
