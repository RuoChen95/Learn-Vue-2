Vue.component('message', {
    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header">
                {{ title }}
                <button @click="hideModal" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    `,

    //配置方法，对象形式，使用"基于数据的方法"
    //不用思考数据的绑定特质
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    },

    //使用props属性，数组形式，来传递参数
    props: ['title', 'body'],
    //也可以用这样
    props: {
        'title':{},
        'body':{}
    },

    //定义所需要的数据, 函数形式
    data() {
        return {
            isVisible: true
        };
    }
});


// 必须放在最后
new Vue({
    el: '#root'
});

