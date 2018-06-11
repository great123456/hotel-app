<!-- 首页 -->
<template>
  <div class="container">
   <div class="option">
     <image src="/static/image/index/main-building.png" class="option-img"></image>
     <div class="option-text">
       <span>铂尔曼大酒店-主楼</span>
     </div>
   </div>
   <div class="introduce-content">
     <p>
       舟山三盛铂尔曼大酒店是由上海三盛宏业投资集团投资兴建，法国雅高酒店管理集团管理的一家豪华商务酒店。酒店坐落于浙江省舟山市普陀区，东临著名的“海天佛国”即中国四大佛教名山之一的普陀山。酒店紧邻普陀区政府，距普陀山机场仅10分钟车程，距宁波仅2小时车程。酒店主体建筑20层，拥有255间设计雅致的海景豪华客房，普陀山海美景由此一览无遗。810平方米的无柱式大宴会厅和4间多功能会议室，是筹办大型会议、商务活动和盛大婚礼的理想之所。三间独具特色的餐厅和酒吧，将为宾客奉上难以忘怀的味蕾之旅。酒店的健身中心及室外恒温泳池，将悉心满足您闲暇休憩时的一切之需。酒店计划于2018年8月盛大开业。
     </p>
     <div class="introduce-img">
       <image src="/static/image/index/introduce.png"></image>
     </div>
     <p>
       酒店的255间客房与套房设计雅致，
       尊崇专享的行政酒廊为您提供更高标准的豪华设施与个性服务。所有的客房与套房内均设有宽敞的大理石浴室及各类高档盥洗用品。
     </p>
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
  position: relative;
  height:720rpx;
  margin-bottom: 100rpx;
  .option-img{
    width:100%;
    height:720rpx;
    position: absolute;
    left: 0px;
    top:0px;
    z-index: 2;
  }
  .option-text{
    width:100%;
    position: absolute;
    left: 0rpx;
    bottom:-70rpx;
    height:100rpx;
    background: #FFFFFF;
    border-radius: 10px;
    line-height: 130rpx;
    font-size: 28rpx;
    color: #666666;
    padding:0rpx 50rpx;
    box-sizing: border-box;
    z-index: 1;
  }
}
.introduce-content{
  margin-top: 50rpx;
  padding:0rpx 30rpx;
  font-size: 28rpx;
  color: #666666;
  line-height: 56rpx;
  text-indent: 30rpx;
  .introduce-img{
    margin-top: 20rpx;
    margin-bottom: 20rpx;
    image{
      width:100%;
      height:400rpx;
      border-radius: 20rpx;
      box-sizing: border-box;
      transform: translateX(-30rpx);
    }
  }
}
</style>
