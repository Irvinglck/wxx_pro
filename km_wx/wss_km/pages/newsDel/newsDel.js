const util=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNews();
    wx.setNavigationBarTitle({
      title: '新闻中心',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
    })
  },
  //跳转新闻链接
goNewDetail:function(e){
  console.log("xinwen")
  console.log(e.currentTarget.dataset.newUrl)
  var newUrl=e.currentTarget.dataset.newUrl;
  wx.navigateTo({
          url:'../../pages/newsDel/newsDelWB/newsWebView?newUrl='+newUrl
  })
},
  //获取新闻信息
  getNews:function(){
    var that=this;
    wx.request({
      url: util.reqUrl()+'/wx/getNews',
      data: {},
      success(res){
        console.log(res.data.data)
        that.setData({
          newsList : res.data.data
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
  onShareAppMessage: function (res) {
    console.log("fenxinag")
    wx.showToast({ title: res, icon: 'success', duration: 2000 })
    console.log('res',res)
    var that = this;
    var courseId = '获取产品id'; //获取产品id
    var title = '获取产品标题'; //获取产品标题
    var cover = '/images/banner/banner@2x.png'; //产品图片
    if (res.from === 'button') {
      // 来自页面内转发按钮
      return {
          title: title,
          path: '/pages/newsDel/newsDel',
          imageUrl: cover, //不设置则默认为当前页面的截图
          success: (res) => {
              wx.showToast({ title: res, icon: 'success', duration: 2000 })
          },
          fail: (res) => {
              wx.showToast({ title: res, icon: 'success', duration: 2000 })
          }
      }
  }
  }
})