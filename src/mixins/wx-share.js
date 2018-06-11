export default {
  data: {
    shareParams: {
      title: '铂尔曼酒店',
      path: '/pages/index/index',
      // imageUrl: '/static/images/share-img.jpg',
      success () {
        wx.showToast({
          title: '转发成功！',
          icon: 'none'
        })
      }
    }
  },
  onShareAppMessage () {
    return this.shareParams
  }
}
