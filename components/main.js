Vue.component('tabs', {
    template: `
        
    `,
    props: {
        XX: { required: true },
        XXX: { default: false}
    },
    methods: {
        functionName(parameter) {

        }
    },
    //通过某属性计算某不变的属性
    computed: {
        attributeName() {
            return attributeValue;
        }
    },
    mounted() {

    },
    data() {
        return {
            xx: []
        }
    },
    //当组件被创建的时候，其属性发生改变／监听某个事件Event.$on
    created() {

    }
});

new Vue({
    el: '#root',
    data: {
        xx: false
    }
});