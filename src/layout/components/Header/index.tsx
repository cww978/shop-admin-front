import React from 'react'
import { Layout } from 'antd'
import Fullscreen from './components/Fullscreen'
import AvatarIcon from './components/AvatarIcon'

import './index.less'

const LayoutHeader = () => {
  const { Header } = Layout

  return (
    <Header>
      <div className="header-lf">
      </div>
      <div className="header-ri">
        <Fullscreen />
        <span className="username">Admin</span>
        <AvatarIcon />
      </div>
    </Header>
  )
}

export default LayoutHeader
