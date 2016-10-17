Page({
  data:{
    // text:"这是一个页面"
    "personalStyle": "color: white;",
    "hotStyle": "color: #7D63A4;"
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
  changeKazu: function(e) {
    console.log(e);
    if(e.target.id == "personal") {
      this.setData({"personalStyle": "color: white;", "hotStyle": "color: #7D63A4;"});
    } else {
      this.setData({"personalStyle": "color: #7D63A4;", "hotStyle": "color: white;"});      
    }
  }
})