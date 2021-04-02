//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   navList:[],
   transValue:''
  },

  getNavListData(){
    let that=this;
    wx.request({
      url: 'http://localhost:8989/wx/quickNav',
      success(res){
        console.log(res.data.data)
        that.setData({
          navList:res.data.data
        })
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getNavListData();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
