var anchors = getApp().use('lib/model.js')

Page({
  data:{
    // text:"这是一个页面"
    "style": "drop-up",
    "is_show": "none",
    "anchorsData": [],
    "current_type": "",
    "not_current_type": "background-color: #898BDB; color: white;",
    "platforms": [],
    "current": 0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.getAnchors("");
    this.getPlatForms();
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
  // dropContent 函数作用： 点击主播，弹出选择框
  dropContent: function() {
    var style = this.data.style;
    if(style == "drop-up") {
      this.setData({"style": "drop-down", "is_show": "block"})
    } else {
      this.setData({"style": "drop-up", "is_show": "none"})
    }
  },
  // changeType 作用：当用户点击选择框中不同的平台时，动态显示数据
  changeType: function(e) { 
    this.setData({"current": e.target.id, "style": "drop-up", "is_show": "none"})
    this.getAnchors(e.target.id);
  },
  viewDetail: function(e) {
    // 当前平台共有四个选择（包括三个平台和全部这一选项），为避免ID的冲突，显示页面时，将所有的主播的id+4，所以这里主播的id应该是显示页面获取的id值减去平台的可供选择个数，也就是4个
    var user_id = e.currentTarget.id - this.data.platforms.length
    wx.navigateTo({
      url: '../anchor/anchor?user_id=' + user_id
    })
  },
  getAnchors: function(platform = 0) {
    if(platform == 0)
    {
      platform = "";
    }
    var me = this
    anchors.getAnchors(platform, function(data){
      me.setData({
        anchorsData: data.data,
      })
    });
  },
  getPlatForms: function() {
    var me = this
    anchors.getPlatForms(function (data) {
      console.log(data.data.platforms)
      var platforms = data.data.platforms
      platforms.unshift({"key": 0, "value": "全部"});
      me.setData({"platforms": platforms})
    })
  }
})