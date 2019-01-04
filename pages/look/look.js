// var GetAllNews_url = app.appServlet.servlet + ''//地址
import time from '../../utils/datetime.js';  
var app = getApp()
var GetOneUserCollection_url = app.appServlet.servlet + 'GetOneUserCollectionServlet'; 
var GetAllStory_url = app.appServlet.servlet + 'GetAllStoryServlet'; 
//关注
var InsertFollow_url = app.appServlet.servlet +'InsertFollowServlet';
//点赞
var InsertCollection_url = app.appServlet.servlet + 'InsertCollectionServlet';

Page({
  data: {
    /**  
        * 页面配置  
        */
        change:1,
    attention: '关注',
    winWidth: 0,//系统宽高
    winHeight: 0,//系统宽高
    // tab切换    
    currentTab: 0,
    userInfo: {},
    hasUserInfo: false,
    flag: false,
    array:null,
    array1:null,
    isalike:1,
    index: null
  },
  //点击前往story页面
  changetoStory (e) {
    var $data = e.currentTarget.dataset;
    my.navigateTo({
      url: '../story/story?s_id='+$data.s_id,
    })
  },
  //点击前往otherindex页面
  headimage (e) {
    var a_id = e.currentTarget.dataset.a_id;
    my.navigateTo({
      url: '../otherindex/otherindex?a_id='+a_id,
    })
  },
  //点赞的点击事件
  top_2 (e) {
    var that = this;
    var aaid = e.currentTarget.dataset.aid;
    var s_id = e.currentTarget.dataset.s_id;
    if(that.data.flag1==1){
         that.data.flag=2;
    }
    if (aaid == app.appuserinfo.aid) {
      my.confirm({
        title: '提示',
        content: '不能赞自己！',
        showCancel: false
      })
    }
    else {
      my.httpRequest({
        url: InsertCollection_url,
        method: 'GET',
        data: {
          aid: app.appuserinfo.aid,
          s_id:s_id
        },
        header: {
          'Content-Type': 'json'
        },
        success (res) {
          var data = res.data;
          console.log(data);
          if (data == '[false]') {
            my.alert({
              title: '提示',
              content: '点赞失败！',
              buttonText: '确定',
            })
          } else if (data == 'again') {
            my.alert({
              title: '提示',
              content: '已点赞该用户！',
              buttonText: '我知道了',
            })
          }
          else {
            my.alert({
              title: '提示',
              content: '点赞成功！',
              buttonText: '确定',
            })
            
            my.httpRequest({
              url: GetAllStory_url,
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
                  array1: res.data,
                })
              },
            })
          }
        },
      })
    }

  },
  onLoad () {
    var that = this;
    my.setNavigationBar({
      backgroundColor: "#fff",
    });
    /**  
     * 获取系统信息  
     */
    my.getSystemInfo({

      success (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    //  flag: (options.flag == "true" ? true : false)
  },
  /**  
     * 滑动切换tab  
     */
  bindChange (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /**  
   * 点击tab切换  
   */
  swichNav (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      my.httpRequest({
        url: GetOneUserCollection_url,
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
            array: res.data,
          })
        },
      })

      my.httpRequest({

        url: GetAllStory_url,
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
            array1: res.data,
          })
        },
      })
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /** 
   * 点击分享 
   */
  onShareAppMessage () {
    return {
    }
  },
  guanzhu (event) {
    var that = this;
    var aaid = event.currentTarget.dataset.aaid;
    if (aaid == app.appuserinfo.aid)
    {
      my.alert({
        title: '提示',
        content: '不能关注自己！',
        buttonText: "确定"
      })
    }
    else{
      my.httpRequest({
        url: InsertFollow_url,
        method: 'GET',
        data: {
          aid: app.appuserinfo.aid,
          aaid: aaid
        },
        header: {
          'Content-Type': 'json'
        },
        success (res) {
          var data = res.data;
          console.log(data);
          if(data=='[false]')
          {
            my.alert({
              title: '提示',
              content: '关注失败！',
              buttonText: "确定"
            })
          }else if(data=='again'){
            my.alert({
              title: '提示',
              content: '已关注该用户！',
              buttonText: "确定"
            })
          }
          else{
            my.alert({
              title: '提示',
              content: '关注成功！',
              buttonText: "确定"
            })
          }
        },  
      })
    }
  },
  onShow () {
    var that = this;
    my.httpRequest({
      url: GetOneUserCollection_url,
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
          array: res.data,
        })
      },
    })

    my.httpRequest({
     
      url: GetAllStory_url,
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
          array1: res.data,
        })
      },
    })
  },
    
  
})    