<!-- 优惠券 -->
<template>
  <div class="container">
   <div class="coupon-container">

     <div class="option" v-for="(item,index) in couponList" :key="index">
       <image src="/static/image/cate/coupon-list.png"></image>
       <div class="coupon-left">
         <p style="font-size: 36rpx;">{{item.discount}}</p>
        <p>满{{item.limit}}元可用</p>
       </div>
       <div class="coupon-right">
         <p>{{item.end}}过期</p>
         <p class="coupon-btn">立即使用</p>
       </div>
     </div>

   </div>

   <p class="not-data" v-show="couponList.length == 0">暂无优惠券信息</p>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiMyCouponList } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      couponList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    wx.showLoading({
      title: '加载中',
    })
    this.getCouponList()
  },
  created(){

  },
  methods: {
    getCouponList(){
      apiMyCouponList()
      .then((res)=>{
        wx.hideLoading()
        if(res.code == 200){
          this.couponList = res.data.list
        }
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
.coupon-container{
  padding: 0rpx 30rpx;
}
.option{
  width: 100%;
  height: 150rpx;
  border-radius: 10rpx;
  color: #ffffff;
  box-sizing: border-box;
  margin-bottom: 30rpx;
  position: relative;
  image{
    width: 100%;
    height: 100%;
  }
  .coupon-left{
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 30rpx;
  }
  .coupon-right{
    height: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
    padding: 30rpx 20rpx;
    text-align: center;
    .coupon-btn{
      display: inline-block;
      width: 180rpx;
      height: 50rpx;
      line-height: 50rpx;
      text-align: center;
      border: 1px solid #ffffff;
      border-radius: 100rpx;
      margin-top: 10rpx;

    }
  }
}
</style>
