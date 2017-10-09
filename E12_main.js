Vue.component('coupon', {
    template: `
        <input @blur="onCouponApplied">
    `,
    methods: {
        onCouponApplied() {

            //����������"��applied"��
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