var cardset = getApp().use('lib/cardset.js')

Page({
  data:{
    // text:"这是一个页面"
    "personalStyle": "color: white;",
    "hotStyle": "color: #7D63A4;",
    // 卡组 可以是个人卡组，也可以是热门卡组，看选哪个
    "cardSet": [],
    // 卡牌的角色
    "roles": [],
    // 当前选择的卡牌角色
    "current": 30,
    // 当前选择的卡组类型 0：个人卡组   1：热门卡组
    "currentCardSetType": 0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // note: 传入user_id，当前不知道具体的user_id如何获取，暂时先用用3替代
    var me = this
    this.loadCardSet(3);
    cardset.getRoles(function(data) {
      var roles = data.data.attrs.role
      roles.unshift({"key" : 30, "value": "全部"})
      me.setData({"roles": roles})
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
  // 切换卡组类型  个人卡组和热门卡组
  changeCardSet: function(e) {
    if(e.target.id == "personal") {
      this.setData({"personalStyle": "color: white;", "hotStyle": "color: #7D63A4;", "currentCardSetType": 0});
      this.loadCardSet(3)
    } else {
      this.setData({"personalStyle": "color: #7D63A4;", "hotStyle": "color: white;", "currentCardSetType": 1}); 
      this.loadHotCardSet(1, 10)     
    }
  },
  // 加载个人卡组
  loadCardSet: function(user_id) {
    var me = this
    cardset.getPersonalCardSet(user_id, function(data) {
      console.log(data.data);
      me.setData({"cardSet": data.data})
    })
  },
  // 加载热门卡组
  loadHotCardSet: function(page, per_page) {
    var me = this
    cardset.getHotCardSet(page, per_page, function(data) {
      me.setData({"cardSet": data.data})
    })
  },
  // 切换当前选择的卡牌角色
  changeCurrent: function(e) {
    this.setData({"current": e.currentTarget.dataset.id})
  },
  // 查看卡组详细 跳哪去不知道
  viewCardSetDetail: function(e) {
    // 未完待续
    var cardsest_id = e.currentTarget.id
  },
  // 添加新的卡组
  addNewCardSet: function() {
    wx.navigateTo({
      url: '../create/create'
    })
  },
  /// 删除卡组
  dealCardSet: function(e) {
    // 未完待续
    console.log(e)
    // cardset.dealCardSet()
  },
  // 编辑卡组
  editCardSet: function(e) {
    // 未完待续
    console.log(e)
  }
})