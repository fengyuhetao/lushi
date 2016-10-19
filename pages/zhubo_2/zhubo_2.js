var anchors = require('model.js');

Page({
  data:{
    // text:"这是一个页面"
    "style": "drop-up",
    "is_show": "none",
    "style_des": "background-color: #898BDB; color: white;",
    "anchorsData": [],
    "current_type": "",
    "not_current_type": "background-color: #898BDB; color: white;",
    "platform": ["全部", "熊猫", "全名", "斗鱼"],
    "platform_id": [0, 1, 2, 3],
    "current": 0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.getAnchorData("");
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
  },
  changeType: function(e) { 
    this.setData({"current": e.target.id, "style": "drop-up", "is_show": "none"});
    this.getAnchorData(e.target.id);
  },
  viewDetail: function(e) {
    wx.navigateTo({
      url: '../zhubo/zhubo?anchor_id=' + e.target.id
    })
  },
  getAnchorData: function(platform = 0) {
    if(platform == 0)
    {
      platform = "";
    }
    var me = this;
    anchors.getAnchorData(platform, function(data){
      me.setData({
        anchorsData: data.data,
      })
    });
  }
})