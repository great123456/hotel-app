<!-- 订单信息 -->
<template>
  <div class="container">
    <div class="message-container">
      <p class="message-title">
        <image src="/static/image/cate/order-pay.png" mode="widthFix" class="order-img"></image>
        <span>支付方式</span>
      </p>
      <div class="message-option">
        <span class="message-option-text">微信支付</span>
        <icon type="success" size="20" class="pay-icon"/>
      </div>
    </div>
    <div class="message-container">
       <p class="message-title">
         <image src="/static/image/cate/order-center.png" mode="widthFix" class="order-img"></image>
         <span>个人信息</span>
       </p>
       <div class="message-option">
         <span class="message-option-text">姓名</span>
         <input type="text" v-model="name" placeholder="请输入姓名"/>
       </div>
       <div class="message-option">
         <span class="message-option-text">电话</span>
         <input type="text" v-model="phone" placeholder="请输入电话"/>
       </div>
       <div class="message-option">
         <span class="message-option-text">房间号</span>
         <input type="text" v-model="room" placeholder="请输入房间号"/>
       </div>
    </div>

    <div class="message-container">
       <p class="message-title">
         <image src="/static/image/cate/order-num.png" mode="widthFix" class="order-img"></image>
         <span>购买数量</span>
       </p>
       <div class="message-option">
         <span class="message-option-text">{{detailObj.name}}</span>
         <div class="shop-container">
           <span class="shop-reduce" @click="reduceShop">-</span>
           <span class="shop-num">{{num}}</span>
           <span class="shop-add" @click="addShop">+</span>
         </div>
       </div>
    </div>

    <div class="message-container">
       <p class="message-title">
         <image src="/static/image/cate/order-msg.png" mode="widthFix" class="order-img"></image>
         <span>备注信息</span>
       </p>
       <textarea placeholder="在此填写你的备注信息" style="height:200rpx;background:#F5F5F5;padding:20rpx 30rpx;"/>
    </div>

    <p class="order-btn" @click="saveUserMessage">立即提交</p>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiMenuDetail,apiMenuOrderPay } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      name: '',
      phone: '',
      room: '',
      num: 1,
      detailId: '',
      detailObj: {}
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.detailId = this.$mp.query.id
    this.getCateDetail(this.detailId)
  },
  created(){

  },
  methods: {
   getCateDetail(id){                   //获取美食详情
     apiMenuDetail({
       id: id
     })
     .then((res)=>{
       if(res.code == 200){
         this.detailObj = res.data
       }
     })
   },
   reduceShop(){
     this.num--
     if(this.num<=0){
       this.num = 0
     }
   },
   addShop(){
     this.num++
   },
   saveUserMessage(){              //提交订单
     if(this.name == '' || this.room == '' || this.phone==''){
       wx.showToast({
          title: '请填写完个人信息再提交',
          icon: 'none',
          duration: 2000
         })
        return
     }
     apiMenuOrderPay({
       phone: this.phone,
       name: this.name,
       room_no: this.room,
       amount: this.detailObj.id + ':' + this.num
     })
     .then((res)=>{
       if(res.code == 200){
         wx.requestPayment({
           'timeStamp': res.data.timeStamp + '',
           'nonceStr': res.data.nonceStr,
           'package': res.data.package,
           'signType': 'MD5',
           'paySign': res.data.paySign,
           success:function(res){
             wx.redirectTo({
               url: '/pages/order/order'
             })
           },
           fail:function(res){
             wx.showToast({
              title: res.errMsg,
              icon: 'none',
              duration: 2000
             })
           }
         })
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
  padding:0rpx 30rpx;
  padding-top:2rpx;
  padding-bottom: 100rpx;
}
.message-container{
  background: #ffffff;
  border-radius: 10rpx;
  padding:20rpx;
  margin-top: 20rpx;
  p{
    color:#999999;
    height:100rpx;
    line-height: 100rpx;
  }
  .message-title{
    color:#DFCE7C;
    border-bottom: 1px solid #F0F0F0;
    .order-img{
      display: inline-block;
      width:32rpx;
      margin-right: 20rpx;
    }
  }
}
.message-option{
  height:100rpx;
  line-height: 100rpx;
  color:#999999;
  position: relative;
  span{
    display: inline-block;
    width:200rpx;
    box-sizing: border-box;
  }
  .message-option-text{
    text-indent: 52rpx;
  }
  .pay-icon{
    float: right;
    margin-top: 20rpx;
    margin-right: 20rpx;
  }
  input{
    display: inline-block;
    line-height: 100rpx;
  }
  .shop-container{
    position: absolute;
    right:20rpx;
    top:0rpx;
    span{
      display: inline-block;
      font-size: 32rpx;
      line-height: 40rpx;
      text-align: center;
    }
    .shop-reduce{
      width:65rpx;
      height:40rpx;
      line-height:35rpx;
      border: 1px solid #999999;
      border-radius: 20rpx;
      font-size:42rpx;
    }
    .shop-num{
      width:50rpx;
    }
    .shop-add{
      width:65rpx;
      height:40rpx;
      line-height: 35rpx;
      border: 1px solid #999999;
      border-radius: 20rpx;
      font-size:42rpx;
    }
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
