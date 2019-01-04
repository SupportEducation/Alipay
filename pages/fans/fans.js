// pages/attention/attention.js
var app = getApp()
var GetAllFans_url = app.appServlet.servlet + 'GetAllFansServlet'
//取消关注
var DeleteFriends_url = app.appServlet.servlet + 'DeleteFriends'
//关注
var InsertFollow_url = app.appServlet.servlet + 'InsertFollowServlet';
Page({
  data: {
    friends: null
  },
  //修改
  edit (e) {
    var that=this;
    console.log(e)
    var aaid=e.currentTarget.dataset.aaid; 
    var dataset = e.target.dataset;
    var Index = dataset.index; //拿到是第几个数组
    

    this.setData({
      friends: this.data.friends
    });
    if (this.data.friends[Index].flag){
      //取消关注
      my.httpRequest({
        url: DeleteFriends_url,
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
          if (data == true) {
            my.confirm({
              title: '提示',
              content: '删除成功！',
              showCancel: false
            })
          }
          else {
            my.confirm({
              title: '提示',
              content: '删除失败！',
              showCancel: false
            })
          }
        },
      })
    }else{
      //关注
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
          if (data == '[false]') {
            my.alert({
              title: '提示',
              content: '关注失败！',
              buttonText: '确定',
            })
          } else if (data == 'again') {
            my.alert({
              title: '提示',
              content: '以关注该用户！',
              buttonText: '确定',
            })
          }
          else {
            my.alert({
              title: '提示',
              content: '关注成功！',
              buttonText: '确定',
            })
          }
        },
      })
    }

    this.data.friends[Index].flag = 1;

        my.httpRequest({
          url: GetAllFans_url,
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
              friends: data
            })
          },
        })
     

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    var that = this;
    /**  
     * 获取系统信息  
     */
    my.httpRequest({
      url: GetAllFans_url,
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
          friends: data
        })
      },
    })


    my.getSystemInfo({
      success (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    
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