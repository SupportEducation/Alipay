// pages/myindex/myindex.js
// var GetAllNews_url = app.appServlet.servlet + ''//地址
const app = getApp()
//获取被赞数量
var GetByFollow_url = app.appServlet.servlet + "GetByFollowServlet"
//获取关注数
var getFollow_url = app.appServlet.servlet + "getFollowServlet"
//点赞数
var GetFollowSum_url = app.appServlet.servlet + "GetFollowSumServlet"
//参加支教活动次数
var GetmyRecruitNum_url = app.appServlet.servlet + 'GetmyRecruitNumServlet';
//个人故事
var GetOneUserStory_url = app.appServlet.servlet + 'GetOneUserStoryServlet';
//个人足迹
var GetAllFfootprint_url = app.appServlet.servlet + 'GetAllFfootprintServlet';

// var lth
Page({
    /**
     * 页面的初始数据
     */
    data: {
        // lth: 1000,
        winWidth: 0,
        winHeight: 0,
        cznum: 0,//超赞数
        gznum: 0,//关注数
        fsnum: 0,//粉丝数
        zjnum:0,
        radioCheckVal: 0,
        open: false,
        //program 为足迹数据
      program: [{ "img": "tmp_f35a7b62d24bf75c81acdbc4c2ed60c8cf3d5450ca72b90d.jpg", "place": "北京市  顺义区", "time": { "date": 8, "day": 4, "hours": 0, "minutes": 0, "month": 10, "seconds": 0, "time": 1541606400000, "timezoneOffset": -480, "year": 118 }, "title": "支教", "type": "发布了1次个人故事" }, { "img": "tmp_35c621e6383cf7deddb93dd9fbbd322120f4a73e174f7177.jpg", "place": "北京市  顺义区", "time": { "date": 8, "day": 4, "hours": 0, "minutes": 0, "month": 10, "seconds": 0, "time": 1541606400000, "timezoneOffset": -480, "year": 118 }, "title": "想你", "type": "发布了1次个人故事" }, { "img": "tmp_4b8f6ffa3f5394c85d7b2203d2ee330a7f44be91e7ec6b40.jpg", "place": "北京市  顺义区", "time": { "date": 9, "day": 2, "hours": 0, "minutes": 0, "month": 9, "seconds": 0, "time": 1539014400000, "timezoneOffset": -480, "year": 118 }, "title": "支教琐事", "type": "发布了1次个人故事" }, { "img": "1111.jpg", "place": "庆阳市", "time": { "date": 24, "day": 4, "hours": 0, "minutes": 0, "month": 3, "seconds": 0, "time": 1208966400000, "timezoneOffset": -480, "year": 108 }, "title": "田字格助学2018秋季招募", "type": "参加了1次支教活动" }],
        //program2 为故事数据
      program2: [{ "aid": 186, "cflag": 0, "headimg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJpuVY3JXdl1um0icqdBlrqw4I6goJD5E6ic2mYht5ksKtZZibTiaFohvbJOfg10icTJ8sPQJYQ4DROa9Q/132", "nickname": "呆霸王", "s_content": "     我们是7月15号到的西宁，怎么说呢，我们去二校的孩纸们是最波折的，但也是最幸运的，那天接我们的校长没有来，我们当时真的是怀着惴惴不安的心情，很惊慌的给校长打了好多电话，但无法接通，我们四个孩子只好现在中心寄校呆了一晚，在和中心寄校的校长聊天的过程中，我们感到了悲哀，我们身为志愿者去那里，怀着很高的激情，顶着崇高的帽子，认为自己是满怀爱心来了，是为他们做好事的，知道那里的老师是怎么想的么，那里的老师认为我们是去体验生活的，当然有绝大多数的志愿者心里确实是这么想得，而老师们也为了做好事，就给了我们这个机会。恩~总结一句话就是，双方都认为自己是在做好事吧。说句实话呢，那里的几所学校是不缺老师的，特别是那里的中心寄校，可以说是那里最大的学校吧，但是像我们二校，山里的学校，还是很缺老师的，我们是直到进入二校之后，才觉得自己的人生价值终于又体现出来了，才觉得自己的这次支教之行没有白费。而进入其他学校的志愿者们~顶多真的就是体验生活吧~这就是我说我们幸运之处。\n    但无论怎么样，不管是二校的老师还是哪里的老师，对我们志愿者，都真的不错，都很热情。\n    我上课的第一天，三节语文课（顺便插一句，那里是藏区，我们志愿者去，对于主课，我们只能讲语文。因为那里的其他科，很都都是用藏文讲的，当然那里也很缺一些副科老师，像什么音乐，美术，体育等都没有专业老师的），从这一天开始，我自己开始过得很充实，嗓子开始吃不消，再次提醒一下，去那边的志愿者，在内地多买一些润喉片，会有很大用处的。", "s_id": 31, "s_img": "tmp_4b8f6ffa3f5394c85d7b2203d2ee330a7f44be91e7ec6b40.jpg", "s_like": 7, "s_place": "北京市  顺义区", "s_time": "2018-10-09", "s_title": "支教琐事" }, { "aid": 186, "cflag": 0, "headimg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJpuVY3JXdl1um0icqdBlrqw4I6goJD5E6ic2mYht5ksKtZZibTiaFohvbJOfg10icTJ8sPQJYQ4DROa9Q/132", "nickname": "呆霸王", "s_content": "在这里", "s_id": 40, "s_img": "tmp_35c621e6383cf7deddb93dd9fbbd322120f4a73e174f7177.jpg", "s_like": 0, "s_place": "北京市  顺义区", "s_time": "2018-11-08", "s_title": "想你" }, { "aid": 186, "cflag": 0, "headimg": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJpuVY3JXdl1um0icqdBlrqw4I6goJD5E6ic2mYht5ksKtZZibTiaFohvbJOfg10icTJ8sPQJYQ4DROa9Q/132", "nickname": "呆霸王", "s_content": "在这里", "s_id": 42, "s_img": "tmp_f35a7b62d24bf75c81acdbc4c2ed60c8cf3d5450ca72b90d.jpg", "s_like": 0, "s_place": "北京市  顺义区", "s_time": "2018-11-08", "s_title": "支教" }],
        height: null
    },


    swichNav (e) {
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,

            })
        }
    },
    radioCheckedChange (e) {
        this.setData({
            radioCheckVal: e.detail.value,
        })
    },
    /**
 * 生命周期函数--监听页面加载
 */
    fabu(){

    },
    xjt () {
        this.setData({
            open: !this.data.open
        })
    },
    bindChange (e) {

        var that = this;
        that.setData({ radioCheckVal: e.detail.current });

    },
    changetoActivity () {
      my.navigateTo({
        url: '../myactivity/myactivity',
      })
    },
    fabu(){
      my.navigateTo({
        url: '../release/release',
      })
    },
    onLoad (options) {
        var that = this;
        my.setNavigationBar({
          backgroundColor: "#139AFF",
        });
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
              cznum: data
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
              zjnum: data,
            })
          },
          fail (res) { },
          complete (res) { },
        })
        //获取个人故事
        my.httpRequest({
          url: GetOneUserStory_url,
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
              // program2: data
            })
          },
        })

        //获取个人足迹
        my.httpRequest({
          url: GetAllFfootprint_url,
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
              // program: data
            })
          },
        })
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
        // this.data.lth = this.data.program.length * 142,
        // console.log(this.data.lth)
        // if (app.globalData.userInfo) {
        //     this.setData({
        //         userInfo: app.globalData.userInfo,
        //         hasUserInfo: true
        //     })
        // } else if (this.data.canIUse) {
        //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //     // 所以此处加入 callback 以防止这种情况
        //     app.userInfoReadyCallback = res => {
        //         this.setData({
        //             userInfo: res.userInfo,
        //             hasUserInfo: true
        //         })
        //     }
        // } else {
        //     // 在没有 open-type=getUserInfo 版本的兼容处理
        //     my.getAuthUserInfo({
        //         success: res => {
        //             app.globalData.userInfo = res.userInfo
        //             this.setData({
        //                 userInfo: res.userInfo,
        //                 hasUserInfo: true
        //             })
        //         }
        //     })
        // }
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

    },
})