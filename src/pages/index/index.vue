<!-- 首页 -->
<template>
  <div class="container">
    <div class="banner">
      <!-- <image src="/static/image/index/banner.png" mode="widthFix"></image> -->
       <swiper  indicator-active-color="#cfb53a"  :duration="duration" style="height:1200rpx;">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="banner-image"/>
          </swiper-item>
        </block>
       </swiper>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
export default {
  mixins: [wxShare],
  data () {
    return {
      imgUrls: ['/static/image/index/hotel.png','/static/image/index/main-building.png'],
      duration: 500
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
     wx.login({
       success: function(res) {
         console.log('code-res',res)
       }
     })
  },
  created(){
    //this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              // console.log('res',res)
              this.userInfo = res.userInfo
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
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
  height:100%;
}
</style>
