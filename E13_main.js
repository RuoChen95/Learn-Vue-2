//创立根元素用于监听事件
window.Event = new Vue();


window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    // 创造了两个"adapter"
    fire(event, data = null) {
        this.vue.$emit(event, data);
    }
    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: '<input  @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            Event.fire('applied');
        }
    }
});

new Vue({
    el: '#root',

    created() {
        Event.listen('applied', function(){
            alert('Handling it!')
        })
    }
});