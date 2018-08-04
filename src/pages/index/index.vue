<!-- 首页 -->
<template>
  <div class="container">
    <div class="banner" @click="introducePage">
      <!-- <image src="/static/image/index/hotel.png"></image> -->
       <swiper  indicator-active-color="#cfb53a"  circular :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-dots="indicatorDots" style="height:360rpx;">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="banner-image"/>
          </swiper-item>
        </block>
       </swiper>
    </div>

    <div class="nav-content">
      <div @click="introducePage">
        <image src="/static/image/index/yagao.png"/>
        <p>雅高</p>
      </div>
      <div @click="introducePage">
        <image src="/static/image/index/boerman.png"/>
        <p>铂尔曼</p>
      </div>
      <div @click="travelPage">
        <image src="/static/image/index/youji.png"/>
        <p>游记</p>
      </div>
      <div @click="mapPage">
        <image src="/static/image/index/daohang.png"/>
        <p>导航</p>
      </div>
    </div>

    <div class="option-content">
      <div class="option">
          <image src="/static/image/index/link.png"/>
      </div>
      <div class="option">
          <image src="/static/image/index/link.png"/>
      </div>
    </div>

    <!-- <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>  -->

  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { weixinlogin,apiIndexList,apiBannerList } from '@/service/index'
export default {
  mixins: [wxShare],
  data () {
    return {
      imgUrls: ['/static/image/index/banner.png','/static/image/index/suite.png','/static/image/index/link.png'],
      duration: 500,
      interval: 2500,
      autoplay: true,
      indicatorDots: true,
      code: ''
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
     if(!wx.getStorageSync('login')){
       wx.reLaunch({
         url: '/pages/login/login'
       })
       return
     }
     const self = this
     // wx.login({
     //   success: function(res) {
     //     self.code = res.code
     //   }
     // })
     this.getIndexList()
     this.getBannerList()
  },
  created(){
    //this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (res) => {
          console.log('login',res)
          wx.getSetting({
                success: function(res){
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wx.getUserInfo({
                      success: function(res) {
                        console.log('userInfo',res.userInfo)
                      }
                    })
                  }
                }
           })
        }
      })
    },
    bindGetUserInfo(e) {
      this.weixinLogin(e.mp.detail.iv,e.mp.detail.encryptedData)
    },
    weixinLogin(iv,encryptedData){
      weixinlogin({
        code: this.code,
        iv: iv,
        encrypt_data: encryptedData
      })
      .then((res)=>{
        if(res.code == 200){
           wx.setStorageSync('token', res.data.token)
        }else{
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
    getIndexList(){           //获取首页列表
      apiIndexList()
      .then((res)=>{
        if(res.code == 200){
          console.log('list',res)
        }
      })
    },
    getBannerList(){     //获取首页banner
      apiBannerList({
        type: 3
      })
      .then((res)=>{
        if(res.code == 200){

        }
      })
    },
    previewImage(){           //预览图片
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [] // 需要预览的图片http链接列表
      })
    },
    introducePage(){
      wx.navigateTo({
         url: '/pages/introduce/introduce'
       })
    },
    travelPage(){
      wx.navigateTo({
         url: '/pages/travel/travel'
       })
    },
    mapPage(){
      wx.navigateTo({
         url: '/pages/map/map'
       })
    },
    roomDetailPage(){
      wx.navigateTo({
         url: '/pages/room-detail/room-detail'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-top:2rpx;
  background: #ffffff;
}
.banner{
  width: 100%;
}
.banner-image{
  width:100%;
  height: 100%;
}
.nav-content{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30rpx;
  div{
    flex: 1;
    text-align: center;
    image{
      width: 120rpx;
      height: 120rpx;
      border-radius: 100%;
    }
    p{
      margin-top: 10rpx;
    }
  }
}
.option-content{
  width: 100%;
  padding: 0rpx 30rpx;
  box-sizing: border-box;
  margin-top: 30rpx;
  padding-bottom: 100rpx;
  .option{
    width: 100%;
    margin-bottom: 30rpx;
    image{
      width: 100%;
      height: 360rpx;
    }
  }
}
</style>
