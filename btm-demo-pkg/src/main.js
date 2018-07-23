import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

// 引入i18n **********************************************************************************************************
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'en', // 默认值
})

new Vue({
  router,
  store,
	i18n,
  render: h => h(App)
}).$mount('#app')
