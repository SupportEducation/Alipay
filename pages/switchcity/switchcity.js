var city = require('../../utils/city.js');
var app = getApp()

Page({
  data: {
    lx: '',
    searchLetter: [],
    showLetter: "",
    winHeight: 0,
    cityList: [],
    isShowLetter: false,
    scrollTop: 0,//置顶高度
    scrollTopId: '',//置顶id
    city: "",
    hotcityList: [{ cityCode: 110000, city: '阿拉善盟' }, { cityCode: 310000, city: '阿里地区' }, { cityCode: 440100, city: '阿勒泰地区' }, { cityCode: 440300, city: '巴彦淖尔市' }, { cityCode: 330100, city: '大理白族自治州' }, { cityCode: 320100, city: '南京市' }, { cityCode: 420100, city: '武汉市' }, { cityCode: 410100, city: '郑州市' }, { cityCode: 120000, city: '天津市' }, { cityCode: 610100, city: '西安市' }, { cityCode: 510100, city: '成都市' }, { cityCode: 500000, city: '重庆市' }]
  },
  onLoad(options) {
    var searchLetter = city.searchLetter;
    var cityList = city.cityList();
    var sysInfo = my.getSystemInfoSync(); 
    var winHeight = sysInfo.windowHeight;
    var itemH = winHeight / searchLetter.length;
    var tempObj = [];
    for (var i = 0; i < searchLetter.length; i++) {
      var temp = {};
      temp.name = searchLetter[i];
      temp.tHeight = i * itemH;
      temp.bHeight = (i + 1) * itemH;
      tempObj.push(temp)
    }
    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      searchLetter: tempObj,
      city: options.lx,
      cityList: cityList
    })
  },
  clickLetter: function(e) {
    console.log(e.currentTarget.dataset.letter)
    var showLetter = e.currentTarget.dataset.letter;
    this.setData({
      showLetter: showLetter,
      isShowLetter: true,
      scrollTopId: showLetter,
    })
    var that = this;
    setTimeout(function() {
      that.setData({
        isShowLetter: false
      })
    }, 1000)
  },
  //选择城市
  bindCity: function(e) {
    // console.log(e.currentTarget.dataset.city)
    this.setData({ city: e.currentTarget.dataset.city })
    my.setStorage({
      key: "city",
      data: e.currentTarget.dataset.city
    })
    my.reLaunch({
      url: '/pages/index/index'
    })
  },
  //选择热门城市
  bindHotCity: function(e) {
    // console.log(e.currentTarget.dataset.city)
    this.setData({
      city: e.currentTarget.dataset.city
    })
    my.setStorage({
      key: "city",
      data: e.currentTarget.dataset.city
    })
    my.reLaunch({
      url: '/pages/index/index'
    })
  },
  //点击热门城市回到顶部
  hotCity: function() {
    this.setData({
      scrollTop: 0,
    })
  }

});
