<!-- 导航 -->
<template>
  <div class="container">
    <map id="map" longitude="113.303740" latitude="23.389020" scale="13" :markers="markers" show-location style="width: 100%; height: 1100rpx;"></map>
   <div @click="getLocation" class="location-btn">导航</div>
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
    getLocation(){
      wx.openLocation({
       latitude: 23.389020,
       longitude: 113.303740,
       scale: 16
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
.location-btn{
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  font-size: 36rpx;
  color: #26a2ff;
}
</style>
