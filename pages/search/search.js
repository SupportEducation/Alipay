//index.js
//获取应用实例
import WxSearch from '../../utils/wxSearch'
var app = getApp()
Page({
  data: {
  },
  onLoad () {
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that,43,['weappdev','小程序','wxParse','wxSearch','wxNotification']);
    WxSearch.initMindKeys(['北京城市学院体育馆','国家体育馆','微信开发','微信小程序']);
  },
  wxSearchFn(e){
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    
  },
  wxSearchInput(e){
    var that = this
    WxSearch.wxSearchInput(e,that);
  },
  wxSerchFocus(e){
    var that = this
    WxSearch.wxSearchFocus(e,that);
  },
  wxSearchBlur(e){
    var that = this
    WxSearch.wxSearchBlur(e,that);
  },
  wxSearchKeyTap(e){
    var that = this
    WxSearch.wxSearchKeyTap(e,that);
  },
  wxSearchDeleteKey(e){
    var that = this
    WxSearch.wxSearchDeleteKey(e,that);
  },
  wxSearchDeleteAll(e){
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap(e){
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})
