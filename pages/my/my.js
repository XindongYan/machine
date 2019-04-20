//index.js
//获取应用实例
const app = getApp();

// state
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    modalHidden: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    local: []
  },

  remove(param) {
    try {
      const value = wx.getStorageSync('like');
      value.find((e, index) => {
        if (e.name === param.currentTarget.dataset.desc.name) {
          value.splice(index, 1);
          try {
            wx.setStorageSync('like', value);
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1000
            });
            this.setData({
              local: value
            })
          } catch (error) {
            throw error
          }
        }
      });

    } catch (error) {
      wx.showToast({
        title: '',
        icon: 'error',
        duration: 1000
      })
    }
  },

  onShow() {
    try {
      const value = wx.getStorageSync('like')
      if (value) {
        console.log(value);
        this.setData({
          local: value
        })
        // Do something with return value
      }
    } catch (e) {
      wx.showToast({
        title: '读取错误',
        icon: 'error',
        duration: 1000
      })
    }
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };

    if (app.globalData.news) {
      this.setData({
        news: app.globalData.news
      })
    };
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
