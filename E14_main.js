Vue.component('modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <!-- 通过name来指定特殊的slot -->
                    <slot name="header"></slot>
                </p>
                <button class="delete" aria-label="close"></button>
            </header>
            
            <section class="modal-card-body">
                <slot>default content</slot>
            </section>
            
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button is-success">default button</button>
                </slot>
            </footer>
            </div>
        </div>
    `,
    props: {
        XX: {  },
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