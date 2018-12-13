var app = getApp();
var GetOneNew_url = app.appServlet.servlet + 'GetOneNewServlet';

Page({
  data: {
    news: null
  },
  onLoad(options) {
    var that = this;
    var $data = options.nid;
    my.httpRequest({
      url: GetOneNew_url, // 目标服务器url
      method: 'GET',
      data: {
        nid: $data
      },
      headers: {
        'Content-Type': 'json'
      },
      success: (res) => {
        var data = res.data;
        console.log(data);
        that.setData({
          news: res.data['0'],
        })
      },
    });
  },
});
