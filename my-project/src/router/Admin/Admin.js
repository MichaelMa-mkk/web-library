import UserList from '@/components/Admin/UserList'
import Sale from '@/components/Admin/Sale'
import GoodView from '@/components/Admin/GoodView'
import GoodEdit from '@/components/Admin/GoodEdit'

export default [
  {
    path: '/admin',
    redirect: {
      name: 'UserList'
    }
  },
  {
    path: '/admin/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/admin/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/admin/book',
    name: 'GoodView',
    component: GoodView
  },
  {
    path: '/admin/book/edit/:id',
    name: 'GoodEdit',
    component: GoodEdit
  },
  {
    path: '/admin/book/add',
    name: 'GoodPublish',
    component: GoodEdit
  }
]
