import React from 'react'
import '../scss/_layout.scss'
import { Layout } from 'antd'
import { Flex, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
const { Header } = Layout;
function HeaderGeneral({ collapsed, setCollapsed }) {
  const role = useSelector(state => state.userReducer.role)
  const titlePage = useSelector(state => state.appReducer.titlePage)
  let buttonClass;
  switch (role) {
    case 'student':
      buttonClass = 'student_header_btn_collapsed';
      break;
    case 'advisor':
      buttonClass = 'advisor_header_btn_collapsed';
      break;
    case 'council':
      buttonClass = 'council_header_btn_collapsed';
      break;
    default:
      break;
  }
  return (
    <Header className='layout__header'>
      <Flex gap={8} align="center">
        <Button className={`!collapsed ? buttonClass : ''`}
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: '16px', width: 64, height: 64, }}
        />
        <h1 className={`header_title ${!collapsed ? 'header_title_hidden' : ''}`}>
          {titlePage}
        </h1>
      </Flex>
    </Header>
  )
}

export default HeaderGeneral