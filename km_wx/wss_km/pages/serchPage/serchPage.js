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
  downPdf: function(e) {
    var that=this;
    var proId=e.currentTarget.dataset.proId;
    console.log("downPdf------------proId"+proId);
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: util.reqUrl()+'/wx/getProDetail?proId='+proId,
      data:{},
      method:'GET',
      success: function(res){
        console.log(res.data.code);
        console.log(res.data.data);
        if(res.data.code==200){
          // that.setData({
          //   proDetailId: res.data.data.proid
          // })
          var flag=res.data.data.havepdf;
          var downPdf=res.data.data.downpdf;
          console.log(downPdf+"下载标志"+flag)
          if(flag){
            that.downPdfFile(downPdf)
          }else{
            wx.showToast({
              title: '此产品暂无参数信息可以下载',
            })
          }
          
          console.log("getProDetailOne-----proDetailId----")
          console.log(that.data.proDetailId);
        }else{
          wx.showToast({
            title: '此产品暂无参数信息可以下载',
          })
          return;
        }
      },
      fail: function(error){
        console.log(error)
      }
    })

  },
  downPdfFile:function (url) {
    var urlPath='https://km-wx-1304476764.cos.ap-nanjing.myqcloud.com/PRODUCT/pdf/'+url;
    wx.downloadFile({
      url: urlPath, 
      header: {
          'content-type': 'application/json',
        },
      success (res) { 
        wx.hideLoading()
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail(fail) {
        console.log(fail)
        console.log("------fail---")
      },
      complete(com){
        console.log(JSON.stringify(com))
        console.log("------complete---")
      }
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
   //获取详情页面
   getProDel:function(e){
    // console.log(e.currentTarget.dataset)
    var proId=e.currentTarget.dataset.proId;
    wx.request({
      url: util.reqUrl()+'/wx/getProDetail?proId='+proId,
      data:{},
      method:'GET',
      success: function(res){
        console.log(res.data.code);
        console.log(res.data);
        if(res.data.code===200){
          wx.navigateTo({
            url: '../../pages/productDel/productDel?proId='+proId
          })
        }else{
          wx.showToast({
            title: '此产品暂无详情参数',
          })
          return;
        }
      },
      fail: function(error){
        console.log(error)
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