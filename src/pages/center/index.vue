<!-- 个人中心 -->
<template>
  <div class="container">
    <div class="center-header">
      <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616150550-5b24b6ceaf17e.png" mode="widthFix" class="bac-img"></image>
       <div class="center-header-img">
         <div class="user-img">
           <open-data type="userAvatarUrl" style="border-radius:100%;"></open-data>
         </div>
         <open-data type="userNickName" class="header-name"></open-data>
       </div>
    </div>
    <div class="center-container">
       <div class="center-content">
         <div class="center-option" @click="orderPage">
           <!-- <image src="/static/image/center/order.png" mode="widthFix" class="center-option-img"></image> -->
           <span>我的订单</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <div class="center-option" @click="messagePage">
           <span>完善个人信息</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <div class="center-option" @click="couponPage">
           <span>优惠券</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
         <div class="center-option" @click="joinUsPage">
           <span>加入我们</span>
           <image src="/static/image/center/arrow.png" mode="widthFix" class="center-option-icon"></image>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
export default {
  mixins: [wxShare],
  data () {
    return {
      userInfo: {}
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.userInfo = wx.getStorageSync('userInfo')
  },
  created(){

  },
  methods: {
    orderPage(){
     wx.navigateTo({
        url: '/pages/order/order'
      })
    },
    messagePage(){
      wx.navigateTo({
         url: '/pages/message/message'
       })
    },
    joinUsPage(){
      wx.navigateTo({
         url: '/pages/join/join'
       })
    },
    couponPage(){
      wx.navigateTo({
         url: '/pages/coupon/coupon'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height:100%;
  box-sizing: border-box;
  overflow: hidden;
}
.center-header{
  width:100%;
  position:relative;
  .bac-img{
    width:100%;
  }
}
.center-container{
  padding: 0rpx 30rpx;
  box-sizing: border-box;
}
.center-content{
  width:100%;
  background: #ffffff;
  padding-top: 130rpx;
  padding-left: 50rpx;
  padding-right: 50rpx;
  box-sizing: border-box;
  padding-bottom: 50rpx;
  .center-option{
    height:90rpx;
    line-height: 90rpx;
    color: #333333;
    border-bottom: 1px solid #e0dcdc;
    .center-option-img{
      width:40rpx;
      margin-right: 20rpx;
      position: relative;
      top:-2rpx;
    }
    .center-option-icon{
      width:36rpx;
      float:right;
      margin-top: 20rpx;
    }
  }
}
.center-header-img{
  position: absolute;
  left:50%;
  bottom: -130rpx;
  transform: translateX(-50%);
  text-align: center;
  font-size:36rpx;
  z-index: 99;
  .user-img{
    width:130rpx;
    height:130rpx;
    border-radius: 50%;
    border:3px solid #ffffff;
    overflow: hidden;
  }
  p{
    margin-top:20rpx;
    font-size: 39rpx;
    color: #333333;
  }
}
.center-bottom{
  margin-top: 25rpx;
  color:#999999;
  line-height:70rpx;
  image{
    width:40rpx;
    margin-right: 20rpx;
    position: relative;
    top:-2rpx;
  }
}
</style>
