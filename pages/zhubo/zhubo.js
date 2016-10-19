var model = getApp().use("lib/model.js")

Page({
  data:{
    // text:"这是一个页面"
    "kazu_show": "block",
    "shiping_show": "none",
    "zixun_show": "none",
    "underline": "85",                        //85, 330, 580
    "resource": [],
    "video": [],
    "kazu": [],
    "anchorDetail": {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var me = this

    // 获取卡组信息
    model.getAnchorKazu(options.user_id, function(data) {
      me.setData({
        "kazu": data.data
      })
    })
    // 获取资讯（不是视频）
    model.getAnchorData(options.user_id, 0, function(data) {
      var resources = data.data
      resources = me.dealData(resources)
      me.setData({
        resource: resources,
      })
    })
    // 获取资讯（视频）
    model.getAnchorData(options.user_id, 1, function(data) {
      var resources = data.data
      resources = me.dealData(resources)
      me.setData({
        video: resources,
      })
    })
    // 获取主播信息
    model.getAnchor(options.user_id, function(data) {
      console.log(data.data)
      me.setData({
        "anchorDetail": data.data
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
  changetap: function(e) {
    // console.log(e);
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
      url: '../detail/detail?info_id=' + e.currentTarget.id
    })
  },
  dealData: function(resources) {
      for(var i in resources)
      {
        //格式化日期
        var date = resources[i].created_at;
        date = getApp().format(date);
        resources[i].created_at = date;
        // 截取字符串，确保title只在一行内显示
        var title = resources[i].title;
        title = title.substr(0, 15);
        resources[i].title = title;
        //截取字符串，确保subtitle只在一行内显示
        var subtitle = resources[i].subtitle;
        subtitle = subtitle.substr(0, 16);
        resources[i].subtitle = subtitle;
      }
      return resources
  }
})