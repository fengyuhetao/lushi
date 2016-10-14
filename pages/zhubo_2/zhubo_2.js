Page({
  data:{
    // text:"这是一个页面"
    "style": "drop-up",
    "is_show": "none",
    "style_des": "background-color: #898BDB; color: white;",
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
  dropContent: function() {
    var style = this.data.style;
    if(style == "drop-up") {
      this.setData({"style": "drop-down", "is_show": "block"});
    } else {
      this.setData({"style": "drop-up", "is_show": "none"});
    }
  }
})