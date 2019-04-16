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
        title: '中规中矩的一次U5装机体验',
        date: '2019-04-12 05:34:00',
        pic: 'https://2e.zol-img.com.cn/product/197_640x2000/906/ceRVnUGwNLass.jpg',
        content: '中规中矩的一次U5装机体验',
        source: 'ZOL在线'
      }, {
        id: '2',
        title: '从cherry轴聊起 Vortexgear Type Q体验评测',
        date: '2019-04-12 05:34:00',
        pic: 'https://2e.zol-img.com.cn/product/197_640x2000/906/ceRVnUGwNLass.jpg',
        content: ' Vortexgear，这是一个来自台湾的品牌，起初是在键盘客制化圈发烧友们才会知道的品牌。而在2018年，Vortexgear正式进入大陆市场，其生产的键盘均采用PBT键帽，用料非常厚道。而今天，我们要体验的是Vortexgear出品的Type Q机械键盘，那么我们就来好好体验一下吧！',
        source: 'ZOL在线'
      }, {
        id: '3',
        title: '从cherry轴聊起 Vortexgear Type Q体验评测',
        date: '2019-04-12 05:34:00',
        pic: 'https://2e.zol-img.com.cn/product/197_640x2000/906/ceRVnUGwNLass.jpg',
        content: ' Vortexgear，这是一个来自台湾的品牌，起初是在键盘客制化圈发烧友们才会知道的品牌。而在2018年，Vortexgear正式进入大陆市场，其生产的键盘均采用PBT键帽，用料非常厚道。而今天，我们要体验的是Vortexgear出品的Type Q机械键盘，那么我们就来好好体验一下吧！',
        source: 'ZOL在线'
      }
    ],
  }
})