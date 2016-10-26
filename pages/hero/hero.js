Page({
  data:{
    // text:"这是一个页面"
    "followers" : [2, 3, 4, 5, 6, 7, 8, 9],
    "marginleft" : [],
    "info": "none"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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
  viewInfo: function() {
    this.setData({"info": "block"})
  },
  closeInfo: function() {
    this.setData({"info": "none"})
  }
})