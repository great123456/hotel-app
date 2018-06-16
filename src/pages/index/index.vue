<!-- 首页 -->
<template>
  <div class="container">
   <p class="title">酒店</p>
   <div class="option" @click="introducePage">
     <image src="/static/image/index/hotel.png" class="option-img"></image>
     <div class="option-text">
       <span>酒店简介</span>
       <image src="/static/image/arrow.png" mode="widthFix" class="arrow-img"></image>
     </div>
   </div>
   <p class="title" style="margin-top:130rpx;" @click="roomDetailPage">客房预览</p>
   <div class="option" @click="roomDetailPage">
     <image src="/static/image/index/president.png" class="option-img"></image>
     <div class="option-text active">
       <span>总统套房卧室</span>
       <image src="/static/image/arrow.png" mode="widthFix" class="arrow-img"></image>
     </div>
   </div>
   <div class="option" @click="roomDetailPage">
     <image src="/static/image/index/suite.png" class="option-img"></image>
     <div class="option-text active">
       <span>套房卧室</span>
       <image src="/static/image/arrow.png" mode="widthFix" class="arrow-img"></image>
     </div>
   </div>
   <div class="option" @click="roomDetailPage">
     <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616150810-5b24b75ae612c.png" class="option-img"></image>
     <div class="option-text active">
       <span>行政大床房卧室</span>
       <image src="/static/image/arrow.png" mode="widthFix" class="arrow-img"></image>
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
  padding-bottom: 100rpx;
  background: #ffffff;
  padding-left: 30rpx;
  padding-right: 30rpx;
}
.title{
  font-size: 50rpx;
  color: #CCCCCC;
  margin-top: 50rpx;
}
.option{
  width:100%;
  margin-top: 30rpx;
  position: relative;
  height:320rpx;
  margin-bottom: 100rpx;
  .option-img{
    width:100%;
    height:320rpx;
    position: absolute;
    left: 0px;
    top:0px;
    z-index: 2;
  }
  .option-text{
    width:100%;
    position: absolute;
    left: 0%;
    bottom:-70rpx;
    height:100rpx;
    background: #FFFFFF;
    border-radius: 10px;
    line-height: 120rpx;
    font-size: 32rpx;
    color: #666666;
    box-sizing: border-box;
    z-index: 1;
    .arrow-img{
      width:40rpx;
      float: right;
      margin-top: 36rpx;
    }
  }
  .active{

  }
}
</style>
