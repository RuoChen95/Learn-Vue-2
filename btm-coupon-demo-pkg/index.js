import Coupon from './components/coupon.vue'

export default {
  install(Vue) {
    Vue.component('coupon', Coupon);
  }
}

export {Coupon};