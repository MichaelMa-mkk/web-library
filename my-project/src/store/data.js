var GoodList = [
  {
    name: '三星 Galaxy TabPro S 平板电脑 12英寸',
    advertising: '三星 Galaxy TabPro S 二合一平板电脑 12英寸（Intel CoreM3 4G内存/128G SSD/Win10 内含键盘）莹雪白，附带白色键盘。今年3月份在京东上打折时5199买的，还未过保修期，包装清单里所有东西都在，包括发票和保修单，因为自己手上有几台笔记本，所以买来后一直在闲置，因此想低价转出。电脑基本上相当于全新，买的时候还一起买了装平板的皮套并贴了钢化膜，以及USB转换线，这些都可以一起赠送。原价5199买的现3000出，电脑非常好，最好见面交易先验货再付款。',
    price_sell: 2800,
    category: 1,
    id: 0,
    userid: 1,
    status: 0 // 0表示在售，1表示已售出
  },
  {
    name: '捷安特 ocr3300 自行车',
    advertising: '捷安特 ocr3300 自行车。车子很新，1300出，爽快的朋友再送全新刹车一对，内胎若干，41码锁鞋一双。一直放在老房子，没怎么骑，由于靠墙放的，靠墙的一侧略有磨损车子很久没骑了，链条比较干，需要试车的最好带瓶链条油。细节图都在下面了，瑕疵也拍了，都是正常使用磨损，一边的把带磨损比较严重，不是很黏了，用胶带固定了下，外观党估计要自己换',
    price_sell: 1300,
    category: 2,
    id: 1,
    userid: 1,
    status: 0
  },
  {
    name: '适马85 1.4佳能镜头',
    advertising: '适马85 1.4佳能口老款 成色极新的适马85 1.4老款，唯一的不足之处是前镜片中心有一点状脱膜，送一片B+W金圈uv镜作为补偿。箱说齐全，两个遮光罩都在。2999不刀。',
    price_sell: 2999,
    category: 6,
    id: 2,
    userid: 1,
    status: 0
  },
  {
    name: 'promade滑板',
    advertising: 'promade专业板400出。520入于实体店。只用过两次。',
    price_sell: 400,
    category: 7,
    id: 3,
    userid: 1,
    status: 0
  },
  {
    name: 'Swell木纹保温杯',
    advertising: 'Swell木纹保温杯，可保冷，全新。',
    price_sell: 100,
    category: 3,
    id: 4,
    userid: 1,
    status: 0
  },
  {
    name: '天龙D7200国行旗舰头戴式大耳机',
    advertising: '天龙D7200国行旗舰头戴式大耳机99新出手 该耳机不用多说，天龙的国行最新旗舰大耳机D7200，封闭式耳机，隔音效果非常好，声音素质和听感属于旗舰级别。自带7N单晶铜高品质耳机线（如图所示），照片中清晰的显示着插头上有7NOFC字样，也就是说，基本不用换升级线了，原线素质就很好。耳机保护的非常好，盒子包装配件和新的没有区别。最后说一下推力，这个耳机很好推，直推压力也不大。甚至可以作为便携耳机出街，在家有条件上耳放效果更好。有意的来，练习大刀的勿扰。官方保修。',
    price_sell: 4300,
    category: 10,
    id: 5,
    userid: 1,
    status: 0
  },
  {
    name: 'qdc8 hifi公模耳机',
    advertising: '新版qdc8 hifi公模耳机。帮朋友出新版qdc8 HiFi公模，2017年9月份买的，在保，全部加起来还未听够10小时，耳机和配件基本全新，没任何问题，声音都还未煲开，没修过没改过模，不议价，不包邮，需要直接拍下。。',
    price_sell: 6600,
    category: 10,
    id: 6,
    userid: 1,
    status: 1,
    to: 0
  },
  {
    name: '希捷3T 3.5英寸硬盘',
    advertising: '几乎全新的希捷3T 3.5英寸硬盘 带硬盘盒 酷鱼 台式机硬盘。买了小半年，当作电影仓库盘用的，就放了2T我比较喜欢的电影，所以基本没通电几次。因为又买了一个2.5英寸的，故二手出售，福利：可以装满需要的资源（你提要求，任意，基本都能给你找到）可小刀，产品型号：希捷(SEAGATE)酷鱼系列 3TB 7200转64M SATA3 台式机机械硬盘(ST3000DM008)+优越者硬盘盒。入手渠道：京东。新旧程度：9.5成。规格尺寸：3.5英寸 台式机硬盘。使用感受：速度快，噪音小，就是插电不太方便',
    price_sell: 499,
    category: 1,
    id: 7,
    userid: 0,
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
