var model = getApp().use('lib/model.js')

Page({
  data:{
    sliders: [],
    resource: [],
  },
  onLoad:function(options){
    var me = this;
    model.slide(function(data){
      me.setData({
        sliders: data.data,
      })
    });
    model.getResource(function(data) {
      var resources = data.data;
      resources = getApp().dealData(resources)
      me.setData({
        resource: resources,
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
