// pages/index/quick/check.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      dayStyle: [
         {month: 'current', day: new Date().getDate(), color: 'white', background: '#5F75E2'},
         { month: 'current', day: new Date().getDate(), color: 'white', background: '#5F75E2' }
       ],
   },
    //给点击的日期设置一个背景颜色
  dayClick: function (event) {
   let clickDay = event.detail.day;
   let changeBgColor = `dayStyle[0].color`;
   let changeBg = `dayStyle[0].background`;
   let changeDay = `dayStyle[1].day`;
   let changeEndBg = `dayStyle[1].background`;

   this.setData({
     [changeDay]: clickDay,
     [changeBg]:"rgba(255,255,255,0)",
     [changeBgColor]:"black",
     [changeEndBg]: "#5F75E2"
   })
   console.log(event)
   const currentYear = event.detail.year;
   const currentMonth = event.detail.month;
   const currentDay = event.detail.day;
   wx.showModal({
     title: '当前日期',
     content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月'+'当前天：'+currentDay
   });
 },
//月考勤
monthCheck:function(){
   wx.showModal({
     title:'月考勤，从后台拉去记录',
     content:'后台拉去集合数据'
   })
},

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.setNavigationBarTitle({
         title: '考勤管理'
     }); 
       wx.setNavigationBarColor({
         frontColor: '#000000',
         backgroundColor: '#ffffff'
     });
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