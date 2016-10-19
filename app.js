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
        (date.getMinutes()) + ":" + 
        (date.getSeconds());
    return date;
  }
})