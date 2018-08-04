<!-- 圈子 -->
<template>
  <div class="container">
    <div class="option">
      <image src="/static/image/cate/type3.png" class="icon-img"></image>
      <p class="name">小张</p>
      <p class="text">电影不错电影不错。</p>
      <div class="image-content">
        <image src="/static/image/cate/type1.png" class="banner-img"></image>
        <image src="/static/image/cate/type1.png" class="banner-img"></image>
        <image src="/static/image/cate/type1.png" class="banner-img"></image>
        <image src="/static/image/cate/type1.png" class="banner-img"></image>
      </div>
      <p class="site">TIT创意园</p>
      <div class="comment"></div>
      <div class="date">
        <span>2018-03-12</span>
        <span class=“time”>12:36</span>
      </div>
      <div class="nav">
        <div>
          <image src="/static/image/community/icon_share.png" class="nav-img" mode="widthFix"></image>
          <span>分享</span>
        </div>
        <div>
          <image src="/static/image/community/icon_browse.png" class="nav-img" mode="widthFix"></image>
          <span>浏览</span>
        </div>
        <div>
          <image src="/static/image/community/icon_information.png" class="nav-img" mode="widthFix"></image>
          <span>1</span>
        </div>
        <div>
          <image src="/static/image/community/icon_love.png" class="nav-img" mode="widthFix"></image>
          <span>2</span>
        </div>
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
      userInfo: {}
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
    
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-top: 20rpx;
  box-sizing: border-box;
}
.option{
  background: #ffffff;
  padding: 20rpx 30rpx 0rpx 130rpx;
  position: relative;
  .icon-img{
    width: 90rpx;
    height: 90rpx;
    border-radius: 100%;
    position: absolute;
    left: 30rpx;
    top: 20rpx;
  }
  .name{
    font-size: 32rpx;
  }
  .text{
    font-size: 26rpx;
    margin-top: 10rpx;
  }
  .site{
    font-size: 23rpx;
    color: #2171bf;
    margin-top: 10rpx;
  }
  .date{
    margin-top: 10rpx;
    color: #2171bf;
    font-size: 23rpx;
    margin-bottom: 10rpx;
    .time{
      display: inline-block;
      margin-left: 39rpx;
    }
  }
  .nav{
    display: flex;
    justify-content: center;
    border-top: 1px solid #f5f5f5;
    div{
      flex: 1;
      text-align: center;
      height: 40px;
      font-size: 30rpx;
      line-height: 40px;
      color: #b5b6b7;
      .nav-img{
        width: 40rpx;
        margin-right: 16rpx;
      }
    }
  }
  .image-content{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    image{
      width: 137rpx;
      height: 137rpx;
      margin-right: 10rpx;
    }
  }
}
</style>
