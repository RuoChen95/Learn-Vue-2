<template>
  <div id="app">
    <div id="nav">
        <template v-for="(router, index) in routerObj">
            <router-link :to="router.link" :key="index">{{router.name}}</router-link> |
        </template>
    </div>
    <router-view/>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          routerObj: [
            {link: '/', name: 'Home'},
            {link: '/about', name: 'About'},
            {link: '/coupon', name: 'Coupon'},
            {link: '/stepper', name: 'Stepper'},
            {link: 'imgLazyload', name: 'ImgLazyload'},
          ]
        }
      }
    }
</script>
<style lang="less">
@font-face {
    font-family: 'btui'; /* project id 178281 */
    src: url('//at.alicdn.com/t/font_178281_ds84x5g71af.eot');
    src: url('//at.alicdn.com/t/font_178281_ds84x5g71af.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_178281_ds84x5g71af.woff') format('woff'),
    url('//at.alicdn.com/t/font_178281_ds84x5g71af.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_178281_ds84x5g71af.svg#btui') format('svg');
}
.bt-icon,
[class*='bt-icon-'] {
    font-family: 'btui' !important;
    font-size: inherit;
    font-style: normal;
    vertical-align: baseline;
    display: inline-block;
    min-width: 1em;
    min-height: 1em;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
