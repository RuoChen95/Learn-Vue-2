//������Ԫ�����ڼ����¼�
window.Event = new Vue();


window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    // ����������"adapter"
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