import Vue from 'vue'
// import store from './store/index'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  // store,
  ...App
})
app.$mount()

export default {
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，
    // 其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/index',                           // 首页
      'pages/center/center',                          //我的
      'pages/introduce/introduce',                    //酒店简介
      'pages/room-detail/room-detail',                //房间简介
      'pages/message/message',                        //个人信息
      'pages/cate/cate',                              //商城
      'pages/cate-detail/cate-detail',                //美食详情
      'pages/service/service',                        //服务
      'pages/order/order',                            //订单列表
      'pages/order-message/order-message'             //订单信息
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'bottom',
      color: '#AEAEBD',
      selectedColor: '#303135',
      backgroundColor: '#FFFFFF',
      borderStyle: '#E1E1E6',
      list: [{
        text: '首页',
        pagePath: 'pages/index/index',
        iconPath: '/static/image/index/home.png',
        selectedIconPath: '/static/image/index/home-selsect.png'
      },{
        text: '美食',
        pagePath: 'pages/cate/cate',
        iconPath: '/static/image/index/food.png',
        selectedIconPath: '/static/image/index/food-select.png'
      },{
        text: '服务',
        pagePath: 'pages/service/service',
        iconPath: '/static/image/index/mall.png',
        selectedIconPath: '/static/image/index/mall-select.png'
      },{
        text: '我的',
        pagePath: 'pages/center/center',
        iconPath: '/static/image/index/me.png',
        selectedIconPath: '/static/image/index/me-select.png'
      }]
    }
  }
}
