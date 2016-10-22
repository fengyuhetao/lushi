Page({
  data:{
    // text:"这是一个页面"
    "kuangye_show": "block",
    "biaozhun_show": "none",
    "kuangye_back": "#A298B2",
    "biaozhun_back": "#362057",
    "kuangye_text": "#382259",
    "biaozhun_text": "white"
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
  changetap: function(e) {
    console.log(e);
    if(e.target.id == "mode-kuangye") {
      this.setData({"kuangye_show": "block", "biaozhun_show": "none", "kuangye_back": "#A298B2", "biaozhun_back": "#362057",
      "kuangye_text": "#382259", "biaozhun_text": "white"});
    } else {
      this.setData({"kuangye_show": "none", "biaozhun_show": "block", "kuangye_back": "#362057", "biaozhun_back": "#A298B2", 
      "kuangye_text": "white", "biaozhun_text": "#382259"});      
    }
  },
  viewDetail: function() {
    wx.navigateTo({
      'url': "../hero/hero"
    })
  }
})