import InfoList from '@/components/User/InfoList'
import UserInfo from '@/components/User/UserInfo'
import UserOrder from '@/components/User/UserOrder'

export default {
  path: '/user',
  component: InfoList,
  children: [
    {
      path: '',
      name: 'UserIndex',
      redirect: {
        name: 'UserInfo'
      }
    },
    {
      path: 'info',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: 'order',
      name: 'UserOrder',
      component: UserOrder
    }
  ]
}
