import React from 'react'
import LayoutIndex from '@/layout/index'
import Home from '@/pages/home'
import { RouteObject } from '../interface/index'

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home/index',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

export default homeRouter
