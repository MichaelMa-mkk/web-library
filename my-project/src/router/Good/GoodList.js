import GoodList from '@/components/Good/GoodList'
import GoodAll from '@/components/Good/GoodAll'

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
    }
  ]
}
