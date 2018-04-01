var GoodList = [
  {
    name: '从零开始的异世界生活7',
    author: '长月达平',
    price: 2800,
    id: 0,
    stock: 10,
    year: 1949
  },
  {
    name: '打工吧！魔王大人',
    author: '和原聪司',
    price: 1300,
    id: 1,
    stock: 100,
    year: 1999
  },
  {
    name: '刀剑神域13',
    author: '川原砾',
    price: 2999,
    id: 2,
    stock: 5,
    year: 1943
  },
  {
    name: '刀剑神域17',
    author: '川原砾',
    price: 400,
    id: 3,
    stock: 200,
    year: 8102
  },
  {
    name: '刀剑神域19',
    author: '川原砾',
    price: 100,
    id: 4,
    stock: 0,
    year: 1998
  },
  {
    name: '刀剑神域进击篇4',
    author: '川原砾',
    price: 4300,
    id: 5,
    stock: 100,
    year: 2000
  },
  {
    name: '你的名字',
    author: '新海诚',
    price: 6600,
    id: 6,
    stock: 40,
    year: 2003
  },
  {
    name: '我的青春恋爱物语果然有问题',
    author: '渡航',
    price: 499,
    id: 7,
    stock: 0,
    year: 2010
  }
]
var UserList = [
  {
    id: 0,
    name: '宋逸凡',
    phone: '88888888888',
    pwd: 'a12345678',
    buy: [],
    email: ''
  },
  {
    id: 1,
    name: 'newuser',
    phone: '',
    pwd: '123',
    buy: [{ id: 0, amount: 1 }, { id: 1, amount: 1 }, { id: 2, amount: 1 }],
    email: ''
  }
]
var LoginId = ''
export default {
  GoodList, UserList, LoginId
}
