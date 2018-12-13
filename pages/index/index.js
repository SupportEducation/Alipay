var app = getApp();
var GetAllNews_url = app.appServlet.servlet + 'GetALLNewsServlet'; 

Page({
  data: {
    area: "北京",
    array: null
  },
  onLoad(query) {
    var that = this;
    my.httpRequest({
      url: GetAllNews_url, // 目标服务器url
      method: 'GET',
      headers: {
        'Content-Type': 'json'
      },
      success: (res) => {
        var data = res.data;
        console.log(data);
        that.setData({
          array: res.data,
        })
      },
    });
  },
  v4_1: function() {
    var lx = "长期支教"
    my.navigateTo({
      url: "../program/program?&lx=" + lx
    })
  },
  v4_2: function() {
    var lx = "短期支教"
    my.navigateTo({
      url: "../program/program?&lx=" + lx
    })
  },
  v4_3: function() {
    my.navigateTo({
      url: '../program2/program2',
    })
  },
  v4_4: function() {
    my.navigateTo({
      url: '../more/more',
    })
  },
  v6_1: function(e) {
    var $data = e.currentTarget.dataset;
    console.log($data.id)
    my.navigateTo({
      url: '../news/news?nid=' + $data.id,
    })
  },
  v3_2: function() {
    var lx = this.data.area
    my.navigateTo({
      url: '../switchcity/switchcity?lx=' + lx
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
    my.showNavigationBarLoading() //在标题栏中显示加载
    var that = this;
    my.httpRequest({
      url: GetAllNews_url, // 目标服务器url
      method: 'GET',
      headers: {
        'Content-Type': 'json'
      },
      success: (res) => {
        var data = res.data;
        console.log(data);
        that.setData({
          array: res.data,
        })
      },complete:() => {
        my.hideNavigationBarLoading() //完成停止加载
        my.stopPullDownRefresh() //停止下拉刷新
      }
    });
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
