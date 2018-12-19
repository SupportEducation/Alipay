// pages/work/work.js
var app = getApp();
var TeaexEdit_url = app.appServlet.servlet +'TeaexEditServlet';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    first: null,
  },
  formSubmit (e) {
    var that = this;
    console.log(e.detail.value)
    my.httpRequest({
      url: TeaexEdit_url,
      method: 'GET',
      data: {
        aid: that.data.first.userid,
        activityname: e.detail.value.activityname,
        organizationname: e.detail.value.organizationname,
        teaplace: e.detail.value.teaplace,
        teadescribe: e.detail.value.teadescribe
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data['0']);
        if (res.data['0'] == true) {
          my.confirm({
            title: '提示',
            content: '操作成功',
            showCancel: false,
            success (res) {
              if (res.confirm) {
                my.switchTab({
                  url: '/pages/creat/creat'
                })
              }
            }
          })
        }
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let testcontact = JSON.parse(options.extra);
    this.setData({
      first:testcontact
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