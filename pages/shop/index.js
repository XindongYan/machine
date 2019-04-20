
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

    index: 0,
    num: 0,
    goods: [],
    totalPrice: 0,
    buttonAdd: -1,
    selectGoods: [],
    text: '请去“配件”选择商品'
  },

  onShow(param) {
    try {
      const value = wx.getStorageSync('collect')
      if (value) {
        let data = [];
        for (const v of value) {
          data[v.id] = v;
        };

        let price = 0;
        for (const g of value) {
          price += Number(g.price);
        };

        this.setData({
          totalPrice: price,
          selectGoods: data
        });
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
    console.log('onLoad');
    this.setData({
      // config: this.data.conts[0]
    });
  }
})
