// pages/index/quick/outTra/outTra.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      array: ['研发部门', '驻场', '运维', '产品部门'],
      chechArray: ['李总', '文总', '苏总', '刘总'],
      selectFlag: true,
      startSelectFlag:true,
      endSelectFlag:"true",
      daysFlag:true,
      proFlag:true,
      leaderFlag:true,
      overTimeFlag:true,
      startTime:'',
      endTime:'',
      daysInputValue:'',
      proValueInput:'',
      overTimeInputValue:''
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      wx.setNavigationBarTitle({
         title: '外出管理'
     }); 
       wx.setNavigationBarColor({
         frontColor: '#000000',
         backgroundColor: '#ffffff'
     });
   },
   //部门选择
   bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
        selectFlag:false,
      })
    },
    //审批人
    bindCheckLeaderChange:function(event){
      this.setData({
         checkIndex:event.detail.value,
         leaderFlag:false
      })
   },
   //开始时间
    bindchangeTime:function(event){
       console.log(event)
      this.setData({
         startSelectFlag:false,
         startTime:event.detail.value
       })
    },
    //结束时间
    bindchangeEndTime:function(event){
      this.setData({
         endSelectFlag:false,
         endTime:event.detail.value
       })
    },
    daysValue:function(e){
       var that=this;
       console.log(e)
       console.log(e.detail.value)
       that.setData({
         daysInputValue:e.detail.value,
         daysFlag:false
      })
      if(that.data.daysInputValue == 0){
         that.setData({
            daysFlag:true
         })
      }    
    },
    //项目名称
    proValue:function(e){
      this.data.proValueInput=e.detail.value;
      // console.log(this.data.proFlag)
      this.setData({
         proFlag:false
      })
      if(this.data.proValueInput.length==0){
         this.setData({
            proFlag:true
         })
      }
    },
   //加班内容
   overTimeValue:function(e){
      this.data.overTimeInputValue=e.detail.value;
      this.setData({
         overTimeFlag:false
      })
      if(this.data.overTimeInputValue.length==0){
         this.setData({
            overTimeFlag:true
         })
      }
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