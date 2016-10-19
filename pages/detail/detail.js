var model = getApp().use("lib/model.js")

Page({
  data:{
    // text:"这是一个页面"
    detail: [],
    content: ""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadDetail(options.info_id)
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
  loadDetail: function(info_id) {
    var me = this;
    model.getDetail(info_id, function(data) {
      console.log(data.data)
      //格式化日期
      var date = data.data.created_at
      date = getApp().format(date)
      data.data.created_at = date
      // 截取字符串，确保title只在一行内显示
      var title = data.data.title
      title = title.substr(0, 15)
      data.data.title = title;
      
      me.setData({
        "detail": data.data
        })
    })
    model.getContent(info_id, function(data) {
      console.log(data)
      me.setData({
        "content": data
      })
    })
  },
  videoErrorCallback: function(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  viewDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?info_id=' + e.currentTarget.id
    })
  }
})