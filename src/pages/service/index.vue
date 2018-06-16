<!-- 服务 -->
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
        <p class="cate-menu-title">客房服务</p>
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
          <div class="cate-option-cell" v-for="(item,index) in shopList" :key="index">
            <image src="/static/image/cate/option-cup.png"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>{{item.name}}</span>
                <span class="cate-btn" v-if="item.select == false" @click="selectShop(index)">选择</span>
                <span class="cate-active" v-if="item.select == true" @click="selectShop(index)">取消</span>
              </p>
              <p class="cate-option-num">价格:{{item.price}}元/个</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="cart-container" v-if="showCart == true" :animation="animationData">
      <span>已选择1个服务</span>
      <span class="cart-container-btn" @click="orderMessagePage">确定服务</span>
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
       url: '/static/image/cate/towel.png',
       name: '毛巾类'
     },{
       url: '/static/image/cate/cup.png',
       name: '杯子系列'
     },{
       url: '/static/image/cate/bed.png',
       name: '床上用品'
     },{
       url: '/static/image/cate/goods.png',
       name: '借用物品'
     },{
       url: '/static/image/cate/articles.png',
       name: '一次性用品'
     }],
     menuIndex:0,
     shopList: [{
       name: '马克杯',
       price: '6',
       select: false
     },{
       name: '马克杯',
       price: '6',
       select: false
     },{
       name: '马克杯',
       price: '6',
       select: false
     }],
     showCart: false,
     animationData: {},
     imgUrls: ['https://healthapi.hxgtech.com/uploads/20180616/20180616150413-5b24b66d2213c.png','https://healthapi.hxgtech.com/uploads/20180616/20180616145706-5b24b4c22b4a3.jpg'],
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
    selectShop(index){
      this.creatAnimation()
      this.shopList[index].select = !this.shopList[index].select
    },
    creatAnimation(){                             //动画
      this.showCart = true
      var animation = wx.createAnimation({
          transformOrigin: "50% 50%",
          duration: 500,
          timingFunction: "ease",
          delay: 0
       })
     animation.translateY(0).step()
     this.animationData = animation.export()
    },
    orderMessagePage(){
      wx.navigateTo({
         url: '/pages/order-message/order-message'
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
    width:20%;
    text-align: center;
    .cate-menu-title{
      color: #DFCE7C;
      margin-bottom: 20rpx;
    }
    .cate-menu-scroll{
      height:580rpx;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 100rpx;
      box-sizing: border-box;
    }
    .cate-menu-option{
      height:160rpx;
      image{
        width:90rpx;
        height:90rpx;
        border-radius: 100%;
        margin-top: 20rpx;
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
    width:80%;
    text-align: left;
    padding-left: 50rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
    .cate-option-scroll{
      height:600rpx;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 100rpx;
      box-sizing: border-box;
      .cate-option-cell{
        margin-bottom:20rpx;
        box-shadow: 0 2px 4px 0 #CCCCCC;
        background: #ffffff;
        padding:20rpx;
        border-radius: 16rpx;
        image{
          display: inline-block;
          width:120rpx;
          height:120rpx;
          border-radius:10rpx;
        }
        .cate-option-text{
          display: inline-block;
          margin-left: 30rpx;
          height:100%;
          width:330rpx;
          box-sizing: border-box;
          .cate-option-text-title{
            color: #000000;
            display: flex;
            justify-content: space-between;
            line-height: 65rpx;
            .cate-btn{
              display: inline-block;
              color: #DFCE7C;
              width:100rpx;
              height:50rpx;
              line-height: 50rpx;
              border:1px solid #DFCE7C;
              text-align: center;
              border-radius: 20px;
              transform: translateY(30rpx);
            }
            .cate-active{
              display: inline-block;
              width:100rpx;
              height:50rpx;
              line-height: 50rpx;
              border:1px solid #DFCE7C;
              text-align: center;
              border-radius: 20px;
              transform: translateY(30rpx);
              background: #FF7F7F;
              color:#ffffff;
            }
          }
          .cate-option-num{
            font-size: 24rpx;
            color:#CCCCCC;
          }
        }
      }
    }
  }
}
.cart-container{
  width:100%;
  height:90rpx;
  box-sizing: border-box;
  background: #FFF7D2;
  color: #666666;
  padding: 0rpx 30rpx;
  position: fixed;
  left:0px;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cart-container-btn{
    display: inline-block;
    width:150rpx;
    height:60rpx;
    color:#ffffff;
    background: #DFCE7C;
    border-radius: 30px;
    line-height: 60rpx;
    text-align: center;
  }
}
</style>
