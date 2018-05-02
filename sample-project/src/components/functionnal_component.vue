<template>
  <div>
    <smart-item :data="data"></smart-item>
    <button @click="change('img')">photo</button>
    <button @click="change('video')">video</button>
    <button @click="change('text')">text</button>
  </div>
</template>
<script>
  import smartItem from './common/smart-item'
  export default {
    components: {smartItem},
    data () {
      return {
        data: {}
      }
    },
    methods: {
      change (type) {
        if (type === 'img') {
          this.data = {
            type: 'img',
            url: 'https://afp.alicdn.com/afp-creative/creative/u124884735/6ced30dc0d7e93f5a2db24f2e71911b4.png'
          }
        } else if (type === 'video') {
          this.data = {
            type: 'video',
            url: 'http://vjs.zencdn.net/v/oceans.mp4'
          }
        } else if (type === 'text') {
          this.data = {
            type: 'text',
            text: '1234'
          }
        }
      }
    }

  }
</script>
