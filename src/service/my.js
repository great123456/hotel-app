// 个人中心
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 优惠卷列表
export const apiCouponList = (ajaxParams) => wxRequest(API_PATH + '/coupon/list/size/100', ajaxParams, 'GET')

//领取优惠卷
export const apiReceiveCoupon = (ajaxParams) => wxRequest(API_PATH + '/coupon/receive', ajaxParams, 'POST')

//我的优惠卷
export const apiMyCouponList = (ajaxParams) => wxRequest(API_PATH + '/coupon/my-list/size/100', ajaxParams, 'GET')

//菜谱列表
export const apiCookbookList = (ajaxParams) => wxRequest(API_PATH + '/cookbook/list/size/100', ajaxParams, 'GET')

//菜品列表
export const apiMenuList = (ajaxParams) => wxRequest(API_PATH + `/menu/list/pid/${ajaxParams.id}/size/100`, ajaxParams, 'GET')

//菜品明细
export const apiMenuDetail = (ajaxParams) => wxRequest(API_PATH + `/page/detail/${ajaxParams.id}`, ajaxParams, 'GET')
