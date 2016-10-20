var model = getApp().use('lib/model.js')

Page({
  data:{
    // text:"这是一个页面"
    "resource": []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var me = this
  
    model.getVideos(function(data) {
      var videos = data.data
      videos = getApp().dealData(videos)
      me.setData({
        "resource": videos
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  viewDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?info_id=' + e.currentTarget.id
    })
  }
})