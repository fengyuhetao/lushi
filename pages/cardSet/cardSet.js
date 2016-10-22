var cardset = getApp().use('lib/cardset.js')

Page({
  data:{
    // text:"这是一个页面"
    "personalStyle": "color: white;",
    "hotStyle": "color: #7D63A4;",
    "cardSet": [],
    "roles": ["全部", "猎人", "法师", "牧师", "潜行者", "萨满", "战士", "术士", "圣骑士"],
    "current": 0,
    "currentCardSetType": 0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // note: 传入user_id，当前不知道具体的user_id如何获取，暂时先用用3替代
    var me = this
    this.loadCardSet(3);
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
  changeCardSet: function(e) {
    if(e.target.id == "personal") {
      this.setData({"personalStyle": "color: white;", "hotStyle": "color: #7D63A4;", "currentCardSetType": 0});
      this.loadCardSet(3)
    } else {
      this.setData({"personalStyle": "color: #7D63A4;", "hotStyle": "color: white;", "currentCardSetType": 1}); 
      this.loadHotCardSet(1, 10)     
    }
  },
  loadCardSet: function(user_id) {
    var me = this
    cardset.getPersonalCardSet(user_id, function(data) {
      console.log(data.data);
      me.setData({"cardSet": data.data})
    })
  },
  loadHotCardSet: function(page, per_page) {
    var me = this
    cardset.getHotCardSet(page, per_page, function(data) {
      me.setData({"cardSet": data.data})
    })
  },
  changeCurrent: function(e) {
    if(this.data.currentCardSet == 0)
    {
      this.setData({"current": e.target.id})
    } else {
      this.setData({"current": e.target.id})
    }  
  },
  viewCardSetDetail: function(e) {
    // 角色共有十个选择，为避免ID的冲突，显示页面时，将所有的卡组的id+10，所以这里卡组的id应该是显示页面获取的id值减去角色的可供选择个数，也就是10个
    var cardsest_id = e.currentTarget.id - this.data.roles.length
  },
  addNewCardSet: function() {
    wx.navigateTo({
      url: '../create/create'
    })
  },
  dealCardSet: function(e) {
    // 未完待续
    console.log(e)
    // cardset.dealCardSet()
  },
  editCardSet: function(e) {
    // 未完待续
    console.log(e)
  }
})