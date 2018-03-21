import GoodList from '@/components/Good/GoodList'
import GoodAll from '@/components/Good/GoodAll'
import Category from '@/components/Good/Category'

export default {
  path: '/good',
  component: GoodList,
  children: [
    {
      path: '',
      name: 'GoodIndex',
      redirect: {
        name: 'GoodAll'
      }
    },
    {
      path: 'all',
      name: 'GoodAll',
      component: GoodAll
    },
    {
      path: 'category/:category',
      name: 'Category',
      component: Category
    }
  ]
}
