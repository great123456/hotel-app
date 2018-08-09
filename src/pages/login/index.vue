<!-- 个人信息 -->
<template>
  <div class="container">
    <image src="/static/image/index/hotel.png" class="login-bac"></image>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" class="login-btn">微信登录</button>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { weixinlogin } from '@/service/index'
export default {
  mixins: [wxShare],
  data () {
    return {
      code: ''
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    const self = this
    wx.login({
      success: function(res) {
        self.code = res.code
      }
    })
  },
  created(){

  },
  methods: {
   bindGetUserInfo(e) {
     this.weixinLogin(e.mp.detail.iv,e.mp.detail.encryptedData)
   },
   weixinLogin(iv,encryptedData){
     wx.showLoading({
       title: '登录中',
     })
     weixinlogin({
       code: this.code,
       iv: iv,
       encrypt_data: encryptedData
     })
     .then((res)=>{
       wx.hideLoading()
       if(res.code == 200){
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('login', true)
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function(){
            wx.switchTab({
              url: '/pages/index/index'
            })
          },500)
       }else{
         wx.showToast({
           title: res.message,
           icon: 'none',
           duration: 2000
         })
       }
     })
   }
  }
}
</script>

<style lang="scss" scoped>
.container{

}
.login-bac{
  width: 100%;
  height: 100vh;
}
.login-btn{
  width: 65%;
  position: absolute;
  left: 17.5%;
  bottom:25%;
  background: rgba(255,255,255,0.9);
  height: 80rpx;
  line-height: 80rpx;
  color: #2c2d2f;
  font-size: 32rpx;
  text-align: center;
}
</style>
