//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util');
Page({
  data: {
   navList:[],
   transValue:'',
   winWidth: 0,
   winHeight: 0,
   currentTab: 0,
   // 普通选择器列表设置,及初始化
   colorShow:false,//控制下拉列表的显示隐藏，false隐藏、true显示
   sizeShow:false,
   rateShow:false,
   selectData:['按颜色搜索','颜色：黑白','颜色：彩色'],//下拉列表的数据
   selectData2:['按输出尺寸搜索','最大幅面：A3','最大幅面：A4'],//下拉列表的数据
   selectData3:['按打印速度搜索','打印速度：20页/分钟以下','打印速度：20－40页/分钟','打印速度：40－60页/分钟','打印速度：60页/分钟以上'],//下拉列表的数据
   sizeShow:false,
   colorIndex:0,//颜色下拉选项
   sizeIndex:0,//尺寸下拉选项
   rateIndex:0,//打印速度下拉选项
   defaultPros:[],//产品
   newsList:[],//新闻
   bannerList:[],//banner
   searchValue:''

  },
  // 点击下拉显示框颜色搜索
  selectTapColor(){
    this.setData({
      colorShow: !this.data.colorShow
    });
  },
  //尺寸
  selectTapSize(){
    console.log("selectTapSize")
    this.setData({
      sizeShow: !this.data.sizeShow
    });
  },
  //速度
  selectTapRate(){
    console.log("selectTapRate")
    this.setData({
      rateShow: !this.data.rateShow
    });
  },

  // 点击下拉列表
  optionTap(e){
    // debugger;
    console.log(JSON.stringify(e))
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log("Index",Index)
    this.setData({
      index:Index,
      show:!this.data.show
    });
  },
  optionTapColor(e){
    console.log(e)
    // debugger;
    let index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(index)
    this.setData({
      colorIndex:index,
      colorShow: !this.data.colorShow
    });
    console.log(this.data.selectData[index])
    this.sendReq(index);

  },

  sendReq: function(){
    var that=this;
    var index=String(index);
    wx.request({
      url: util.reqUrl()+'/wx/filterPros',
      data: {color:this.data.colorIndex,size:this.data.sizeIndex,speed:this.data.rateIndex},
      success(res){
        console.log(res.data.data)
        that.setData({
          defaultPros:res.data.data
        })
      }
    })
  },
  getBanner:function(){
    var that=this;
    wx.request({
      url: util.reqUrl()+'/wx/getBanner',
      data: {},
      success(res){
        console.log(res.data.data)
        that.setData({
          bannerList : res.data.data
        })
      }
    })
  },
  //获取新闻信息
  getNews:function(){
    var that=this;
    wx.request({
      url: util.reqUrl()+'/wx/getNewsIndex',
      data: {},
      success(res){
        console.log(res.data.data)
        that.setData({
          newsList : res.data.data
        })
      }
    })
  },
  optionTapSize(e){
    let index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      sizeIndex:index,
      sizeShow: !this.data.sizeShow
    });
    this.sendReq()
  },
  optionTapRate(e){
    let index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      rateIndex:index,
      rateShow: !this.data.rateShow
    });
    this.sendReq();
  },
  swichNav: function( e ) {
    var that = this;
    if( this.data.currentTab === e.target.dataset.current ) {
        return false;
    } else {
        that.setData( {
            currentTab: e.target.dataset.current
        })
    }
},
  bindChange: function( e ) {
    var that = this;
    that.setData( { currentTab: e.detail.current });
},
searchName:function(e){
  console.log(e.detail.value)
  this.setData({
    searchValue: e.detail.value
  })
  console.log(this.data.searchValue)
  console.log("this.data.searchValue")
},
suo:function(){
 
  var sValue=this.data.searchValue;

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
//跳转产品详情页面
proDetal: function(e){
  console.log(e)
  var proId=e.currentTarget.dataset.proId;
  console.log(e.currentTarget.dataset.proId)
  this.getProList(proId);
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
getProList:function(proId){
  var pId=String(proId)
  wx.request({
    url: util.reqUrl()+'/wx/getProDetail?proId='+pId,
    data:{},
    method:'GET',
    success: function(res){
      console.log(res.data.code);
      if(res.data.code==200){
        wx.navigateTo({
          // 页面之间传值
          url: '../../pages/productDel/productDel?proId='+pId
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

  //事件处理函数
  bindViewTap: function() {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options")
    //banner
    this.getBanner();
    //产品列表
    this.sendReq();
    //新闻列表
    this.getNews();
    
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
          that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight+50
          });
      }
  });
    that.setData({
      id: options.id
    });
  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function(option){
    console.log(option);
    // console.log("option5555555555");
    let obj = {
      title: '柯尼卡美能达',
      path: '/pages/index/index',
      imageUrl: 'https://km-wx-1304476764.cos.ap-nanjing.myqcloud.com/banner/banner%402x.png'
    };
    return util.shareEvent(option, obj);
  }
  
})
