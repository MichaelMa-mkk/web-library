import Detail from '@/components/Good/Detail'
import Publish from '@/components/Good/GoodPublish'
import Edit from '@/components/Good/GoodEdit'

export default [
  {
    path: '/good/detail/:id',
    name: 'GoodDetail',
    component: Detail
  },
  {
    path: '/good/publish',
    name: 'GoodPublish',
    component: Publish
  },
  {
    path: '/good/edit/:id',
    name: 'GoodEdit',
    component: Edit
  }
]
