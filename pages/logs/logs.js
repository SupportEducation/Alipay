//logs.js
import util from '../../utils/util.js'

Page({
  data: {
    logs: []
  },
  onLoad () {
    this.setData({
      logs: (my.getStorageSync({key:'logs'}) || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
