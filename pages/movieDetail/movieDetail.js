// pages/movieDetail/movieDetail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({
  data:{
    id:'',
    movieName: '',
    movie:'',
    imgUrls: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    circular:true,
    mode: 'scaleToFill',
    article: []
  },
  
  onLoad:function(option){
    var url = "http://v3.wufazhuce.com:8000/api/movie/" + option.id + "/story/1/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
    var url_img="http://v3.wufazhuce.com:8000/api/movie/detail/" + option.id + "?channel=wdj&source=summary&source_id=9095&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android"
    var that = this;
    wx.request({
      url: url,
      success: function(res){
       var article = res.data.data.data[0].content
       console.log(article)
        that.setData({
          movie:res.data.data.data[0],
          article: WxParse.wxParse('article', 'html', article, that, 5)
        })
      
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    //图片
    wx.request({
      url: url_img,
      
      success: function(res){
        
        that.setData({
          imgUrls: res.data.data.photo,
          movieName: res.data.data.title
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
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})