// pages/connect/connect.js
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
    wx.setNavigationBarTitle({
      title: '联系我们'
  }); 
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
  })
  },
  goOut:function(){

    console.log("其他页面")
    wx.navigateTo({
      url:'../../pages/kmIndex/kmIndex', //
      success:function(suc) {
        console.log("成功",suc)
      },  //成功后的回调；
      fail:function(fail) {
        console.log("成功",fail)
       },   //失败后的回调；
      complete:function() { }  //结束后的回调(成功，失败都会执行)
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