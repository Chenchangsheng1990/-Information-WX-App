// pages/read/read.js
Page({
  data:{
    htmlcontent:'<view class="div"><text>按照往常的惯例，美国最老牌的媒体《纽约时报》此前选出了今年在银幕上表现最突出的演员，并为他们拍摄了九部短片。之前这个系列中有大家比较熟知的“一分钟模仿表演”和“九个吻”。</text></view>'


  },
  list:[],
  onLoad:function(options){
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res.data.data)
        var tempList = res.data.data;
        console.log(tempList)
        var len = tempList.length;
        console.log(len)
        that.setData({
          list : res.data.data
        })
      },
      fail: function() {
        alert('数据获取失败，请刷新')
      },
      complete: function() {
        // complete
      }
    })
  },
  detail: function(e){
    var id = e.currentTarget.dataset.id;
    var url='../readDetail/readDetail?id='+id;
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
  },
  onPullDownRefresh: function(){
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res.data.data)
        var tempList = res.data.data;
        console.log(tempList)
        var len = tempList.length;
        console.log(len)
        that.setData({
          list : res.data.data
        })
      },
      fail: function() {
        alert('数据获取失败，请刷新')
      },
      complete: function() {
        // complete
      }
    })
    wx.stopPullDownRefresh()
  }
})