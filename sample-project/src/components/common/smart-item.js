// photo
var ImgItem = {
  props: ['data'],
  render: function (createElement) {
    return createElement('div', [
      createElement('p', '图片组件'),
      createElement('img', {
        attrs: {
          src: this.data.url
        }
      })
    ])
  }
}

// video
var VideaItem = {
  props: ['data'],
  render: function (createElement) {
    return createElement('div', [
      createElement('p', '视频组件'),
      createElement('video', {
        attrs: {
          src: this.data.url,
          controls: 'controls',
          autoplay: 'autoplay'
        }
      })
    ])
  }
}
// text
var TextItem = {
  props: ['data'],
  render: function (createElement) {
    return createElement('div', [
      createElement('p', '文本组件'),
      createElement('p', this.data.text)
    ])
  }
}

export default {
  // 函数化组件
  functional: true,
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  render: function (createElement, context) {
    // 判断data的类型
    function getComponent () {
      var data = context.props.data
      if (data.type === 'img') return ImgItem
      if (data.type === 'video') return VideaItem
      else return TextItem
    }

    return createElement(
      getComponent(),
      {
        props: {
          data: context.props.data
        }
      },
      context.children
    )
  }
}
