import { Menu } from 'antd'

export const menus:Array<Menu.MenuOptions> = [
  {
    title: '首页',
    path: '/home/index',
    icon: 'BankOutlined'
  },
  {
    title: '商店设置',
    path: '/platform/index',
    icon: 'ShopOutlined',
    children: [
      { title: '热门销售', path: '/platform/hot' },
      { title: '今日推荐', path: '/platform/recommend' }
    ]
  },
  {
    title: '产品中心',
    path: '/product',
    icon: 'AppstoreOutlined',
    children: [
      { title: '产品类别', path: '/product/class' },
      { title: '产品维护', path: '/product/account' }
    ]
  },
  {
    title: '平台会员',
    path: '/member/index',
    icon: 'CrownOutlined'
  },
  {
    title: '订单管理',
    path: '/order/index',
    icon: 'DollarOutlined'
  },
  {
    title: '平台分析',
    path: '/analyse/index',
    icon: 'GlobalOutlined'
  },
  {
    title: '系统管理',
    path: '/setting',
    icon: 'SettingOutlined',
    children: [
      { title: '系统设置', path: '/setting/index' },
      { title: '菜单设置', path: '/setting/menu' },
      { title: '用户管理', path: '/setting/user' },
      { title: '角色管理', path: '/setting/role' },
      { title: '权限管理', path: '/setting/authority' }
    ]
  }
]
