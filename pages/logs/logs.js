//logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    logs: [],
    config: '',
    template: [
      {
        id: '0',
        name: 'CPU',
        good: ''
      }, {
        id: '1',
        name: '主板',
        good: ''
      }, {
        id: '2',
        name: '内存',
        good: ''
      }, {
        id: '3',
        name: '硬盘',
        good: ''
      }, {
        id: '4',
        name: '固态',
        good: ''
      }, {
        id: '5',
        name: '显卡',
        good: ''
      }, {
        id: '6',
        name: '显示',
        good: ''
      }, {
        id: '7',
        name: '机箱',
        good: ''
      }, {
        id: '8',
        name: '电源',
        good: ''
      }, {
        id: '9',
        name: '散热',
        good: ''
      }, {
        id: '10',
        name: '鼠标',
        good: ''
      }, {
        id: '11',
        name: '键盘',
        good: ''
      }
    ],
    acces: ['CPU', '主板', '内存', '硬盘', '固态硬盘', '显卡', '显示器', '机箱', '电源', '散热器', '鼠标', '键盘'],
    goods1: {},

    rightIndex: 0,
    goodIndex: 0,
    num: 0,
    goods: [],
  },

  switchRightTab(param) {
    console.log(this.data.acces[param.currentTarget.dataset.index]);
    wx.request({
      url: 'https://www.xiamitt.xyz/api/getGoods',
      method: 'GET',
      data: {
        type: this.data.acces[param.currentTarget.dataset.index]
      },
      success: (res) => {
        console.log(res)
        this.setData({
          goods: res.data,
          goodIndex: param.currentTarget.dataset.id,
          rightIndex: param.currentTarget.dataset.index,
        })
      }
    })
    // this.setData({
    //   goods: this.data.goods1[param.currentTarget.dataset.id],
    //   goodIndex: param.currentTarget.dataset.id,
    //   rightIndex: param.currentTarget.dataset.index,
    // })
  },

  goodDetail(param) {
    console.log(param);
    wx.navigateTo({
      url: `../read/index?select=${JSON.stringify(param.currentTarget.dataset.desc)}&id=${this.data.goodIndex}`
    })
  },

  onLoad: function () {
    wx.request({
      url: 'https://www.xiamitt.xyz/api/getGoods',
      method: 'GET',
      data: {
        type: 'CPU'
      },
      success: (res) => {
        console.log(res)
        this.setData({
          goods: res.data
        })
      }
    })
    // this.setData({
    //   goods: this.data.goods1[this.data.goodIndex]
    // });
  }
})
