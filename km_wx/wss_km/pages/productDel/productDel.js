const util=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsUrl:[],
    proId:'',
    swiper: {
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      current: 0,
    },
    leftShow:true,
    
  },

  prevImg: function() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    console.log("pre"+current)
    if(current == 0){
      this.setData({leftShow:true,})
      return
    }
      
    swiper.current = current > 0 ? current - 1 : this.data.imgsUrl.length - 1;
    this.setData({
      swiper: swiper,
    })
  },
 
  nextImg: function() {
    
    var swiper = this.data.swiper;
    var current = swiper.current;
    console.log("next"+current)
    if(current == this.data.imgsUrl.length - 1){
      this.setData({
        leftShow:false,
      })
      return
    }
      
   
    swiper.current = current < (this.data.imgsUrl.length - 1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(options.proId)
    this.getProDel(options.proId)
    wx.setNavigationBarTitle({
      title: '产品详情',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#000000'
    })
  },
  getProDel: function(proId){
    var that=this;
    var proId=String(proId);
    wx.request({
      url: util.reqUrl()+'/wx/getProductsDetail',
      data: {proId:proId},
      success(res){
        console.log(res.data.data.prosUrl)
        that.setData({
          imgsUrl:res.data.data.prosUrl
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