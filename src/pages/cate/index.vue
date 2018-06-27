<!-- 商城 -->
<template>
  <div class="container">
    <div class="banner">
      <!-- <image src="/static/image/index/banner.png" mode="widthFix"></image> -->
       <swiper  indicator-active-color="#cfb53a" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-dots="indicatorDots" style="height:400rpx;">
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
                <span style="color: #cfb53a;margin-right:150rpx;">28/位</span>
              </p>
              <div class="num-content">
                <span class="reduce" @click.stop="reduceNum">-</span>
                <span class="number">{{num}}</span>
                <span class="add" @click.stop="addNum">+</span>
              </div>
            </div>
          </div>
          <div class="cate-option-cell" @click="cateDetailPage">
            <image src="/static/image/cate/food2.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>红烧鱼</span>
                <span style="color: #cfb53a;margin-right:150rpx;">69/位</span>
              </p>
              <div class="num-content">
                <span class="reduce">-</span>
                <span class="number">1</span>
                <span class="add">+</span>
              </div>
            </div>
          </div>
          <div class="cate-option-cell" @click="cateDetailPage">
            <image src="/static/image/cate/food3.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>鲍鱼</span>
                <span style="color: #cfb53a;margin-right:150rpx;">128/位</span>
              </p>
              <div class="num-content">
                <span class="reduce">-</span>
                <span class="number">1</span>
                <span class="add">+</span>
              </div>
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
       url: '/static/image/cate/type2.png',
       name: '西餐'
     },{
       url: '/static/image/cate/type1.png',
       name: '料理'
     },{
       url: '/static/image/cate/type3.png',
       name: '甜点'
     }],
     menuIndex:0,
     imgUrls: ['https://healthapi.hxgtech.com/uploads/20180616/20180616150413-5b24b66d2213c.png','https://healthapi.hxgtech.com/uploads/20180616/20180616145706-5b24b4c22b4a3.jpg'],
     duration: 500,
     indicatorDots: true,
     interval: 3000,
     autoplay: true,
     num: 1
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
    },
    reduceNum(){
      this.num--
      if(this.num<=1){
        this.num =1
      }
    },
    addNum(){
      this.num++
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
          position: relative;
          .cate-option-text-title{
            color: #000000;
            display: flex;
            justify-content: space-between;
            line-height: 65rpx;
            font-size:32rpx;
          }
          .num-content{
            display: inline-block;
            position: absolute;
            right: 0rpx;
            top: 0rpx;
            height: 65rpx;
            font-size: 36rpx;
            .reduce{
              display: inline-block;
              width: 40rpx;
              height:40rpx;
              border:1px solid #b5b6b7;
              line-height: 35rpx;
              text-align: center;
              margin-top: 10rpx;
              margin-right:10rpx;
              border-radius: 3px;
            }
            .number{
              font-size: 32rpx;
            }
            .add{
              display: inline-block;
              width: 40rpx;
              height:40rpx;
              border:1px solid #b5b6b7;
              line-height: 35rpx;
              text-align: center;
              margin-top: 10rpx;
              margin-left:10rpx;
              border-radius: 3px;
            }
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
