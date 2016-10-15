var model = require('model.js');

Page({
  data:{
    sliders: [],
  },
  onLoad:function(options){
    var me = this;
    model.slide(function(data){
      me.setData({
        sliders: data.data,
      })
    });
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
    console.log(e);
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})
