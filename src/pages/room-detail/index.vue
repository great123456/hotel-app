<!-- 首页 -->
<template>
  <div class="container">
   <div class="option">
     <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616144902-5b24b2de0b6ed.jpg" class="option-img" mode="widthFix"></image>
     <div class="option-text">
       <span>套房客厅</span>
     </div>
   </div>
   <div class="option">
     <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616145418-5b24b41a6900a.jpg" class="option-img" mode="widthFix"></image>
     <div class="option-text">
       <span>套房卧室</span>
     </div>
   </div>
   <div class="option">
     <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616145514-5b24b452470e0.jpg" class="option-img" mode="widthFix"></image>
     <div class="option-text">
       <span>标准双床房卧室</span>
     </div>
   </div>
   <div class="option">
     <image src="https://healthapi.hxgtech.com/uploads/20180616/20180616145553-5b24b479bf212.jpg" class="option-img" mode="widthFix"></image>
     <div class="option-text">
       <span>行政大床房卧室</span>
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
  .option-img{
    width:100%;
    height:300rpx;
  }
  .option-text{
    width:100%;
    line-height: 65rpx;
    font-size: 36rpx;
    color: #666666;
    padding:0rpx 50rpx;
    box-sizing: border-box;
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
