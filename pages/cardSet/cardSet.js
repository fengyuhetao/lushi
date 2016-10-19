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
      this.loadHotCardSet(1)     
    }
  },
  loadCardSet: function(user_id) {
    var me = this
    cardset.getPersonalCardSet(user_id, function(data) {
      console.log(data.data);
      me.setData({"cardSet": data.data})
    })
  },
  loadHotCardSet: function(page) {
    var me = this
    cardset.getHotCardSet(page, function(data) {
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
  }
})