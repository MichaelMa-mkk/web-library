import InfoList from '@/components/User/InfoList'
import UserInfo from '@/components/User/UserInfo'
import UserTrading from '@/components/User/UserTrading'
import UserTraded from '@/components/User/UserTraded'
import UserComment from '@/components/User/UserComment'
import UserEval from '@/components/User/UserEval'
import UserPublish from '@/components/User/UserPublish'
import UserStar from '@/components/User/UserStar'

export default{
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
      path: 'trading',
      name: 'UserTrading',
      component: UserTrading
    },
    {
      path: 'traded',
      name: 'UserTraded',
      component: UserTraded
    },
    {
      path: 'eval',
      name: 'UserEval',
      component: UserEval
    },
    {
      path: 'publish',
      name: 'UserPublish',
      component: UserPublish
    },
    {
      path: 'star',
      name: 'UserStar',
      component: UserStar
    },
    {
      path: 'comment',
      name: 'UserComment',
      component: UserComment
    }
  ]
}
