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
export const apiMenuDetail = (ajaxParams) => wxRequest(API_PATH + `/menu/detail/${ajaxParams.id}`, ajaxParams, 'GET')

//菜谱付款（多个）(此订单可以使用优惠券)
export const apiMenuOrderPay = (ajaxParams) => wxRequest(API_PATH + '/order/pay-menu', ajaxParams, 'POST')

//服务订单付款
export const apiServiceOrderPay = (ajaxParams) => wxRequest(API_PATH + '/order/pay-service', ajaxParams, 'POST')

//订单列表
export const apiOrderList = (ajaxParams) => wxRequest(API_PATH + '/order/list/200', ajaxParams, 'GET')

//服务类别列表
export const apiServiceTypeList = (ajaxParams) => wxRequest(API_PATH + '/service/list/size/100', ajaxParams, 'GET')

//服务列表
export const apiServiceList = (ajaxParams) => wxRequest(API_PATH + `/servicedetail/list/pid/${ajaxParams.id}/size/100`, ajaxParams, 'GET')
