var GoodList = [
  {
    name: '三星 Galaxy TabPro S 平板电脑 12英寸',
    author: '三星',
    price: 2800,
    category: 1,
    id: 0,
    userid: 1,
    year: 1949,
    status: 0 // 0表示在售，1表示已售出
  },
  {
    name: '捷安特 ocr3300 自行车',
    author: '捷安特',
    price: 1300,
    category: 2,
    id: 1,
    userid: 1,
    year: 1999,
    status: 0
  },
  {
    name: '适马85 1.4佳能镜头',
    author: '佳能',
    price: 2999,
    category: 6,
    id: 2,
    userid: 1,
    year: 1943,
    status: 0
  },
  {
    name: 'promade滑板',
    author: 'promade',
    price: 400,
    category: 7,
    id: 3,
    userid: 1,
    year: 8102,
    status: 0
  },
  {
    name: 'Swell木纹保温杯',
    author: 'Swell',
    price: 100,
    category: 3,
    id: 4,
    userid: 1,
    year: 1998,
    status: 0
  },
  {
    name: '天龙D7200国行旗舰头戴式大耳机',
    author: '天龙',
    price: 4300,
    category: 10,
    id: 5,
    userid: 1,
    year: 2000,
    status: 0
  },
  {
    name: 'qdc8 hifi公模耳机',
    author: 'qdc8',
    price: 6600,
    category: 10,
    id: 6,
    userid: 1,
    year: 2003,
    status: 1,
    to: 0
  },
  {
    name: '希捷3T 3.5英寸硬盘',
    author: '希捷',
    price: 499,
    category: 1,
    id: 7,
    userid: 0,
    year: 2010,
    status: 1,
    to: 1
  }
]
var MessageList = [
  {
    userid: 0,
    goodid: 0,
    status: 0 // 0表示未读，1表示已读
  },
  {
    userid: 0,
    goodid: 1,
    status: 0
  }
]
var UserList = [
  {
    id: 0,
    name: '宋逸凡',
    contact: 'QQ888888888',
    pwd: 'a12345678',
    star: []
  },
  {
    id: 1,
    name: 'newuser',
    contact: '',
    pwd: '123',
    star: []
  }
]
var LoginId = ''
var CommentList = [
  {
    userid: 0,
    content: '东西不错，先收藏一下。',
    goodid: 0
  },
  {
    userid: 0,
    content: '价格高了点',
    goodid: 1
  },
  {
    userid: 0,
    content: '原价多少入的？',
    goodid: 2
  },
  {
    userid: 0,
    content: '用了多久了？',
    goodid: 3
  },
  {
    userid: 0,
    content: '是正品吗？',
    goodid: 4
  },
  {
    userid: 0,
    content: '可以再便宜点吗？',
    goodid: 5
  }
]
var EvalList = [
  {
    belong: 1,
    to: 0,
    goodid: 7,
    level: 5,
    content: ''
  },
  {
    belong: 0,
    to: 1,
    goodid: 7,
    level: 5,
    content: ''
  }
]
var CategoryList = [
  {
    name: '电子产品',
    id: 1
  },
  {
    name: '交通工具',
    id: 2
  },
  {
    name: '生活用品',
    id: 3
  },
  {
    name: '学习用品',
    id: 4
  },
  {
    name: '动漫/周边',
    id: 5
  },
  {
    name: '玩具/乐器',
    id: 6
  },
  {
    name: '运动户外',
    id: 7
  },
  {
    name: '演出门票',
    id: 8
  },
  {
    name: '衣物鞋帽',
    id: 9
  },
  {
    name: '其他',
    id: 10
  }
]
export default {
  GoodList, MessageList, UserList, LoginId, CommentList, EvalList, CategoryList
}
