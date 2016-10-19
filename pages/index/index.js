var model = require('model.js');

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

      for(var i in resources)
      {
        //格式化日期
        var date = resources[i].created_at;
        date = getApp().format(date);
        resources[i].crated_at = date;
        // 截取字符串，确保title只在一行内显示
        var title = resources[i].title;
        title = title.substr(0, 15);
        resources[i].title = title;
        //截取字符串，确保subtitle只在一行内显示
        var subtitle = resources[i].subtitle;
        subtitle = subtitle.substr(0, 16);
        resources[i].subtitle = subtitle;
      }
      
      me.setData({
        resource: data.data,
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
