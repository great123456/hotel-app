<!-- 首页 -->
<template>
  <div class="container">
   <div class="option">
     <image src="/static/image/cate/food.png" class="option-img" mode="widthFix"></image>
     <div class="option-text">
       <span>百位煎嘴鱼</span>
     </div>
   </div>
   <div class="cate-notice">
     <div class="cate-notice-content">
       <p class="cate-notice-title">购买须知:</p>
       <p>使用时间:14:30-17:30</p>
       <p>有效期至2018年6月30号</p>
       <p>本产品不可退款</p>
     </div>
   </div>
   <div class="introduce-content">
     <p>
      全日制餐厅是小聚的理想场所,三间独具特色的餐厅和酒吧，将为宾客奉上难以忘怀的味蕾之旅。“颐享”全日餐厅位于酒店一层，
      提供汇聚各国佳肴的自助大餐以及别有情调的招牌零点服务。“品盛阁”中餐厅吸纳地方菜精华，专注于原汁原味以及均衡营养。
     </p>
     <div class="introduce-img">
       <image src="/static/image/index/introduce.png"></image>
     </div>
   </div>
   <div class="pay-btn">立即购买</div>
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

  },
  created(){

  },
  methods: {
    messagePage(){
      wx.navigateTo({
         url: '/pages/edit-message/edit-message'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-bottom: 100rpx;
  background: #ffffff;
}
.option{
  width:100%;
  margin-top: 30rpx;
  margin-bottom:20rpx;
  .option-img{
    width:100%;
  }
  .option-text{
    width:100%;
    background: #FFFFFF;
    border-radius: 10px;
    line-height:65rpx;
    font-size: 28rpx;
    color: #666666;
    padding:0rpx 50rpx;
    box-sizing: border-box;
  }
}
.cate-notice{
  padding: 0rpx 30rpx;
  .cate-notice-content{
    width:100%;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    height:200rpx;
    padding: 20rpx 30rpx;
    box-sizing: border-box;
    font-size: 24rpx;
    color: #999999;
    line-height:40rpx;
    .cate-notice-title{
      font-size: 28rpx;
      color: #DFCE7C;
    }
  }
}
.introduce-content{
  margin-top: 50rpx;
  padding:0rpx 30rpx;
  font-size: 28rpx;
  color: #666666;
  line-height: 56rpx;
  .introduce-img{
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    image{
      width:100%;
      height:400rpx;
      border-radius: 20rpx;
    }
  }
}
.pay-btn{
  width:600rpx;
  height:90rpx;
  background: #DFCE7C;
  color:#ffffff;
  text-align: center;
  font-size: 36rpx;
  line-height: 90rpx;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60rpx;
  border-radius: 20rpx;
}
</style>
