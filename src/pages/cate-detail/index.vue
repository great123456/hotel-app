<!-- 首页 -->
<template>
  <div class="container">
   <div class="detail-title">
     {{detailObj.name}}
   </div>
   <div class="notice">
     <span><image src="/static/image/cate/icon_right.png" mode="widthFix"></image>周末及节假日通用</span>
     <span><image src="/static/image/cate/icon_right.png" mode="widthFix"></image>官网独家</span>
     <span><image src="/static/image/cate/icon_right.png" mode="widthFix"></image>可转赠</span>
   </div>
   <p class="introduce">铂尔曼酒店官方直销</p>
   <div class="option">
     <image :src="detailObj.img" class="option-img" mode="widthFix"></image>
   </div>
   <!-- <div class="introduce-content">
     <span>图文介绍</span>
     <span>产品详情</span>
   </div> -->
   <div class="cate-notice">
     <div class="cate-notice-content">
       <p class="cate-notice-title">购买须知:</p>
       <p>使用时间:</p>
       <p>14:30-17:30</p>
       <p>有效期至2018年6月30号</p>
       <p>本产品不可退款</p>
     </div>
   </div>

   <!-- <div class="time-content">抢购还有1天13小时5分40秒结束</div> -->

   <div class="pay-content">
     <div class="price">{{detailObj.price}}<span class="origin-price">门市价:960<span class="line"></span></span></div>
     <div class="pay-btn" @click="orderMessagePage">立即抢购</div>
   </div>

  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiMenuDetail } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
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
    orderMessagePage(){
      wx.navigateTo({
         url: '/pages/order-message/order-message?id='+this.detailId
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-bottom: 130rpx;
  background: #ffffff;
}
.detail-title{
  font-size: 40rpx;
  padding: 20rpx 30rpx;
}
.notice{
  padding: 30rpx;
  font-size: 26rpx;
  color: rgb(88,144,255);
  span{
    display: inline-block;
    margin-right: 20rpx;
    image{
      width: 30rpx;
      margin-right: 5rpx;
      position: relative;
      top: -3rpx;
    }
  }
}
.introduce{
  font-size: 36rpx;
  padding-left: 30rpx;
  color: rgb(88,144,255);
}
.option{
  width:100%;
  margin-top: 20rpx;
  .option-img{
    width:100%;
  }
}
.introduce-content{
  height: 40px;
  line-height: 40px;
  color: #ffffff;
  background: rgb(236,226,176);
  display: flex;
  justify-content: space-between;
  span{
    display: inline-block;
    flex: 1;
    text-align: center;
  }
}
.cate-notice{
  padding: 0rpx 30rpx;
  .cate-notice-content{
    width:100%;
    text-align: center;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    font-size: 24rpx;
    color: #999999;
    line-height:50rpx;
    color: rgb(88,144,255);
    .cate-notice-title{
      font-size: 28rpx;
      color: rgb(236,226,176);
    }
  }
}
.time-content{
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  position: fixed;
  left: 0px;
  bottom: 110rpx;
  color: #ffffff;
  background: rgb(236,226,176);
  text-align: center;
}
.pay-content{
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  display: flex;
  justify-content: space-between;
  .price{
    width: 70%;
    height: 100%;
    background: #ffffff;
    color: #DFCE7C;
    font-size: 36rpx;
    padding-left: 30rpx;
    box-sizing: border-box;
    border-top: 1px solid #f5f5f5;
    .origin-price{
      font-size: 26rpx;
      color: rgb(153,153,153);
      position: relative;
      top: 10rpx;
      .line{
        display: inline-block;
        width: 60rpx;
        height: 3rpx;
        background: rgb(153,153,153);
        position: absolute;
        top: 18rpx;
        right: -10rpx;
      }
    }
  }
  .pay-btn{
    width: 30%;
    height: 100%;
    background: #DFCE7C;
    color: #ffffff;
    text-align: center;
    font-size: 36rpx;
  }
}
</style>
