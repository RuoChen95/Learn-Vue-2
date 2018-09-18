import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Coupon from './views/Coupon.vue'
import Stepper from './views/Stepper.vue'
import ImgLazyload from './views/ImgLazyload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
		{
			path: '/coupon',
			component: Coupon
		},
    {
      path: '/stepper',
      component: Stepper
    },
    {
      path: '/imgLazyload',
      component: ImgLazyload
    }
  ]
})
