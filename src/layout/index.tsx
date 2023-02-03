import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import './index.less'
import Menus from './components/Menu'
import Header from './components/Header'

const Tabs = () => {
  return (
    <></>
  )
}

const Footer = () => {
  return (
    <></>
  )
}

const LayoutIndex = () => {
  const { Sider, Content } = Layout
  return (
    <>
      <div className='container'>
        <Sider width={220} theme='dark'>
          <Menus></Menus>
        </Sider>
        <Layout>
          <Header></Header>
          <Tabs></Tabs>
          <Content>
            <Outlet></Outlet>
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    </>
  )
}

export default LayoutIndex
