var app = getApp();
var GetAllorganization_url = app.appServlet.servlet +'GetAllorganizationServlet';
Page({
  data: {
    array:null
  },
  onLoad () {
    var that = this;

    my.httpRequest({
      url: GetAllorganization_url,
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
  v6_1 (e) {
    var $data = e.currentTarget.dataset;
    my.navigateTo({
      url: '../organization/organization?oid='+$data.oid,
    })
  }
});