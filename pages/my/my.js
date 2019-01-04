// var GetAllNews_url = app.appServlet.servlet + ''//地址
const app = getApp()
//获取被赞数量
var GetByFollow_url = app.appServlet.servlet+"GetByFollowServlet"
//获取关注数
var getFollow_url = app.appServlet.servlet + "getFollowServlet"
//点赞数
var GetFollowSum_url = app.appServlet.servlet + "GetFollowSumServlet"
//参加支教活动次数
var GetmyRecruitNum_url = app.appServlet.servlet + 'GetmyRecruitNumServlet';
//index.js
//获取应用实例


Page({
  data: {
    adr:"北京",
    dznum:0,//点赞数
    gznum:0,//关注数
    fsnum:0,//粉丝数
    hdcs:0,

    userInfo: {},
    hasUserInfo: false,
  },
  //申报活动
  changetohd () {
    my.navigateTo({
      url: '../myprogram/myprogram',
    })
  },
  //我的简历
  changetojl(){
    my.navigateTo({
      url: '../creat/creat',
    })
  },
  top_2_1(){
   my.navigateTo({
     url: '../look/look',
   })
  },
  adr1(){
   my.navigateTo({
     url: '../share/share',
   })
  },
  changetomyindex(){
      my.navigateTo({
          url: '../myindex/myindex',
      })
  },
  changetoqu(){
    my.navigateTo({
      url: '../question/question',
    })
  },
  changetoFriend(){
    my.navigateTo({
      url: '../friends/friends',
    })
  },
  changetoActivity(){
    my.navigateTo({
      url: '../myactivity/myactivity',
    })
  },
  changetoFans(){
    my.navigateTo({
      url: '../fans/fans',
    })
  },
  changetoAttention(){
    my.navigateTo({
      url: '../attention/attention',
    })
  },
  changetoZan () {
    my.navigateTo({
      url: '../myzan/myzan',
    })
  },
  onLoad () {
    my.setNavigationBar({
      backgroundColor: "#fff",
    });
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (userInfo) => {
            this.setData({
              userInfo: userInfo,
              hasUserInfo: true
            })
            console.log(userInfo)
          }
        });
      },
    });
    var that=this;
    console.log(app.globalData.userInfo);
    console.log("console.log(app.globalData.userInfo);");
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })

    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   my.getAuthUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow () {
    var that=this;
    my.httpRequest({
      url: GetByFollow_url,
      method: 'GET',
      data: {
        aaid: app.appuserinfo.aid
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          fsnum: data
        })
      },
    })
    my.httpRequest({
      url: getFollow_url,
      method: 'GET',
      data: {
        aid: app.appuserinfo.aid
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          gznum: data
        })
      },
    })
    my.httpRequest({
      url: GetFollowSum_url,
      method: 'GET',
      data: {
        aid: app.appuserinfo.aid
      },
      header: {
        'Content-Type': 'json'
      },
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          dznum: data
        })
      },
    })
    my.httpRequest({
      url: GetmyRecruitNum_url,
      data: {
        aid: app.appuserinfo.aid
      },
      header: {},
      method: 'GET',
      success (res) {
        var data = res.data;
        console.log(data);
        that.setData({
          hdcs: data,
        })
      },
      fail (res) { },
      complete (res) { },
    })


  },


})
