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

    <div class="coupon-content" v-show="couponList.length>0">
        <div v-for="(item,index) in couponList" :key="index" @click="receiveCoupon(item.id)">
          <image src="/static/image/cate/coupon.png" mode="widthFix"></image>
          <p>{{item.discount}}</p>
          <span>满{{item.limit}}元可用</span>
        </div>
    </div>

    <div class="cate-content">

      <div class="cate-menu">
        <p class="cate-menu-title">今日菜谱</p>
        <div class="cate-menu-scroll">
          <div class="cate-menu-option" :class="{'menu-active':menuIndex==index}" v-for="(item,index) in menuList" :key="index"
          @click="selectMenu(index,item.id)">
            <image :src="item.img"></image>
            <p>{{item.name}}</p>
          </div>
          <div class="cate-menu-option" @click="communityPage">
            <image src="/static/image/cate/type3.png"></image>
            <p>社区</p>
          </div>
        </div>
      </div>

      <div class="cate-option">
        <div class="cate-option-scroll">
          <p class="not-data" v-show="cookingList.length == 0">暂无菜品数据</p>
          <div class="cate-option-cell" v-for="(item,index) in cookingList" :key="index" @click="cateDetailPage">
            <image :src="item.img"></image>
            <div class="cate-option-text">
              <p class="cate-option-text-title">
                <span>{{item.name}}</span>
                <span style="color: #cfb53a;margin-right:150rpx;">{{item.price}}/位</span>
              </p>
              <div class="num-content">
                <span class="reduce" @click.stop="reduceNum">-</span>
                <span class="number">{{num}}</span>
                <span class="add" @click.stop="addNum">+</span>
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
import {apiCouponList,apiReceiveCoupon,apiCookbookList,apiMenuList} from '@/service/my'
import {apiBannerList} from '@/service/index'
export default {
  mixins: [wxShare],
  data () {
    return {
     menuList: [],
     menuIndex:0,
     imgUrls: ['https://healthapi.hxgtech.com/uploads/20180616/20180616150413-5b24b66d2213c.png','https://healthapi.hxgtech.com/uploads/20180616/20180616145706-5b24b4c22b4a3.jpg'],
     duration: 500,
     indicatorDots: true,
     interval: 3000,
     autoplay: true,
     num: 1,
     couponList: [],
     cookingList: []
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
    this.getCookbookList()
    this.getBannerList()
  },
  created(){

  },
  methods: {
    selectMenu(index,id){
      this.menuIndex = index
      this.getFoodList(id)
    },
    cateDetailPage(){
      wx.navigateTo({
         url: '/pages/cate-detail/cate-detail'
       })
    },
    getBannerList(){     //获取banner
      apiBannerList({
        type: 1
      })
      .then((res)=>{
        if(res.code == 200){

        }
      })
    },
    getCouponList(){            //获取优惠券列表
      apiCouponList()
      .then((res)=>{
        if(res.code == 200){
          this.couponList = res.data.list
          this.couponList.forEach(function(item){
            item.limit = parseInt(item.limit)
          })
        }
      })
    },
    receiveCoupon(id){          //领取优惠券
      apiReceiveCoupon({
        id: id
      })
      .then((res)=>{
        if(res.code == 200){
          wx.showToast({
            title: '领取成功',
            icon: 'success',
            duration: 2000
          })
        }else{
          wx.showToast({
            title: res.message,
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
    getCookbookList(){                       //获取菜谱列表
      apiCookbookList()
      .then((res)=>{
        wx.hideLoading()
        if(res.code == 200){
          this.menuList = res.data.list
          if(res.data.list.length>0){
            this.getFoodList(this.menuList[0].id)
          }
        }
      })
    },
    getFoodList(id){
      apiMenuList({
        id: id
      })
      .then((res)=>{
        console.log('food',res)
        this.cookingList = res.data.list
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
    },
    communityPage(){
      wx.navigateTo({
         url: '/pages/community/community'
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
.coupon-content{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  div{
    width: 33%;
    text-align: center;
    position: relative;
    margin-top: 20rpx;
    image{
      width: 160rpx;
    }
    p{
      font-size: 36rpx;
      color: #ffffff;
      position: absolute;
      left: 50%;
      top: 30rpx;
      transform: translateX(-50%);
    }
    span{
      font-size: 20rpx;
      color: #ffffff;
      position: absolute;
      left: 50%;
      top: 83rpx;
      transform: translateX(-50%);
    }
  }
}
.cate-content{
  margin-top:30rpx;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  font-size: 28rpx;
  padding-bottom: 100rpx;
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
              line-height: 35rpx;
              text-align: center;
              margin-top: 10rpx;
              margin-right:10rpx;
              border-radius: 100%;
              background: #cfb53a;
              color: #ffffff !important;
            }
            .number{
              font-size: 32rpx;
              color: #cfb53a;
            }
            .add{
              display: inline-block;
              width: 40rpx;
              height:40rpx;
              border-radius: 100%;
              line-height: 35rpx;
              text-align: center;
              margin-top: 10rpx;
              margin-left:10rpx;
              background: #cfb53a;
              color: #ffffff !important;
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
