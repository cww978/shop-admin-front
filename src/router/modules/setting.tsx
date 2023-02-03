import React from 'react'
import LayoutIndex from '@/layout/index'
import Setting from '@/pages/setting'
import { RouteObject } from '../interface/index'

// 首页模块
const settingRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/setting/index',
        element: <Setting />,
        meta: {
          requiresAuth: true,
          title: '系统设置',
          key: 'setting'
        }
      }
    ]
  }
]

export default settingRouter
