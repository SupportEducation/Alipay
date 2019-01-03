// var authServlet = 'http://localhost:8080/TeacherSupport/AuthcodeServlet'
var authServlet = 'https://www.bcuvote.top/TeacherSupport//AuthcodeServlet'
App({
  onLaunch(options) {
    // 第一次打开
    options.query == {number:1}
<<<<<<< .mine
    const that = this;
        //  my.switchTab({
        //       url: '../index/index'
        //       })
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        if (res.authCode){ 
          my.httpRequest({
            url: authServlet, // 目标服务器url 
            data:{
              authcode: res.authCode
            },
            method: 'POST',
            success: (res) => {
              console.log(res)
              // that.setData({})
              that.appuserinfo.username = res.data[0].username;
              that.appuserinfo.aid = res.data[0].aid;
              my.switchTab({
                url: '../index/index'
=======
    const that = this;
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        if (res.authCode){ 
          my.httpRequest({
            url: authServlet, // 目标服务器url 
            data:{
              authcode: res.authCode
            },
            method: 'POST',
            success: (res) => {
              console.log(res)
              // that.setData({})
              that.appuserinfo.username = res.data[0].username;
              that.appuserinfo.aid = res.data[0].aid;
              my.switchTab({
                url: '../index/index'



>>>>>>> .theirs
              })
            },
            fail:() => {
              my.alert({
                title: '提示',
                content:'连接服务器失败，请稍后再试！'
              });
            },
          });
        }
      },
    });
    console.info('App onLaunch');
    
  },
  globalData: {
    userInfo: null
  },
  appuserinfo: {
    username: null,
    aid: null,
    num: ''
  },
  appServlet: {
    //  servlet: 'http://localhost:8080/TeacherSupport/'
    servlet: 'https://www.bcuvote.top/TeacherSupport/'
  }
});