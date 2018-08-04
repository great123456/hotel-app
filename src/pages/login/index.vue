<!-- 个人信息 -->
<template>
  <div class="container">
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
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
           title: res.msg,
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
  padding:0rpx 30rpx;
  padding-top: 30rpx;
}
</style>
