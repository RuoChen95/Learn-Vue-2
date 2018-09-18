<template>
    <div class="section">
        <p class="title">基础用法</p>
        <stepper
                :min="1"
                :max="10"
                :step="2"
                :disabled="false"
                :enableZero = "false"
                v-model="productCount">
        </stepper>
        <p class="title">禁用状态</p>
        <stepper
                :min="1"
                :max="10"
                :step="1"
                :disabled="true"
                :enableZero = "false"
                v-model="productCountDis">
        </stepper>
        <p class="title">对于负数的支持</p>
        <stepper
                :min="-5"
                :max="5"
                :step="1"
                :disabled="false"
                :enableZero = "true"
                v-model="productCountZero">
        </stepper>
    </div>
</template>
<script>
  import Stepper from '../components/Stepper.vue'
  export default {
    components: {
      Stepper
    },
    data() {
      return {
        productCount: 1,
        productCountDis: 1,
        productCountZero: 0,
      };
    },
    methods: {
      ajax() {},
    },
  };
</script>
<style lang="less" scoped>
    div.section {
        margin: 25px;
    }
    p.title {
        padding-top: 40px;
        padding-bottom: 15px;
    }
    p.title:first-of-type {
        padding-top: 20px;
    }
</style>
