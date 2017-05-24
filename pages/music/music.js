// pages/music/music.js
Page({
  data:{
    classname:'',
    current:'',
    isplay: false,
    music_url:"",
    isFirst:true
  },
  list:[],
  onLoad:function(option){
    var that = this;
    wx.request({
      url: 'http://v3.wufazhuce.com:8000/api/channel/music/more/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android',
      success: function(res){
        console.log(res.data.data)
        var tempList = res.data.data;
        console.log(tempList)
        var len = tempList.length;
        that.setData({
          list : res.data.data,
          
        })
        var url_list = [];
        wx.request({
          url: 'https://app.mawenbao.com/music-api-server/?p=xiami&t=songlist&i='+res.data.data.audio_url,
          
          success: function(res){
            // success
          }
        })
       
        
      }
    })
  },
  detail: function(e){
    console.log(e)
    

 var id = e.currentTarget.dataset.id  
 var url='../musicDetail/musicDetail?id='+id;
  
    
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
  play: function(option){
    var music_id = option.currentTarget.dataset.musicid 
    console.log("id?")
    console.log(music_id)
    var that = this;
  wx.request({
    url: 'https://app.mawenbao.com/music-api-server/?p=xiami&t=songlist&i='+music_id,
    success: function(res){
      var music_url = res.data.songs[0].url;
      console.log("是不是")
      console.log(music_url)
      that.setData({
        music_url:music_url
      })
      
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
  var current = option.currentTarget.dataset.index
  console.log('点击事件')
  console.log(this)
  if(this.data.isFirst){
    console.log('创建音乐')
     this.audioCtx = wx.createAudioContext('myAudio')
     this.audioCtx.setSrc(this.data.music_url)
      this.audioCtx.play()
     console.log(this.data)
     this.setData({
       isFirst: false
     })
  }
  if(!this.data.isFirst){
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc(this.data.music_url)
    if(!this.data.isplay){
    console.log('没有播放')
    console.log(this.data)
    this.audioCtx.play()
    console.log("开始播放")
    this.setData({
      classname:'mystyle ',
      current:current,
      isplay: true
    })
    
    console.log(isplay)
    }else{
      console.log('在播放')
      this.audioCtx.pause()
      this.setData({
      classname:'',
      current:current,
      isplay:false
    })
    
   
    }
  }
  

  },
  onReady:function(){
    
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