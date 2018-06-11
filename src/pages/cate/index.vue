<!-- 商城 -->
<template>
  <div class="container">
    <div class="banner">
      <!-- <image src="/static/image/index/banner.png" mode="widthFix"></image> -->
       <swiper  :duration="duration" style="height:400rpx;">
        <block v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" width="100%" height="200"/>
          </swiper-item>
        </block>
       </swiper>
    </div>
    <div class="cate-content">

      <div class="cate-menu">
        <p class="cate-menu-title">今日菜谱</p>
        <div class="cate-menu-scroll">
          <div class="cate-menu-option" :class="{'menu-active':menuIndex==index}" v-for="(item,index) in menuList" :key="index"
          @click="selectMenu(index)">
            <image :src="item.url"></image>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>

      <div class="cate-option">
        <div class="cate-option-scroll">
          <div class="cate-option-cell" @click="cateDetailPage">
            <image src="/static/image/cate/food.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>百味煎鱼嘴</span>
                <span style="color: #cfb53a;margin-right:20rpx;">28/位</span>
              </p>
            </div>
          </div>
          <div class="cate-option-cell" @click="cateDetailPage">
            <image src="/static/image/cate/food.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>百味煎鱼嘴</span>
                <span style="color: #cfb53a;margin-right:20rpx;">28/位</span>
              </p>
            </div>
          </div>
          <div class="cate-option-cell" @click="cateDetailPage">
            <image src="/static/image/cate/food.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>百味煎鱼嘴</span>
                <span style="color: #cfb53a;margin-right:20rpx;">28/位</span>
              </p>
            </div>
          </div>
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
     menuList: [{
       url: '/static/image/cate/chinese-food.png',
       name: '中餐'
     },{
       url: '/static/image/cate/chinese-food.png',
       name: '西餐'
     },{
       url: '/static/image/cate/chinese-food.png',
       name: '料理'
     },{
       url: '/static/image/cate/chinese-food.png',
       name: '甜点'
     }],
     menuIndex:0,
     imgUrls: ['/static/image/index/banner.png','/static/image/index/banner.png','/static/image/index/banner.png'],
     duration: 300
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
    selectMenu(index){
      this.menuIndex = index
    },
    cateDetailPage(){
      wx.navigateTo({
         url: '/pages/cate-detail/cate-detail'
       })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding-top: 1px;
  padding-bottom: 100rpx;
  text-align: center;
  background: #ffffff;
  height: 100%;
}
.banner{
  width:100%;
  image{
    width:100%;
  }
}
.cate-content{
  margin-top:30rpx;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  font-size: 28rpx;
  .cate-menu{
    width:21%;
    text-align: center;
    .cate-menu-title{
      color: #DFCE7C;
      margin-bottom: 20rpx;
    }
    .cate-menu-scroll{
      height:580rpx;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
    }
    .cate-menu-option{
      height:160rpx;
      image{
        width:90rpx;
        height:90rpx;
        border-radius: 100%;
        margin-top:20rpx;
      }
      p{
        color: #666666;
        margin-top: 10rpx;
        font-size: 26rpx;
      }
    }
    .menu-active{
      background: rgba(223,206,124,0.60);
      p{
        color: #000000;
      }
    }
  }
  .cate-option{
    width:79%;
    text-align: left;
    padding-left:30rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
    .cate-option-scroll{
      height:600rpx;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      .cate-option-cell{
        margin-bottom: 30rpx;
        image{
          width:100%;
          height:250rpx;
          border-radius: 16rpx;
        }
        .cate-option-text{
          height:65rpx;
          .cate-option-text-title{
            color: #000000;
            display: flex;
            justify-content: space-between;
            line-height: 65rpx;
            font-size:32rpx;
          }
          .cate-option-num{
            font-size:32rpx;
            color:#CCCCCC;
          }
        }
      }
    }
  }
}
</style>
