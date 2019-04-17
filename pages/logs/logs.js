//logs.js
const util = require('../../utils/util.js');

Page({
  data: {
    logs: [],
    config: '',
    acces: ['CPU', 'GPU', '主板', 'SSD', '内存', '硬盘', '机箱', '电源', '散热'],
    conts: {
      '0': [
        {
          name: 'AMD R5 2600',
          price: 1099
        }, {
          name: 'Intel 酷睿i5 9400F',
          price: 1399
        }, {
          name: 'AMD Ryzen 7 2700',
          price: 1899
        }, {
          name: 'Intel 酷睿i7 8700',
          price: 2499
        }, {
          name: 'Intel 酷睿i7 9700K',
          price: 3299
        }
      ],
      '1': [
        {
          name: '影驰GeForce GTX 1050Ti大将',
          price: 1000
        }, {
          name: '七彩虹iGame GeForce GTX 1660 Ultra 6G',
          price: 1790
        }, {
          name: '七彩虹iGame GeForce GTX 1660 Ti Ultra 6G',
          price: 2199
        }, {
          name: '七彩虹iGame GeForce RTX 2060 Ultra OC',
          price: 3099
        }, {
          name: '影驰GeForce RTX 2070',
          price: 3999
        }, {
          name: '影驰GeForce RTX 2080 GAMER',
          price: 6299
        }
      ],
      '2': [
        {
          name: '华擎A320M-HDV',
          price: 329
        }, {
          name: '影驰B360M-M.2',
          price: 399
        }, {
          name: '影驰B360M-M.2',
          price: 399
        }, {
          name: '微星B360 GAMING PLUS',
          price: 799
        }
      ],
      '3': [
        {
          name: '金士顿A400（120GB）',
          price: 150
        }, {
          name: '影驰铁甲战将（240GB）',
          price: 279
        }, {
          name: '金士顿A400（480GB）',
          price: 389
        }
      ],
      '4': [
        {
          name: '影驰GAMER 8GB DDR4 2400',
          price: 299
        }, {
          name: '金士顿4GB DDR3 1600 ×2',
          price: 358
        }, {
          name: '影驰GAMER 8GB DDR4 2400 ×2',
          price: 498
        }, {
          name: '海盗船复仇者LPX 8GB DDR4 3000',
          price: 698
        }
      ],
      '5': [
        {
          name: '希捷Barracuda 1TB 7200转 64MB 单碟',
          price: 299
        }, {
          name: '西部数据1TB 7200转 64MB SATA3 蓝盘',
          price: 329
        }
      ],

      '6': [
        {
          name: '鑫谷光韵6mini',
          price: 199
        }, {
          name: 'Tt 启航者S3',
          price: 139
        }, {
          name: '鑫谷光锐plus',
          price: 189
        }, {
          name: 'Tt（Thermaltake）启航者L20',
          price: 359
        }
      ],
      '7': [
        {
          name: '鑫谷核动力 超级战舰 S7',
          price: 159
        }, {
          name: '长城HOPE-6000DS',
          price: 269
        }, {
          name: '航嘉WD600K',
          price: 399
        }
      ],
      '8': [
        {
          name: '超频三东海X4',
          price: 74
        }, {
          name: '超频三东海X6',
          price: 119
        }, {
          name: '九州风神大霜塔',
          price: 219
        }, {
          name: '酷冷至尊海魔120（RL-S12V-20PB-R1）',
          price: 239
        }, {
          name: '鑫谷冰酷240RGB智领版',
          price: 499
        }
      ],
    },

    index: 0,
    num: 0,
    goods: [],
    totalPrice: 0
  },

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value,
      config: this.data.conts[e.detail.value]
    })
  },

  list(param) {
    console.log(param);
    wx.navigateTo({
      url: `../read/index?goods=${JSON.stringify(param.currentTarget.dataset)}`
    })
  },

  add(param) {
    this.data.goods.push(
      {
        name: param.currentTarget.dataset.name,
        price: param.currentTarget.dataset.price
      }
    );

    let price = 0;
    for (const g of this.data.goods) {
      price += Number(g.price);
    }

    this.setData({
      goods: this.data.goods,
      totalPrice: price
    })
  },

  onLoad: function () {
    this.setData({
      config: this.data.conts[0]
    });
  }
})
