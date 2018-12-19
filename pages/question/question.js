// pages/question/question.js
var app=getApp();
import datetime from '../../utils/datetime.js'; 
var InsertQuestion_url = app.appServlet.servlet + 'InsertQuestionServlet'//地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    texts: "至少5个字",
    min: 5,
    max: 1000,
  },
  //字数限制    
  inputs (e) {
    // 获取输入框的内容  
    var value = e.detail.value;
    // 获取输入框内容的长度  
    var len = parseInt(value.length);
    //最多字数限制  
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行  
    this.setData({
      MaxdNumber: len //当前字数    
    });
  },
  //照片上传
  chooseImage (e) {
    var that = this;
    my.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: res.tempFilePaths
        });
      }
    })
  },
  previewImage (e) {
    my.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  formsubmit (e) {
    var that = this
    //上传图片
    function upload(page, path) {
      my.showToast({
        icon: "loading",
        title: "正在上传"
      }),
        my.uploadFile({
          url: InsertQuestion_url,
          filePath: path[0],
          name: 'file',
          header: { "Content-Type": "multipart/form-data" },
          formData: {
            //和服务器约定的token, 一般也可以放在header中 
            q_title: e.detail.value.q_title,
            q_content: e.detail.value.q_content,
            q_time: datetime.formatTime(new Date())
          },
          success (res) {
            console.log(res);
            if (res.statusCode != 200) {
              my.confirm({
                title: '提示',
                content: '上传失败',
                showCancel: false
              })
              return;
            }
            if (res.data == '[true]') {
              my.confirm({
                title: '提示',
                content: '操作成功',
                showCancel: false,
                success (res) {
                  if (res.confirm) {
                    my.switchTab({
                      url: '../my/my'
                    })
                  }
                }
              })
            } else {
              my.confirm({
                title: '提示',
                content: '操作失败',
                showCancel: false,
                success (res) {
                  if (res.confirm) {
                    my.switchTab({
                      url: '../my/my'
                    })
                  }
                }
              })
            }
          },
          fail (e) {
            console.log(e);
            my.confirm({
              title: '提示',
              content: '上传失败',
              showCancel: false
            })
          },
          complete () {
            my.hideToast();
            //隐藏Toast 
          }
        })
    }

    upload(that, that.data.files)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {

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