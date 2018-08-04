// 首页
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 登录获取token
export const weixinlogin = (ajaxParams) => wxRequest(API_PATH + '/auth/login', ajaxParams, 'POST')

// 保存用户信息
export const apiSaveUserInfo = (ajaxParams) => wxRequest(API_PATH + '/auth/save', ajaxParams, 'POST')

// 用户信息（订单处可用）
export const apiUserInfo = (ajaxParams) => wxRequest(API_PATH + '/auth/show', ajaxParams, 'GET')

// 首页列表
export const apiIndexList = (ajaxParams) => wxRequest(API_PATH + '/page/list/100', ajaxParams, 'GET')

// 轮播列表 可分页 （type 1:美食，2：服务, 3:首页）
export const apiBannerList = (ajaxParams) => wxRequest(API_PATH + `/banner/list/type/${ajaxParams.type}/size/10`, ajaxParams, 'GET')

// 游记列表
export const apiTravelList = (ajaxParams) => wxRequest(API_PATH + '/travel/list/size/100', ajaxParams, 'GET')
