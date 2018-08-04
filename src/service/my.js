// 个人中心
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 优惠卷列表
export const apiCouponList = (ajaxParams) => wxRequest(API_PATH + '/coupon/list/size/100', ajaxParams, 'GET')

//领取优惠卷
export const apiReceiveCoupon = (ajaxParams) => wxRequest(API_PATH + '/coupon/receive', ajaxParams, 'POST')

//我的优惠卷
export const apiMyCouponList = (ajaxParams) => wxRequest(API_PATH + '/coupon/my-list/size/100', ajaxParams, 'GET')
