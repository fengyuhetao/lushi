//app.js
App({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  use : function(path){
    return require(path);
  },
  globalData: {
    access_token: 'FAC14ogcN8KXFAMdVjOnOa4U2P7J3Gzl_1469188877'
  },
  format(timestamp) {
    var date = new Date(timestamp * 1000); 
    date = (date.getFullYear()) + "-" + 
        (date.getMonth() + 1) + "-" +
        (date.getDate()) + " " + 
        (date.getHours()) + ":" + 
        (date.getMinutes())
    return date;
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
  },
  viewDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?info_id=' + e.currentTarget.id
    })
  }
})