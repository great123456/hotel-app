<!-- 订单列表 -->
<template>
  <div class="container">
    <div class="order-header">
      <div @click="selectType(1)" :class="{active: type== 1 }">
        <span>美食订单</span>
        <p></p>
        <p class="line"></p>
      </div>
      <div @click="selectType(2)" :class="{active: type== 2 }">
        <span>服务订单</span>
        <p></p>
        <p class="line"></p>
      </div>
    </div>

    <div class="order-container">

    </div>
    <p class="not-data" v-show="orderList.length == 0">暂无订单数据</p>
  </div>
</template>

<script>
import wxShare from '@/mixins/wx-share'
import { apiOrderList } from '@/service/my'
export default {
  mixins: [wxShare],
  data () {
    return {
      orderList: [],
      type: 1
    }
  },
  components: {

  },
  mounted() {

  },
  onShow(){
    this.getOrderList()
  },
  created(){

  },
  methods: {
    selectType(type){
      this.type = type
    },
    getOrderList(){
      apiOrderList()
      .then((res)=>{
        if(res.code == 200){
          this.orderList = res.data.list
        }
      })
    },
    detailPage(index){
      wx.navigateTo({
         url: '/pages/order-detail/order-detail?index='+index
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
  background: #f5f5f5;
}
.order-header{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  background: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 30rpx;
  div{
    flex:1;
    color: #666666;
  }
  .active{
    color: #DFCE7C;
    .line{
      width: 90rpx;
      height: 5rpx;
      background: #DFCE7C;
      display: inline-block;
      position: relative;
      top: -22rpx;
    }
  }
}
.order-container{
  padding:0rpx 30rpx;
}
.order-option{
  margin-top: 20rpx;
  background: #ffffff;
  border-radius: 10rpx;
  width: 100%;
  padding: 20rpx;
  box-sizing: border-box;
}
</style>
