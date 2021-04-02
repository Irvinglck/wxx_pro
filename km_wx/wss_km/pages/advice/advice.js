// pages/advice/advice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          // 自定义产品库title背景颜色
    wx.setNavigationBarTitle({
      title: '解决方案'
  }); 
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
  })
  },
  print:function(){
    console.log("print")
    var newUrl='https://www.konicaminolta.com.cn/business/solution-case/solutions1';
    wx.navigateTo({
      url:'../../pages/newsDel/newsDelWB/newsWebView?newUrl='+newUrl,
      // url:'../../pages/advice/items/pri/print',
      success:function(suc) {
        console.log("成功",suc)
      },  //成功后的回调；
      fail:function(fail) {
        console.log("成功",fail)
       },   //失败后的回调；
      complete:function() { } 
     })
  },
  cont:function(){
    console.log("cont")
    var newUrl='https://www.konicaminolta.com.cn/business/solution-case/solutions1';
    wx.navigateTo({
      url:'../../pages/newsDel/newsDelWB/newsWebView?newUrl='+newUrl,
      success:function(suc) {
        console.log("成功",suc)
      }, 
      fail:function(fail) {
        console.log("成功",fail)
       },  
      complete:function() { }
     })
  },
  self:function(){
    console.log("self")
    var newUrl='https://www.konicaminolta.com.cn/business/solution-case/solutions1';
    wx.navigateTo({
      url:'../../pages/newsDel/newsDelWB/newsWebView?newUrl='+newUrl,
      success:function(suc) {
        console.log("成功",suc)
      }, 
      fail:function(fail) {
        console.log("成功",fail)
       }, 
      complete:function() { } 
     })
  },
  remote:function(){
    console.log("remote")
    var newUrl='https://www.konicaminolta.com.cn/business/solution-case/solutions1';
    wx.navigateTo({
      url:'../../pages/newsDel/newsDelWB/newsWebView?newUrl='+newUrl,
      success:function(suc) {
        console.log("成功",suc)
      }, 
      fail:function(fail) {
        console.log("成功",fail)
       }, 
      complete:function() { } 
     })
  },
   
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})