// pages/musicDetail/musicDetail.js
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data:{
    article: {
      story:[]
    },
    content:[]
  },
  onLoad:function(option){
    var url = "http://v3.wufazhuce.com:8000/api/music/detail/"+option.id+"?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
    var that = this;
    wx.request({
      url: url,
      
      success: function(res){
        
        var article = res.data.data;
        console.log(res.data)
        that.setData({
          story: WxParse.wxParse('story', 'html', article.story, that, 5),
          content:res.data.data
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