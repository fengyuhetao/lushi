var  create = getApp().use("lib/card.js");

Page({
  data:{
    // text:"这是一个页面"
    modalHidden: true,
    modalHidden2: false,
    currentPage: 1,
    cards: [],
    chooseCards: {},                                     //这儿最好使用对象，使用数组，如何第一个点击的卡牌id为10，设置chooseCards[10] = 1,则chooseCards[0],chooseCards[1]也会产生，不过值都为0
    haveChooseCardsNumber: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadAllCards(9);
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
  modalTap: function(e) {
    this.setData({
      modalHidden: false
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true
    })
  },
  modalTap2: function(e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function(e) {
    this.setData({
      modalHidden2: true
    })
  },
  loadCards: function(e) {
    var currentPage = this.data.currentPage    
    
    if(e.target.id == "next") {
      this.setData({"currentPage": currentPage + 1})
    } else {
      if(currentPage > 1) {
        this.setData({"currentPage": currentPage - 1})        
      }
    }
    this.loadAllCards(9)
  },
  loadAllCards: function(per_page) {
    var me = this
    create.getAllCards(this.data.currentPage, per_page, function(data) {
      me.setData({cards: data.data.cards})
    })
  },
  addCard: function(e) {
    var haveChooseCardsNumber = this.data.haveChooseCardsNumber
    if(haveChooseCardsNumber >= 30)
      return ;    
    var protertyString = e.currentTarget.id
    var protertys = protertyString.split("-");
    var chooseCards = this.data.chooseCards
    if(chooseCards[protertys[0]] == 1 ){
      if(protertys[1] != 5) {
        chooseCards[protertys[0]]++
        this.setData({"haveChooseCardsNumber": haveChooseCardsNumber + 1})
      }
    } else if(chooseCards[protertys[0]] == 2){
    } else {
      chooseCards[protertys[0]] = 1      
      this.setData({"haveChooseCardsNumber": haveChooseCardsNumber + 1})
    }
    this.setData({"chooseCards": chooseCards})
  },
  loadChooseCards: function() {

  }, 
  judgeIsOver: function() {
    if(this.data.haveChooseCardsNumber < 30) {
      this.setData({"modalHidden": false})
    }
  },
  reset: function() {
    this.setData({"chooseCards": {}, "haveChooseCardsNumber": 0})
  }
})