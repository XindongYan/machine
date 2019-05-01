const app = getApp();

Page({
  data: {
    desc: {},
    content: {
    },

    text: '',
    state: 'index',
    goodsIndex: 0,
    newIndex: 0,
    addCollect: true,
    addLike: true,
    objs: {}
  },

  add_collect(param) {
    if (this.data.addCollect) {
      let value = wx.getStorageSync('collect');
      if (value) {
        let list = void 0;
        list = value.find((e) => {
          if (e.id === param.currentTarget.dataset.desc.id) {
            return e.id;
          }
        });

        if (list) {
          value.find((e, index) => {
            if (e.id == list.id) {
              value[index] = param.currentTarget.dataset.desc
            }
          })
        } else {
          value.push(param.currentTarget.dataset.desc);
        };
      } else {
        value = [param.currentTarget.dataset.desc]
      };

      try {
        wx.setStorageSync('collect', value);
        this.setData({
          addCollect: false
        });
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1000
        });
      } catch (error) {
        wx.showToast({
          title: '保存失败',
          icon: 'error',
          duration: 1000
        })
      }
    } else {
      try {
        let value = wx.getStorageSync('collect');
        value.find((e, index) => {
          if (e.name === param.currentTarget.dataset.desc.name) {
            value.splice(index, 1);

            try {
              wx.setStorageSync('collect', value);
              this.setData({
                addCollect: true
              });
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 1000
              });
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
    }
  },

  add_like(param) {
    if (this.data.addLike) {
      try {
        let value = wx.getStorageSync('like');
        if (value) {
          value.push(param.currentTarget.dataset.desc);
        } else {
          value = [param.currentTarget.dataset.desc];
        }
        wx.setStorageSync('like', value);
        this.setData({
          addLike: false
        });
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1000
        });
      } catch (e) {
        wx.showToast({
          title: '读取错误',
          icon: 'error',
          duration: 1000
        });
      };
    } else {
      try {
        const value = wx.getStorageSync('like');
        let par = Object.assign({}, param.currentTarget.dataset.desc);
        value.find((e, index) => {
          if (e.name === (par && par.name)) {
            value.splice(index, 1);

            try {
              wx.setStorageSync('like', value);
              this.setData({
                addLike: true
              });
              wx.showToast({
                title: '取消成功',
                icon: 'success',
                duration: 1000
              });
            } catch (error) {
              throw error
            }
          }
        });

      } catch (error) {
        console.log(error);
        wx.showToast({
          title: '',
          icon: 'error',
          duration: 1000
        });
      };
    }

  },

  selectGood(param) {
    let currentPages = getCurrentPages();
    let prevPage = currentPages[currentPages.length - 2]; // 上一页信息
    let goods = [];

    // goods = [{'0': {}}]
    prevPage.data.selectGoods[this.data.goodsIndex] = param.currentTarget.dataset.msg

    prevPage.setData({
      selectGoods: prevPage.data.selectGoods
    });

    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 
   * @param {*} options 
   */
  onLoad: function (options) {

    if (options && options.text) {

      var formatTime = function (date) {
        var date = new Date(date);
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()

        return [year, month, day].join('-')
      }
      wx.request({
        url: 'https://www.xiamitt.xyz/api/query',
        method: 'GET',
        data: {
          id: options.text
        },
        success: (res) => {
          res.data.content.updatedAt = formatTime(res.data.content.updatedAt);
          this.setData({
            state: 'index',
            desc: res.data.content
          });
        }
      });
    } else if (options && options.desc) {
      console.log(options.desc);
      this.setData({
        state: 'desc',
        text: JSON.parse(options.desc)
      })
    } else if (options && options.goods) {
      this.setData({
        state: 'goods',
        text: JSON.parse(options.goods)
      })
    } else if (options && options.select) {
      console.log(options)
      let select = JSON.parse(options.select);
      try {
        const likeValue = wx.getStorageSync('like');
        const collectValue = wx.getStorageSync('collect');
        if (likeValue) {
          likeValue.find((e) => {
            if (e.name === select.name) {
              this.setData({
                addLike: false
              })
            }
          });
        };

        if (collectValue) {
          collectValue.find((e) => {
            if (e.name === select.name) {
              this.setData({
                addCollect: false
              })
            }
          });
        };
      } catch (e) {
        console.log('309', e);
        wx.showToast({
          title: '读取错误',
          icon: 'error',
          duration: 1000
        });
      };
      console.log(select);
      for (const s of select.params) {
        this.data.objs[s.lable] = s.value
      }
      this.setData({
        state: 'select',
        text: Object.assign({}, select, this.data.objs, { id: options.id }),
      })
    } else if (app.globalData.news) {
      app.globalData.news.find((e) => {
        console.log(options)
        if (e.id === options.id) {
          this.setData({
            desc: e,
            text: this.data.content['1'],
          });
        };
      });
    };

  },
})