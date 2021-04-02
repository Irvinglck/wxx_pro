const util=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proMixList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       // 自定义产品库title背景颜色
       wx.setNavigationBarTitle({
        title: '产品列表'
    }); 
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000'
    });
    console.log(options.sValue)
    var that=this;
    wx.request({
      url: util.reqUrl()+'/wx/searchMixPro?sValue='+options.sValue,
      data: {},
      success(res){
        console.log(res.data.data)
        that.setData({
          proMixList:res.data.data
        })
      }
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