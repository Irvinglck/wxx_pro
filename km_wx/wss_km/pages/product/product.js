const util=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ['多功能复合机','打印机/一体机'],        
    currentTab: 0,
    sendList:[],
    proList:[],
    proDetailId:'',//产品列表
    searchValue:'',
  },
  select: {
    page: 1,
    size: 6,
    isEnd: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // 自定义产品库title背景颜色
    wx.setNavigationBarTitle({
        title: '产品库'
    }); 
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000'
    });
    that.getProList('38')
  },
  searchName:function(e){
    console.log(e.detail.value)
    this.setData({
      searchValue: e.detail.value
    })
    console.log(this.data.searchValue)
  },
  suo:function(){
 
    var sValue=this.data.searchValue;
    console.log(sValue)
    if(sValue==undefined||JSON.stringify(sValue)=="{}"||sValue==''){
      wx.showToast({
        title: '请输入您要筛选的内容',
      })
      return;
    }
    wx.navigateTo({
      url: '../../pages/serchPage/serchPage?sValue='+sValue
    })
  },
  //获取产品列表请求
  getProList:function(type){
    var that=this;
    wx.request({
      url: util.reqUrl()+'/wx/getProducts?type='+type,
      data:{},
      method:'GET',
      success: function(res){
        that.setData({
          proList: res.data.data
        })
        console.log(res.data.data);
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

  downPdf1:function(e){
    var that=this;
    console.log(e);
    var proId=e.currentTarget.dataset.proId;

    console.log("11111111111111112342");
    wx.showLoading({
      title: '加载中',
    });
    
  },
  currentTab: function (e) {
    console.log(111111111)
    var type=e.currentTarget.dataset.idx==0?'38':'46';
    this.getProList(type);
    console.log(e.currentTarget.dataset.idx);
    console.log(e.currentTarget.dataset.idx);
    if (this.data.currentTab == e.currentTarget.dataset.idx){
      return;
    }
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    this.select={
      page: 1,
      size: 6,
      isEnd: false
    }
    this.data.sendList=[];
    // this.getData()
  },
  //获取详情页面
  getProDel:function(e){
    console.log(e.currentTarget.dataset)
    var proId=e.currentTarget.dataset.proId;
    wx.request({
      url: util.reqUrl()+'/wx/getProDetail?proId='+proId,
      data:{},
      method:'GET',
      success: function(res){
        console.log(res.data.code);
        console.log("ppppppppppppp");
        if(res.data.code==200){
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

  
  getData:function(){
    var _this=this;
    if (this.select.isEnd){
      return
    }
    var type = this.data.currentTab == 0 ? 'ALL' : this.data.currentTab == 1 ? 'WAIT_DELIVER' : 'DELIVER';
    wx.request(`你的接口地址，后面的是参数` + type + `/` + this.select.page + `/` + this.select.size, {}, 'GET', function (res) {
      var content = res.data.data;
      _this.setData({
        sendList: (_this.data.sendList).concat(content) 
      })
      if (content.length>0){
        _this.select.page++
      }else{
        _this.select.isEnd=true
      }
    })
  },
})