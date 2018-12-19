// pages/news/news.js
var app = getApp();
var GetOneNew_url = app.appServlet.servlet +'GetOneNewServlet';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that=this;
    var $data = options.nid;

    //获取一个新闻
    my.httpRequest({
      url: GetOneNew_url,
      method: 'GET',
      data: {
        nid: $data
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          news: res.data['0'],
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