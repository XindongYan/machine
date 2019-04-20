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
    acces: ['CPU', 'GPU', '主板', 'SSD', '内存', '硬盘', '机箱', '电源', '散热'],
    goods1: {
      '0': [
        {
          name: 'Intel 酷睿i5 9400F',
          price: 1389,
          slot: 'LGA 1151',
          frequency: '2.9GHz',
          frequency1: '4.1GHz',
          threeCache: '9MB',
          inside: '六核心 六线程',
          src: 'https://2f.zol-img.com.cn/product/196_120x90/687/ceXUbURc8l4SA.jpg'
        }, {
          name: 'AMD Ryzen5 2600',
          price: 1299,
          slot: 'LGA 1151',
          frequency: '3.2GHz',
          frequency1: '4.6GHz',
          threeCache: '12MB',
          inside: '六核心 十二线程',
          src: 'https://2f.zol-img.com.cn/product/190_120x90/513/ceBBflX8kQGEQ.jpg'
        }, {
          name: 'Intel 酷睿i7 8700',
          price: 2499,
          slot: 'LGA 1151',
          frequency: '3.7GHz',
          frequency1: '4.7GHz',
          threeCache: '12MB',
          inside: '六核心 十二线程',
          src: 'https://2a.zol-img.com.cn/product/190_120x90/92/cegLNFzxyCZLQ.jpg'
        }
      ],
      '1': [
        {
          name: '微星B450M MORTAR',
          price: 799,
          chipset: 'Intel B360',
          slot: 'LGA 1151',
          motherboard: 'Micro ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '4×DDR4 DIMM ',
          src: 'https://2b.zol-img.com.cn/product/192_120x90/751/cet99ESIx8cE.jpg'
        }, {
          name: '华硕TUF B360M-PLUS GAMING S',
          price: 629,
          chipset: 'Intel B360',
          slot: 'LGA 1151',
          motherboard: 'Micro ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '4×DDR4 DIMM ',
          src: 'https://2a.zol-img.com.cn/product/191_120x90/174/celVra79B2.jpg'
        }, {
          name: '七彩虹iGame Z390 Vulcan X',
          price: 1599,
          chipset: 'Intel Z390',
          slot: 'LGA 1151',
          motherboard: 'ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '4×DDR4 DIMM ',
          src: 'https://2c.zol-img.com.cn/product/194_120x90/700/ce5EQCOz0kzt6.jpg'
        }, {
          name: '技嘉Z390 AORUS MASTER',
          price: 3099,
          chipset: 'Intel Z390',
          slot: 'LGA 1151',
          motherboard: 'ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '4×DDR4 DIMM ',
          src: 'https://2e.zol-img.com.cn/product/193_120x90/372/ceKcVxT6onOY.jpg'
        }, {
          name: '铭瑄 MS-挑战者 B360M',
          price: 379,
          chipset: 'Intel B360',
          slot: 'LGA 1151',
          motherboard: 'Micro ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '2×DDR4 DIMM ',
          src: 'https://2f.zol-img.com.cn/product/190_120x90/579/cearbn0XfeTJg.jpg'
        }, {
          name: '华擎A320M-HDV',
          price: 399,
          chipset: 'AMD A320',
          slot: 'Socket AM4 ',
          motherboard: 'Micro ATX板型',
          integratedChip: '声卡/网卡 ',
          ramType: '2×DDR4 DIMM ',
          src: 'https://2b.zol-img.com.cn/product/184_120x90/547/cewpEWnAdjwc.jpg'
        }
      ],
      '2': [
        {
          name: '影驰GAMER 8GB DDR4 2400',
          price: 289,
          capacity: '8GB',
          desc: '单条（8GB）',
          type: 'DDR4',
          ramfrequency: '2400MHz',
          voltage: '1.2V',
          src: 'https://2f.zol-img.com.cn/product/173_120x90/791/ceZMhVCgEfffk.jpg'
        }, {
          name: '海盗船复仇者LPX 8GB DDR4 3000',
          price: 349,
          capacity: '8GB',
          desc: '单条（8GB）',
          type: 'DDR4',
          ramfrequency: '3000MHz',
          voltage: '1.35V',
          src: 'https://2b.zol-img.com.cn/product/180_120x90/407/cea8g1AWP4LIg.jpg'
        }, {
          name: '金士顿HyperX Savage 8GB DDR4 2400',
          price: 389,
          capacity: '8GB',
          desc: '单条（8GB）',
          type: 'DDR4',
          ramfrequency: '2400MHz',
          voltage: '1.2V',
          src: 'https://2d.zol-img.com.cn/product/166_120x90/775/ceRWLxM2PrHsw.jpg'
        }, {
          name: '金士顿骇客神条FURY 8GB DDR4 2400',
          price: 309,
          capacity: '8GB',
          desc: '单条（8GB）',
          type: 'DDR4',
          ramfrequency: '2400MHz',
          voltage: '1.2V',
          src: 'https://2f.zol-img.com.cn/product/174_120x90/705/ce8gWMIGXgyhM.jpg'
        }
      ],
      '3': [
        {
          name: '希捷Barracuda 1TB 7200转 64MB 单碟',
          price: 299,
          hardDriveCapacity: '1000GB',
          interfaceType: 'SATA3.0',
          rotatingSpeed: '7200rpm',
          cache: '64MB',
          size: '3.5英寸',
          src: 'https://2f.zol-img.com.cn/product/109_120x90/197/cegporVtoCK.jpg'
        }, {
          name: '西部数据500GB 7200转 16MB SATA3 蓝盘',
          price: 270,
          hardDriveCapacity: '500GB',
          interfaceType: 'SATA3.0',
          rotatingSpeed: '7200rpm',
          cache: '16MB',
          size: '3.5英寸',
          src: 'https://2f.zol-img.com.cn/product/58_120x90/667/ceaCtpuUXk3SU.jpg'
        }, {
          name: '西部数据1TB 7200转 64MB SATA3 蓝盘',
          price: 299,
          hardDriveCapacity: '1000GB',
          interfaceType: 'SATA3.0',
          rotatingSpeed: '7200rpm',
          cache: '64MB',
          size: '3.5英寸',
          src: 'https://2f.zol-img.com.cn/product/179_120x90/315/cehtFC1qwwkE.jpg'
        }, {
          name: 'HGST 7K1000 1TB 7200转 32MB SATA3',
          price: 449,
          hardDriveCapacity: '1000GB',
          interfaceType: 'SATA3.0',
          rotatingSpeed: '7200rpm',
          cache: '32MB',
          size: '2.5英寸',
          src: 'https://2d.zol-img.com.cn/product/112_120x90/895/ceCvMIElc30o.jpg'
        }, {
          name: '东芝1TB 7200转 32MB',
          price: 269,
          hardDriveCapacity: '1000GB',
          interfaceType: 'SATA3.0',
          rotatingSpeed: '7200rpm',
          cache: '32MB',
          size: '3.5英寸',
          src: 'https://2c.zol-img.com.cn/product/108_120x90/96/ceE5L2Dt7zrNE.jpg'
        }
      ],
      '4': [
        {
          name: '三星970 EVO NVMe M.2（250GB）',
          price: 479,
          ramCapacity: '250GB',
          ramInterfaceType: 'M.2 PCIe接口',
          readSpeed: '3400MB/s',
          ramSize: 'M.2-2280',
          cache: '520MB',
          src: 'https://2a.zol-img.com.cn/product/190_120x90/130/cesZc5Vw3Rlg.jpg'
        }, {
          name: '金士顿A400（240GB',
          price: 225,
          ramCapacity: '240GB',
          ramInterfaceType: 'STAT3',
          readSpeed: '500MB/s',
          ramSize: '2.5英寸',
          cache: '',
          src: 'https://2a.zol-img.com.cn/product/181_120x90/260/ceZgNa1OjZfRE.jpg'
        }, {
          name: 'Intel 545S（256GB）',
          price: 245,
          ramCapacity: '256GB',
          ramInterfaceType: 'STAT3',
          readSpeed: '550MB/s',
          ramSize: '2.5英寸',
          cache: '',
          architecture: 'TLC三层单',
          src: 'https://2a.zol-img.com.cn/product/185_120x90/582/ceXkjK6EaTi.jpg'
        }, {
          name: '西部数据Black SN750 NVMe（1TB）',
          price: 1399,
          ramCapacity: '1TB',
          ramInterfaceType: 'M.2',
          readSpeed: '3470MB/s',
          ramSize: '2.5英寸',
          cache: '',
          architecture: 'TLC三层单',
          src: 'https://2d.zol-img.com.cn/product/196_120x90/475/cekOVoOowuNp6.jpg'
        }, {
          name: '英睿达MX500 SATA（250GB）',
          price: 389,
          ramCapacity: '250GB',
          ramInterfaceType: 'STAT3',
          readSpeed: '560MB/s',
          ramSize: '2.5英寸',
          cache: '',
          src: 'https://2a.zol-img.com.cn/product/192_120x90/324/ceDGZAazOWNJo.jpg'
        }
      ],
      '5': [
        {
          name: '迪兰RX 580 2048SP 4G X-Serial 战将',
          price: 1349,
          vendor: 'AMD',
          gpuChip: 'Radeon RX 580',
          capacity: '4GB GDDR5',
          bit: '256bit',
          io: 'HDMI',
          src: 'https://2b.zol-img.com.cn/product/193_120x90/469/ceQ9PU6e1pf.jpg'
        }, {
          name: 'NVIDIA GeForce RTX 2080Ti Founders Edition',
          price: 9999,
          vendor: 'NVIDIA',
          gpuChip: 'GeForce RTX 1050',
          capacity: '11GB GDDR6',
          bit: '352bit',
          io: 'HDMI',
          src: 'https://2d.zol-img.com.cn/product/192_120x90/743/ceDQbzkyWEoA.jpg'
        }, {
          name: '影驰GeForce GTX 1050Ti大将',
          price: 1099,
          vendor: 'NVIDIA',
          gpuChip: 'GeForce RTX 1050',
          capacity: '4GB GDDR5',
          bit: '128bit',
          io: 'HDMI',
          src: 'https://2c.zol-img.com.cn/product/178_120x90/816/ce78Cz55X5vQE.jpg'
        }, {
          name: '七彩虹iGame GeForce RTX 2080 Ti Advanced',
          price: 9899,
          vendor: 'NVIDIA',
          gpuChip: 'GeForce RTX 2080',
          capacity: '11GB GDDR6',
          bit: '352bit',
          io: 'HDMI',
          src: 'https://2d.zol-img.com.cn/product/192_120x90/461/ce6ElKKfHpLuU.jpg'
        }, {
          name: '技嘉GTX 1660 GAMING OC 6G',
          price: 1899,
          vendor: 'NVIDIA',
          gpuChip: 'GeForce RTX 1660',
          capacity: '6GB GDDR5',
          bit: '192bit',
          io: 'HDMI',
          src: 'https://2c.zol-img.com.cn/product/196_120x90/276/ce4AU9T8QOp9g.jpg'
        }, {
          name: '蓝宝石RX 590 8G D5 超白金 OC',
          price: 1799,
          vendor: 'AMD',
          gpuChip: 'Radeon RX 590',
          capacity: '8GB GDDR5',
          bit: '256bit',
          io: 'HDMI',
          src: 'https://2f.zol-img.com.cn/product/196_120x90/169/ceoukTiRj14F6.jpg'
        }, {
          name: '微星GeForce GTX 1060 GAMING X 6G',
          price: 2099,
          vendor: 'NVIDIA',
          gpuChip: 'GeForce RTX 1060',
          capacity: '6GB GDDR5',
          bit: '192bit',
          io: 'HDMI',
          src: 'https://2a.zol-img.com.cn/product/174_120x90/92/celkWRFkP9Ss.jpg'
        }
      ],

      '6': [
        {
          name: 'AOC AG273QCG',
          price: 5099,
          size: '27英寸',
          type: 'LED显示器，广视',
          displayType: 'TN',
          resolution: '2560x1440',
          backlight: 'LED背光',
          src: 'https://2b.zol-img.com.cn/product/193_120x90/633/cebXQGUZWeF2c.jpg'
        }, {
          name: '航嘉X2772CK',
          price: 1699,
          size: '27英寸',
          type: 'LED显示器，广视',
          displayType: 'VA',
          resolution: '2560x1440',
          backlight: 'LED背光',
          src: 'https://2e.zol-img.com.cn/product/188_120x90/632/ceWvFTvatjxo.jpg'
        }, {
          name: '明基BL2480T',
          price: 1299,
          size: '23.8英寸',
          type: 'LED显示器，广视',
          displayType: 'IPS',
          resolution: '1920x1080',
          backlight: 'LED背光',
          src: 'https://2f.zol-img.com.cn/product/192_120x90/23/ce7JjrcXp1i22.jpg'
        }, {
          name: '铁幕C43U',
          price: 2599,
          size: '43英寸',
          type: 'LED显示器，广视',
          displayType: 'MVA',
          resolution: '3840x2160',
          backlight: 'LED背光',
          src: 'https://2b.zol-img.com.cn/product/193_120x90/565/ceJB5AoOJt0mI.jpg'
        }, {
          name: '飞利浦325M7C',
          price: 2499,
          size: '31.5英寸',
          type: 'LED显示器，曲面视',
          displayType: 'VA',
          resolution: '2560x1440',
          backlight: 'LED背光',
          src: 'https://2a.zol-img.com.cn/product/197_120x90/748/cewhmijIhbrXg.jpg'
        }, {
          name: 'ANTGAMER ANT271Q',
          price: 3699,
          size: '27英寸',
          type: 'LED显示器，广视',
          displayType: 'VA',
          resolution: '2560x1440',
          backlight: 'LED背光',
          src: 'https://2e.zol-img.com.cn/product/193_120x90/264/ceJWJkiKpJTEw.jpg'
        }
      ],
      '7': [
        {
          name: '金河田峥嵘Z30',
          price: 429,
          boxtype: '台式机箱（全塔）',
          boxStructure: 'ATX',
          features: '背部理线',
          size: '2个',
          material: 'SPCC',
          src: 'https://2d.zol-img.com.cn/product/193_120x90/107/cekIdsOtlXNW.jpg'
        }, {
          name: '航嘉GX580H（白色）',
          price: 219,
          boxtype: '台式机箱（中塔）',
          boxStructure: 'ATX',
          features: '背部理线',
          size: '3个',
          material: '钢板机身',
          src: 'https://2c.zol-img.com.cn/product/196_120x90/854/cejEFRnVQpe02.jpg'
        }, {
          name: 'Tt 启航者F1',
          price: 169,
          boxtype: '台式机箱（mini）',
          boxStructure: 'MATX',
          features: '背部理线',
          size: '2个',
          material: 'SPCC',
          src: 'https://2f.zol-img.com.cn/product/185_120x90/323/ceAdl9fYkp6lk.jpg'
        }, {
          name: '爱国者月光宝盒 棱',
          price: 349,
          boxtype: '台式机箱（中塔）',
          boxStructure: 'ATX',
          features: '背部理线',
          size: '2个',
          material: 'SPCC',
          src: 'https://2b.zol-img.com.cn/product/193_120x90/847/ceEqKom9GH4Kg.jpg'
        }, {
          name: '鑫谷凡仕F1',
          price: 299,
          boxtype: '台式机箱（中塔）',
          boxStructure: 'ATX',
          features: '背部理线',
          size: '2个',
          material: '钢板材质',
          src: 'https://2f.zol-img.com.cn/product/189_120x90/861/ceLJh0aq0LG1E.jpg'
        }, {
          name: '酷冷至尊毁灭者RC-K100',
          price: 239,
          boxtype: '台式机箱（中塔）',
          boxStructure: 'MATX, TX',
          features: '背部理线',
          size: '7个',
          material: 'SPCC',
          src: 'https://2a.zol-img.com.cn/product/175_120x90/300/ceRMGtf7MWxo.jpg'
        }, {
          name: '航嘉MVP Apollo（阿波罗）',
          price: 599,
          boxtype: '台式机箱（中塔）',
          boxStructure: 'ATX',
          features: '背部理线',
          size: '2个',
          material: 'SPCC',
          src: 'https://2a.zol-img.com.cn/product/194_120x90/254/ceayRD7M26.jpg'
        }
      ],
      '8': [
        {
          name: '鑫谷GP600P白金版',
          price: 329,
          power: '500W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '白金牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2f.zol-img.com.cn/product/146_120x90/91/ceKsmgnYW1F76.jpg'
        }, {
          name: '航嘉WD600K',
          price: 399,
          power: '600W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '金牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2a.zol-img.com.cn/product/192_120x90/168/ceOYfcRhPL2sI.jpg'
        }, {
          name: '海盗船VS550',
          price: 299,
          power: '550W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '白金牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2b.zol-img.com.cn/product/130_120x90/161/ceFysdK71yvbo.jpg'
        }, {
          name: '长城HOPE-6000DS',
          price: 269,
          power: '500W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '银牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2e.zol-img.com.cn/product/114_120x90/36/ceJfUjrGFGsGg.jpg'
        }, {
          name: '酷冷至尊GX-400W（RS-400-ACAA）',
          price: 100,
          power: '400W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '铜牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2d.zol-img.com.cn/product/72_120x90/857/ceyOqdaOXZuTc.jpg'
        }, {
          name: '先马金牌750W',
          price: 488,
          power: '750W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '金牌',
          applicable: 'INTEL',
          src: 'https://2c.zol-img.com.cn/product/192_120x90/386/cea26LZiD3KrE.jpg'
        }, {
          name: '航嘉MVP K850',
          price: 899,
          power: '850W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '金牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2c.zol-img.com.cn/product/193_120x90/736/ce3iMbQ6Xp9.jpg'
        }, {
          name: '鑫谷GP600G黑金版',
          price: 289,
          power: '500W',
          PFC: '主动式',
          type: '台式机电源',
          puls: '金牌',
          applicable: '全面兼容INTEL与AMD',
          src: 'https://2c.zol-img.com.cn/product/122_120x90/94/cebgTzQttXPss.jpg'
        }
      ],
      '9': [
        {
          name: '超频三东海X6',
          price: 129,
          heatType: 'CPU散热器',
          heatMethod: '风冷，热管',
          applicable: '支持Intel LGA 775/115X/1151 AMD Socket 754/939/940/AM2/AM3/FM1/FM2',
          airVolume: '52.54±10%CFM',
          desc: '800-1800±10%RPM',
          src: 'https://2a.zol-img.com.cn/product/179_120x90/330/ceDV5RoBOuAEQ.png'
        }, {
          name: '九州风神玄冰400',
          price: 89,
          heatType: 'CPU散热器',
          heatMethod: '风冷，热管',
          applicable: '支持Intel LGA 775/115X/1151 AMD Socket 754/939/940/AM2/AM3/FM1/FM2',
          airVolume: '60.29CFM',
          desc: '900±150至1500±',
          src: 'https://2c.zol-img.com.cn/product/81_120x90/588/ce4KX4P09Jypk.jpg'
        }, {
          name: '酷冷至尊海魔120',
          price: 279,
          heatType: 'CPU散热器',
          heatMethod: '风冷，热管',
          applicable: '支持Intel LGA 775/115X/1151 AMD Socket 754/939/940/AM2/AM3/FM1/FM2',
          airVolume: '95CFM',
          desc: '800至2000±10%RP',
          src: 'https://2a.zol-img.com.cn/product/125_120x90/976/ce7opXwJIc7E.jpg'
        }, {
          name: '鑫谷冰酷240RGB智领版',
          price: 499,
          heatType: 'CPU散热器',
          heatMethod: '风冷，热管',
          applicable: 'AMD/Intel各平台',
          airVolume: '32.85CFM',
          desc: '1500±10%RPM',
          src: 'https://2e.zol-img.com.cn/product/192_120x90/130/ceKgST5j4POuE.jpg'
        }, {
          name: 'Tt 零度水冷装备',
          price: 2899,
          heatType: 'CPU散热器',
          heatMethod: '风冷，水冷',
          applicable: 'AMD/Intel各平台',
          airVolume: '50.44CFM',
          desc: '1200RPM',
          src: 'https://2b.zol-img.com.cn/product/147_120x90/585/ceuhMUFJp2zAs.jpg'
        }, {
          name: '海盗船H100i v2',
          price: 859,
          heatType: 'CPU散热器',
          heatMethod: '水冷',
          applicable: 'AMD/Intel各平台',
          airVolume: '70.69CFM',
          desc: '2435±10%RPM',
          src: 'https://2d.zol-img.com.cn/product/178_120x90/765/ce9m5cjXYLBQQ.jpg'
        }, {
          name: '超频三偃月RGB240水冷',
          price: 499,
          heatType: 'CPU散热器',
          heatMethod: '风冷，水冷',
          applicable: 'AMD/Intel各平台',
          airVolume: '54×3CFM ',
          desc: '800-1800±10%RPM',
          src: 'https://2c.zol-img.com.cn/product/194_120x90/944/ceT5nGdLqhFa6.jpg'
        }, {
          name: '九州风神大霜塔',
          price: 219,
          heatType: 'CPU散热器',
          heatMethod: '风冷，热管',
          applicable: 'AMD/Intel各平台',
          airVolume: '60.29CFM  ',
          desc: '900±150至1500±',
          src: 'https://2a.zol-img.com.cn/product/92_120x90/440/ce6GBxf7Hv6.jpg'
        }
      ],
      '10': [
        {
          name: '罗技G903无线鼠标',
          price: 999,
          applicable: '竞技游戏',
          connectionMethod: '有线，无线',
          mouseInterface: 'USB',
          work: '光电',
          size: '大鼠',
          src: 'https://2a.zol-img.com.cn/product/189_120x90/714/ceK6wce2yFcsk.jpg'
        }, {
          name: '罗技G502游戏鼠标',
          price: 329,
          applicable: '竞技游戏',
          connectionMethod: '有线',
          mouseInterface: 'USB',
          work: '光电',
          size: '大鼠',
          src: 'https://2e.zol-img.com.cn/product/134_120x90/708/cewE1eGL0rJk.jpg'
        }, {
          name: 'Razer 炼狱蝰蛇2013鼠标',
          price: 199,
          applicable: '竞技游戏',
          connectionMethod: '有线',
          mouseInterface: 'USB',
          work: '4G',
          size: '大鼠',
          src: 'https://2c.zol-img.com.cn/product/103_120x90/632/cefbBkqWAJGg.jpg'
        }, {
          name: '雷柏VT950电竞游戏鼠标',
          price: 329,
          applicable: '竞技游戏',
          connectionMethod: '有线，无线',
          mouseInterface: 'USB',
          work: '光电',
          size: '大鼠',
          src: 'https://2a.zol-img.com.cn/product/192_120x90/930/ceVWlrTXYnLQU.jpg'
        }
      ],
      '11': [
        {
          name: 'Alienware Advanced Gaming AW568机械键盘',
          price: 699,
          position: '机械键盘，游戏键盘',
          connectMethod: '有线',
          kbInterface: 'USB',
          button: '机械轴（茶轴）',
          backlight: '支持',
          src: 'https://2d.zol-img.com.cn/product/183_120x90/271/celEl8hYl9eos.jpg'
        }, {
          name: '达尔优机械合金版机械键盘（108键）',
          price: 159,
          position: '机械键盘，游戏键盘',
          connectMethod: '有线',
          kbInterface: 'USB',
          button: '机械轴（黑轴）',
          backlight: '支持',
          src: 'https://2d.zol-img.com.cn/product/148_120x90/757/cePVaebYJ5w3.jpg'
        }, {
          name: '罗技G610 Orion游戏机械键盘',
          price: 499,
          position: '机械键盘，游戏键盘',
          connectMethod: '有线',
          kbInterface: 'USB',
          button: '机械轴（红轴）',
          backlight: '支持',
          src: 'https://2c.zol-img.com.cn/product/172_120x90/594/ce9qGPfVO37s2.jpg'
        }, {
          name: '美商海盗船K83 WIRELESS无线娱乐键盘',
          price: 1299,
          position: '光轴机械键盘 ',
          connectMethod: '有线',
          kbInterface: 'USB',
          button: '机械轴（光轴）',
          backlight: '支持',
          src: 'https://2c.zol-img.com.cn/product/196_120x90/206/ceAjbvyE2cDgQ.jpg'
        }
      ],
    },

    rightIndex: 0,
    goodIndex: 0,
    num: 0,
    goods: [],
  },

  switchRightTab(param) {
    console.log(param);
    this.setData({
      goods: this.data.goods1[param.currentTarget.dataset.id],
      goodIndex: param.currentTarget.dataset.id,
      rightIndex: param.currentTarget.dataset.index,
    })
  },

  goodDetail(param) {
    console.log(param);
    wx.navigateTo({
      url: `../read/index?select=${JSON.stringify(param.currentTarget.dataset.desc)}&id=${this.data.goodIndex}`
    })
  },

  onLoad: function () {
    this.setData({
      goods: this.data.goods1[this.data.goodIndex]
    });
  }
})
