<template>
    <div class="coupon">
        <div
                :class="{couponImg: true, checked: couponChecked, disable: disableCoupon}">
            <div class="couponInfo">
                <div class="countAndMoney" @click="$emit('select-coupon')">
                    <!-- 优惠券数量 -->
                    <div class="couponCount">x{{couponRemainCount}}</div>

                    <!-- 优惠券面值 -->
                    <div class="money">
                <span>
                  <template v-if="couponCurrency == 'USD' || couponCurrency == 'CNY'">
                    <span class="currency">
                      {{couponCurrency | stringToIcon}}
                    </span>
                    <span class="price" v-bind:style="{fontSize: couponValue.length >=4 ? (44 - couponValue.length * 5 + 'px') : ('26px')}">
                      {{couponValue}}
                    </span>
                  </template>
                  <template v-else>
                    <span class="price" v-bind:style="{fontSize: (30 - (couponValue.length + couponCurrency.length) * 2 + 'px')}">
                      {{couponValue}} {{couponCurrency}}
                    </span>
                  </template>
                </span>
                    </div>

                    <!-- 优惠券类型 -->
                    <div class="couponType">
                        {{$t('type.item')}}
                    </div>
                </div>

                <div class="infoAndRules">
                    <div class="moreInfo" @click="$emit('select-coupon')">
                        <div class="names">
                            <span class="couponName" v-if="couponInfo">{{couponInfo}}</span>
                        </div>
                        <div class="couponIdAndDonate">
                            <div class="couponId" v-html="$t('limitTime') +couponTimeInfo" v-if="couponTimeInfo == 'None' || couponTimeInfo == '不限制'"></div>
                            <div class="couponId" v-html="couponTimeInfo" v-else></div>
                            <slot name="donateButton"></slot>
                        </div>
                    </div>

                    <div :class="{'rules': true, 'showRules': showRules}" @click="showRules = !showRules">
                        <span v-html="$t('moreRules')"></span>
                        <img class='inBold' src="../assets/imgs/icon-down.png">
                    </div>
                </div>

            </div>
        </div>

        <template v-if="disableCoupon === true">
            <template v-if="disableCondition === 'Used'">
                <img v-if="currentLang == 'zh'" class='couponCondition' src="../assets/imgs/label01_u.png">
                <img v-if="currentLang == 'en'" class='couponCondition' src="../assets/imgs/label01_u_en.png">
            </template>
            <template v-if="disableCondition === 'Expired'">
                <img v-if="currentLang == 'zh'" class='couponCondition' src="../assets/imgs/label01_e.png">
                <img v-if="currentLang == 'en'" class='couponCondition' src="../assets/imgs/label01_e_en.png">
            </template>
        </template>

        <template v-else>
            <img v-if="couponWillExpire == 1 && currentLang == 'zh'" class='willExpire' src="../assets/imgs/label01.png">
            <img v-if="couponWillExpire == 1 && currentLang == 'en'" class='willExpire' src="../assets/imgs/label01_en.png">
        </template>

        <img :class="{select: true, checked: couponChecked}" src="../assets/imgs/coupon-icon-select.png">

        <div class="couponRules" v-if="showRules">
            <div v-html="$t('couponId')" class="couponIdTitle"></div>
            <div class="couponId" v-html="couponId"></div>
            <div v-html="$t('couponRules')" class="title couponRulesTitle" v-if="couponRules"></div>
            <div v-html="couponRules" v-if="couponRules"></div>
        </div>

        <slot name="quantity"></slot>
    </div>
</template>
<script>
	export default {
		i18n: {
			messages: {
				en: {
					type: {
						item: 'Item coupon',
						cart: 'Cart coupon'
					},
					moreRules: 'More',
					couponId: 'Coupon&nbsp;ID:&nbsp;',
					couponRules: 'Coupon usage rules: ',
					limitTime: 'Expiry Date: '
				},
				zh: {
					type: {
						item: '立减券',
						cart: '满减券'
					},
					moreRules: '更多',
					couponId: '优惠券ID：',
					couponRules: '优惠券使用规则：',
					limitTime: '有效期：'
				}
			}
		},
		filters: {
			stringToIcon: function (value) {
				if (value == 'CNY') {
					return '¥'
				} else {
					return '$'
				}
			}
		},
		props: {
			disableCoupon: {
				type: Boolean,
				default: false
			},
			disableCondition: {
				type: String,
				default: 'Used'
			},
			couponWillExpire: {
				type: Number,
				default: 0
			},
			couponChecked: {
				type: Boolean,
				default: false
			},
			couponRemainCount: {
				type: Number
			},
			couponCurrency: {
				type: String
			},
			couponValue: {
				type: String
			},
			couponInfo: {
				type: String
			},
			couponId: {
				type: String
			},
			couponTimeInfo: {
				type: String
			},
			couponRules: {
				type: String
			}
		},
		data: function () {
			return {
				showRules: false,
				currentLang: localStorage.getItem('lang')
			}
		}
	}
</script>
<style scoped lang="less" type="text/less">
    @couponWidth: 351px;
    @couponHeight: 128px;
    .coupon {
        position: relative;
        /*margin-bottom: 21px;*/
        /*margin-right: 50px;*/

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        margin: 0 auto;

        width: @couponWidth;
        .icon-bt-coupon-bg-1,
        .icon-bt-coupon-bg-2 {
            font-size: 90px;
        }
        .couponInfo {
            display: flex;
            position: absolute;
            width: @couponWidth;
            height: @couponHeight;
            top: 0;
            .countAndMoney {
                display: flex;

                flex-direction: column;
                color: white;

                width: 84px;
                height: @couponHeight;
                flex-wrap: wrap;
                flex-shrink: 0;
                -ms-flex-negative: 0;
                div.couponCount {
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-end;
                    /*width: 100%;*/
                    padding-right: 5px;
                    margin-top: 15px;

                    line-height: 21px;
                    font-size: 12px;
                }
                div.money {
                    display: flex;
                    justify-content: space-around;
                    /*width: 100%;*/
                    height: 37px;
                    padding-left: 5px;
                    padding-right: 5px;

                    line-height: 31px;
                    span.currency {
                        font-size: 14px;
                    }
                    span.price {
                        font-size: 31px;
                        line-height: 31px;
                    }
                }
                div.couponType {
                    display: inline-block;
                    text-align: center;
                    color: white;
                    /*width: 100%;*/
                    margin-top: 5px;
                    padding: 0 5px;

                    font-size: 12px;
                    line-height: 18px;
                    letter-spacing: 0;
                    word-spacing: 0;
                }
            }
            .infoAndRules {
                width: 100%;
                padding-left: 10px;
                div.moreInfo {
                    display: flex;
                    flex-direction: column;
                    /*justify-content: flex-end;*/
                    height: 98px;

                    /*padding-bottom: 8px;*/
                    div.names {
                        display: flex;
                        align-items: center;
                        width: 217px;
                        height: 20px;

                        margin-top: 15px;
                        margin-bottom: 10px;
                        span.couponName {
                            display: inline-block;

                            font-size: 15px;
                            line-height: 20px;
                            height: 20px;
                            color: #5C5C5C;

                            white-space: nowrap;

                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    div.couponIdAndDonate {
                        display: flex;
                        justify-content: space-between;
                        padding-right: 10px;
                        div.donateButton {
                            display: inline-block;
                            width: 54px;
                            flex-shrink: 0;
                            height: 18px;
                            line-height: 16px;
                            border: 1px solid #6DB6F3;
                            border-radius: 9px;

                            font-size: 12px;
                            color: #529BD7;
                            text-align: center;

                            cursor: pointer;
                            transition: all 0.3s ease;
                            &:hover {
                                background-color: #6DB6F3;
                                color: white;
                            }
                        }
                    }
                    div.couponId,
                    div.limitTime{
                        margin-top: 3px;
                        color: #BCBCBC;
                        display: inline-block;
                        word-wrap: break-word;
                        white-space: normal;

                        font-size: 12px;
                        line-height: 14px;
                    }
                    div.limitTime {
                        margin-top: 5px;
                    }
                    div.couponId {
                        word-break: break-all;
                        margin-right: 10px;
                    }
                }
                div.rules {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 12px;
                    line-height: 14px;
                    color: #BCBCBC;
                    height: 28px;
                    padding-right: 12px;

                    img {
                        &.inBold {
                            display: inline-block;
                        }
                        transition: all ease 0.4s;
                    }
                }
                div.showRules {
                    img {
                        transform:rotate(-180deg);
                    }
                }
            }
            .icon-bt-coupon-pressed {
                position: absolute;
                top: 46px;
                left: 148px;
                font-size: 44px;
            }
        }
    }
    .couponImg {
        position: relative;
        width: @couponWidth;
        height: @couponHeight;
        background: url("../assets/imgs/coupon-bg.png");
        background-repeat:no-repeat;
        background-size: @couponWidth @couponHeight;
    }
    .couponImg.disable {
        position: relative;
        width: @couponWidth;
        height: @couponHeight;
        background: url("../assets/imgs/coupon-bg-dis.png");
        background-repeat:no-repeat;
        background-size: @couponWidth @couponHeight;
    }

    div.couponRules {
        width: @couponWidth;
        min-height: 35px;
        padding: 12px 0;
        border: 1px solid #EFEFF4;
        border-top-width: 0;
        border-radius: 4px;

        color: #BCBCBC;
        background-color: white;
        white-space: pre-line;
        word-break: break-word;

        div.couponIdTitle,
        div.couponRulesTitle{
            color: #5C5C5C;
        }
        div.couponRulesTitle {
            margin-top: 10px;
        }
        div {
            padding: 0 12px;
            white-space: pre-line;
            word-break: break-word;
            line-height: 15px;
            font-size: 12px;
        }
    }
    img.couponCondition {
        position: absolute;
        right: 0;
        top: 0;

        width: 47px;
        height: 47px;
    }

    img.willExpire {
        position: absolute;
        right: 0;
        top: 0;

        width: 47px;
        height: 47px;
    }
    img.select {
        position: absolute;
        display: none;
        left: 0;
        top: 0;

        transition: all ease 0.3s;
    }
    img.select.checked {
        display: inline-block;
    }
</style>
