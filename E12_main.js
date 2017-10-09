Vue.component('coupon', {
    template: `
        <input @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {

            //声明这个组件"被applied"了
            this.$emit('applied')

        }
    }
});

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});