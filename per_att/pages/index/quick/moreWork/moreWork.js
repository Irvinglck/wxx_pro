// pages/index/quick/moreWork/moreWork.js
Page({
   
   /**
    * 页面的初始数据
    */
   data: {
      deptShow:0,
      array: ['美国', '中国', '巴西', '日本'],
      selectFlag: true,
      startTime:''
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.setNavigationBarTitle({
         title: '加班管理'
     }); 
       wx.setNavigationBarColor({
         frontColor: '#000000',
         backgroundColor: '#ffffff'
     });
   },
   selectDept(){
      wx.showModal({
        title: 'lck',
        content:"这里会选择一个部门"
      })
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },
   //部门弹窗显示
   selectDept:function(){
      this.setData({
         deptShow:1
      })
   },
   bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
        selectFlag:false,
      

      })
    },
    bindchangeTime:function(event){
       console.log(event)
      this.setData({
         selectFlag:false,
         startTime:event.detail.value
 
       })
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