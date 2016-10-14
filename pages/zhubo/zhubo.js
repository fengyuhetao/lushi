Page({
  data:{
    // text:"这是一个页面"
    "kazu_show": "block",
    "shiping_show": "none",
    "zixun_show": "none",
    "underline": "85"                        //85, 330, 580
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
    if(e.target.id == "kazu") {
      this.setData({"kazu_show": "block", "shiping_show": "none", "zixun_show": "none", "underline": "85"});
    } else if(e.target.id == "shiping") {
      this.setData({"kazu_show": "none", "shiping_show": "block", "zixun_show": "none", "underline": "330"});      
    } else {
      this.setData({"kazu_show": "none", "shiping_show": "none", "zixun_show": "block", "underline": "580"});            
    }
  },
  viewDetail: function(e) {
    console.log(e);
    wx.navigateTo({
      url: '../detail/detail'
    })
  }
})