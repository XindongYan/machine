const app = getApp();

Page({
  data: {
    desc: {

    }
  },

  /**
   * 
   * @param {*} options 
   */
  onLoad: function (options) {

    if (app.globalData.news) {
      app.globalData.news.find((e) => {
        if (e.id === options.id) {
          this.setData({
            desc: e
          });
        };
      });
    };
    
  },
})