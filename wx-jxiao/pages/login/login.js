// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    code:''
  },
  // 获取手机失去焦点事件
  getPhone:function(e){
    this.setData({
      phone:e.detail.value
    })
    if(this.data.phone.length!=11){
      wx.showToast({
        title: '只支持大陆11位手机号',
      })
      return
    }
  },
  getCode:function(e){
    this.setData({
      code:e.detail.value
    })
    if(this.data.code.length!=6){
      wx.showToast({
        title: '只六位验证码',
      })
      return;
    }
  },
  //发送请求
 login:function(){
  wx.request({
    url: 'http://localhost:8989/wx/login',
    data:({
      phone:this.data.phone,
      code:this.data.code
    }),
    success(res){
      console.log(res.data)
      if(res.data.code==200){
        wx.switchTab({
          url: '/pages/cat/cat',
        })
      }
    }
  })},
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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