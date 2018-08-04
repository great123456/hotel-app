<!-- 首页 -->
<template>
  <div class="container">
    <div class="banner">
      <image src="/static/image/index/banner2.png" mode="widthFix"></image>
    </div>

    <div class="option-content">
      <div class="option" v-for="(item,index) in travelList" :key="item">
          <image :src="item.cover" mode="widthFix"/>
          <p class="title">{{item.title}}</p>
          <p class="content-text">{{item.introduction}}</p>
          <p class="time">发表于{{item.created_at}}</p>
      </div>
    </div>

  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiTravelList } from '@/service/index'
export default {
  mixins: [wxShare],
  data () {
    return {
      travelList: []
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getTravelList()
  },
  created(){

  },
  methods: {
    previewImage(){           //预览图片
      wx.previewImage({
        current: '', // 当前显示图片的http链接
        urls: [] // 需要预览的图片http链接列表
      })
    },
    getTravelList(){
      apiTravelList()
      .then((res)=>{
        if(res.code == 200){
          console.log('travel',res)
          this.travelList = res.data.list
        }
      })
    },
    travalDetailPage(){
      wx.navigateTo({
         url: '/pages/room-detail/room-detail'
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
.banner{
  width: 100%;
  image{
    width: 100%;
  }
}
.option-content{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .option{
    width: 50%;
    border-bottom: 1px solid #f5f5f5;
    padding: 20rpx;
    box-sizing: border-box;
    position: relative;
    image{
      width: 100%;
      height: auto;
    }
    .title{
      font-size: 32rpx;
      color: #2c2d2f;
      text-align: left;
    }
    .content-text{
      font-size: 26rpx;
      margin-top: 10rpx;
      color: #b5b6b7;
    }
    .time{
      font-size: 26rpx;
      color: #b5b6b7;
      text-align: right;
      margin-top: 20rpx;
    }
  }
}
</style>
