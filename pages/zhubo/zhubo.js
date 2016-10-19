var model = require("../../lib/model.js")

Page({
  data:{
    // text:"这是一个页面"
    "kazu_show": "block",
    "shiping_show": "none",
    "zixun_show": "none",
    "underline": "85",                        //85, 330, 580
    "resource": [],
    "video": [],
    "kazu": []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    model.getResource(options.user_id, 0, "", function(data) {
      var resources = data.data;
      console.log(resources);
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
        resource: resources,
      })
    })
    model.getResource(options.user_id, 1, "", function(data) {
      var resources = data.data;
      console.log(resources);
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
        video: resources,
      })
    })
    model.getResource(options.user_id, 0, "卡组", function(data) {
      var resources = data.data;
      console.log(resources);
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
        kazu: resources,
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
      url: '../detail/detail?id=' + e.currentTarget.id
    })
  }
})