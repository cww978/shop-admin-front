import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import * as Icons from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { getOpenKeys } from '@/utils/util'
import { menus } from '../config'

const Menus = () => {
  const navigate = useNavigate()
  // 定义 menu 类型
  type MenuItem = Required<MenuProps>['items'][number]
  const { pathname } = useLocation()

  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const getItem = (
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode | null,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem
  }

  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)
    const latestOpenKey = openKeys[openKeys.length - 1]
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
    setOpenKeys([latestOpenKey])
  }

  // 获取菜单列表并处理成 antd menu 需要的格式
  const [menuList, setMenuList] = useState<MenuItem[]>([])

  // 动态渲染 Icon 图标
  const customIcons: { [key: string]: any } = Icons
  const addIcon = (name: string) => {
    return name ? React.createElement(customIcons[name]) : null
  }

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
    menuList.forEach((item: Menu.MenuOptions) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)))
      newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)))
    })
    return newArr
  }

  const getMenuData = () => {
    setMenuList(deepLoopFloat(menus))
  }

  const onClickMenu = (event:any) => {
    const { key } = event
    navigate(key)
  }

  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname])
    setOpenKeys(getOpenKeys(pathname))
  }, [pathname])

  useEffect(() => {
    getMenuData()
  }, [])

  return (
    <div>
      <Menu
        mode='inline'
        triggerSubMenuAction="hover"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        items={menuList}
        onOpenChange={onOpenChange}
        onClick={onClickMenu}
      ></Menu>
    </div>
  )
}

export default Menus
