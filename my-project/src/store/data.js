var GoodList = [
  {
    name: '从零开始的异世界生活7',
    author: '长月达平',
    abstract: '23333333333其实这是轻小说书店',
    price: 2800,
    id: 0,
    stock: 10,
    year: 1949
  },
  {
    name: '打工吧！魔王大人',
    author: '和原聪司',
    abstract: '23333333333其实这是轻小说书店',
    price: 1300,
    id: 1,
    stock: 100,
    year: 1999
  },
  {
    name: '刀剑神域13',
    author: '川原砾',
    abstract: '23333333333其实这是轻小说书店',
    price: 2999,
    id: 2,
    stock: 5,
    year: 1943
  },
  {
    name: '刀剑神域17',
    author: '川原砾',
    abstract: '23333333333其实这是轻小说书店',
    price: 400,
    id: 3,
    stock: 200,
    year: 8102
  },
  {
    name: '刀剑神域19',
    author: '川原砾',
    abstract: '23333333333其实这是轻小说书店',
    price: 100,
    id: 4,
    stock: 0,
    year: 1998
  },
  {
    name: '刀剑神域进击篇4',
    author: '川原砾',
    abstract: '23333333333其实这是轻小说书店',
    price: 4300,
    id: 5,
    stock: 100,
    year: 2000
  },
  {
    name: '你的名字',
    author: '新海诚',
    abstract: '23333333333其实这是轻小说书店',
    price: 6600,
    id: 6,
    stock: 40,
    year: 2003
  },
  {
    name: '我的青春恋爱物语果然有问题',
    author: '渡航',
    abstract: '23333333333其实这是轻小说书店',
    price: 499,
    id: 7,
    stock: 0,
    year: 2010
  }
]
var UserList = [
  {
    id: 0,
    name: 'newuser',
    phone: '98723398700',
    pwd: '123a',
    buy: [{ id: 0, amount: 1 }, { id: 1, amount: 1 }, { id: 2, amount: 1 }],
    email: '123@mk.com',
    icon: ''
  }
]
var LoginId = ''
var OrderList = [
  {
    id: 0,
    userid: 0,
    buy: [{ id: 0, amount: 1 }, { id: 1, amount: 1 }, { id: 2, amount: 1 }],
    time: new Date()
  },
  {
    id: 1,
    userid: 0,
    buy: [{ id: 4, amount: 1 }, { id: 3, amount: 1 }, { id: 6, amount: 1 }],
    time: new Date()
  }
]
export default {
  GoodList, UserList, LoginId, OrderList
}
