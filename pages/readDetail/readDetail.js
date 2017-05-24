// pages/readDetail/readDetail.js
var WxParse = require('../../wxParse/wxParse.js');

Page({
  data:{
    content:[],
    article:[]
  },
  onLoad:function(option){
    var url = "http://v3.wufazhuce.com:8000/api/essay/" + option.id + "?channel=wdj&source=channel_reading&source_id=9264&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android";
    var that = this;
    wx.request({
      url: url,
      success: function(res){
        var content = res.data.data;
        var article = res.data.data.hp_content
        that.setData({
          article: WxParse.wxParse('article', 'html', article, that, 5),
          content: content
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