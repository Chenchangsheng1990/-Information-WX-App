//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list:[],
    first: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/onelist/3528/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res)
        var tempList = res.data.data.content_list;
        console.log(tempList)
        var len = tempList.length;
        that.setData({
          list : res.data.data.content_list,
          first: res.data.data.weather
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  detail: function(e){
 var cate = e.currentTarget.dataset.data.category
 var id = e.currentTarget.dataset.data.item_id  
    console.log(id)
    switch(cate){
      case '4':
        var url='../musicDetail/musicDetail?id='+id;
        break;
      case '1':
        var url='../readDetail/readDetail?id='+id;
        break;
      case '5':
        var url='../movieDetail/movieDetail?id='+id;
        break;
      default:
        ;
    }
    console.log(url)
    wx.navigateTo({
      url: url,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    console.log(1)
  }
})
