// pages/story/story.js
var app = getApp()
var GetOneStory_url = app.appServlet.servlet + 'GetOneStoryServlet'; 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    s_id:null,
    story:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that=this;
    this.setData({
      s_id:options.s_id
    })
    my.httpRequest({
      url: GetOneStory_url,
      method: 'GET',
      data: {
        s_id:that.data.s_id
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          story: data['0'],
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage () {
  
  }
})