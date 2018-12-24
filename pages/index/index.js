var app = getApp();
var GetAllNews_url = app.appServlet.servlet+'GetALLNewsServlet'; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area:"北京",
    array:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that=this;
    //获取所有新闻
    my.httpRequest({
      url: GetAllNews_url,
      method: 'GET',
      data: {
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          array: res.data,
        })
      },
    })
  },
  v4_1(){
    var lx = "长期支教"
    my.navigateTo({
      url: "../program/program?&lx=" +lx,
      backgroundColor:'#139AFF'
    })
  },
  v4_2 () {
    var lx = "短期支教"
    my.navigateTo({
      url: "../program/program?&lx=" + lx
    })
  },
  v4_3 () {
    my.navigateTo({
      url: '../program2/program2',
    })
  },
  v4_4 () {
    my.navigateTo({
      url: '../more/more',
    })
  },
  v6_1 (e) {
    var $data = e.currentTarget.dataset;
    console.log($data.id)
    my.navigateTo({
      url: '../news/news?nid='+$data.id,
    })
  },
  v3_2(){
    var lx = this.data.area
    my.navigateTo({
      url: '../switchcity/switchcity?lx=' + lx
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    var that = this;
    my.getStorage({
      key: 'city',
      success (res) {
        console.log(res.data)
        that.setData({
          area: res.data
        })
      }
    })

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
    my.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    //获取所有新闻
    my.httpRequest({
      url: GetAllNews_url,
      method: 'GET',
      data: {
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          array: res.data,
        })
      },complete(){
        my.hideNavigationBarLoading() //完成停止加载
        my.stopPullDownRefresh() //停止下拉刷新
      }
    })
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