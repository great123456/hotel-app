<!-- 加入我们 -->
<template>
  <div class="container">
    <div class="message-container">
       <div class="message-option">
         <span>姓名</span>
         <input type="text" v-model="name" placeholder="请输入姓名"/>
       </div>
       <div class="message-option">
         <span>电话</span>
         <input type="text" v-model="phone" placeholder="请输入电话"/>
       </div>
       <p class="order-btn" @click="saveUserMessage">提交</p>
    </div>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiUserSave,apiUserInfo } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      name: '',
      phone: '',
      card: ''
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getUserMessage()
  },
  created(){

  },
  methods: {
   getUserMessage(){

   },
   saveUserMessage(){
    console.log('card',this.card)
     if(this.name == '' || this.phone==''){
       wx.showToast({
          title: '请填写完个人信息再保存',
          icon: 'none',
          duration: 2000
         })
        return
     }
   }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding:0rpx 30rpx;
  padding-top: 30rpx;
}
.message-container{
  background: #ffffff;
  border-radius: 10rpx;
  padding:20rpx;
  p{
    color:#999999;
    height:100rpx;
    line-height: 100rpx;
    font-size: 36rpx;
  }
  .message-title{
    color:#DFCE7C;
  }
}
.message-option{
  height:100rpx;
  line-height: 100rpx;
  color:#999999;
  font-size: 32rpx;
  span{
    display: inline-block;
    width:200rpx;
  }
  input{
    display: inline-block;
    font-size: 32rpx;
    line-height: 100rpx;
  }
}
.order-btn{
  width:550rpx;
  height:80rpx !important;
  line-height: 80rpx !important;
  border-radius: 10rpx;
  background: #DFCE7C;
  text-align: center;
  font-size: 32rpx;
  margin: 100rpx auto;
  color:#ffffff !important;
}
</style>
