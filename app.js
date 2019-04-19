//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 全局数据
  globalData: {
    userInfo: null,
    news: [
      {
        id: '1',
        title: '2700X还是8700K？A/I之争是时候做个了结了',
        date: '2019-04-12 05:34:00',
        pic: 'https://article-fd.zol-img.com.cn/t_s640x2000/g5/M00/01/09/ChMkJ1tzwPSIE3BUAAHFA51srN4AAq2zQGRqr0AAcUb886.jpg',
        source: 'ZOL-中关村在线'
      }, {
        id: '2',
        title: '把钱花到刀刃上 ——根据需求正确DIY',
        date: '2019-04-12 05:34:00',
        pic: 'http://upload.cfan.com.cn/2017/0210/1486693506629.jpg',
        source: '电脑爱好者'
      }, {
        id: '3',
        title: '装机必备——常用UWP推荐',
        date: '2019-04-21 15:12:01',
        pic: 'http://upload.cfan.com.cn/2017/0103/1483428648439.png',
        source: 'ZOL-中关村在线'
      }
    ],
  }
})