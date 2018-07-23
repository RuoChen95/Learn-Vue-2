<template>
    <div class="coupon">
        <coupon
                :disableCoupon="false"
                :couponChecked="false"
                :couponRemainCount="1"
                :couponCurrency="'USD'"
                :couponValue="'2'"
                :couponInfo="'123'"
                :couponId="'sdasdasdasdasd'"
                :couponTimeInfo="'asdasdasd'"
                :couponWillExpire="0"
                :couponRules="'asdasdsad'">
        </coupon>
    </div>
</template>

<script>
	// @ is an alias to /src
	import Coupon from '../components/Coupon.vue'

	export default {
		name: 'home',
		components: {
			Coupon
		}
	}
</script>
