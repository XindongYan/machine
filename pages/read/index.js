const app = getApp();

Page({
  data: {
    desc: {},
    content: {
      '1': `<div>Hello World</div>`
    },

    text: '',
    state: 'index',
  },

  /**
   * 
   * @param {*} options 
   */
  onLoad: function (options) {

    if (options && options.desc) {
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