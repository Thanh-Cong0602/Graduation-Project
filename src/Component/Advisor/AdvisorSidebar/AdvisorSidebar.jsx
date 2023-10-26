import React, {useState} from 'react'
import '../../scss/_layout.scss'
import {
  FolderAddOutlined,
  HomeOutlined,
  FormOutlined,
  LineChartOutlined,
  LogoutOutlined,
  SnippetsOutlined,
  ExceptionOutlined,

} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setTitlePage } from '../../../Redux/_actions';
const { Sider } = Layout;
function AdvisorSidebar({ collapsed, setCollapsed }) {
  const [selectedKey, setSelectedKey] = useState(1);
  const dispatch = useDispatch();
  const handleSetTitleHeader = (title) => {
    dispatch(setTitlePage(title))
  }

  const handleLogout = () => {
    dispatch(setLoggedIn(false))
  }
  return (
    <Sider className={`layout__sidebar ${collapsed ? 'res_sider_open' : 'res_sider_close'}`}
      trigger={null}
      breakpoint="lg" collapsedWidth="80"
      onCollapse={(collapsed, type) => {
        setCollapsed(collapsed)
      }}
      collapsible collapsed={collapsed}
      width={235}
    >
      <Menu theme="light"
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: (
              <Link to="/"
                onClick={() => {
                  setSelectedKey(1)
                  handleSetTitleHeader('Trang chủ hệ thống')
                }}>
                Trang chủ hệ thống
              </Link>),
          },
          {
            key: '2',
            icon: <FolderAddOutlined />,
            label: (
              <Link to="/advisor/proposal_topic"
                onClick={() => {
                  setSelectedKey(2)
                  handleSetTitleHeader('Thêm đề tài')
                }}>
                Thêm đề tài
              </Link>),
          },
          {
            key: '3',
            icon: <SnippetsOutlined />,
            label: (
              <Link to="/advisor/management_topic"
                onClick={() => {
                  setSelectedKey(3)
                  handleSetTitleHeader('Quản lý đề tài')
                }}>
                Quản lý đề tài
              </Link>),
          },
          {
            key: '4',
            icon: <FormOutlined />,
            label: (
              <Link to="/advisor/update_topic"
                onClick={() => {
                  setSelectedKey(4)
                  handleSetTitleHeader('Cập nhật thông tin đề tài')
                }}>
                Cập nhật thông tin đề tài
              </Link>),
          },
          {
            key: '5',
            icon: <LineChartOutlined />,
            label: (
              <Link to="/advisor/progress_topic"
                onClick={() => {
                  setSelectedKey(5)
                  handleSetTitleHeader('Xem tiến độ đề tài')
                }}>
                Xem tiến độ đề tài
              </Link>),
          },
          {
            key: '6',
            icon: <ExceptionOutlined />,
            label: (
              <Link to="/student/handle_exception"
                onClick={() => {
                  setSelectedKey(6)
                  handleSetTitleHeader('Xử lý ngoại lệ')
                }}>
                Xử lý ngoại lệ
              </Link>),
          },
          {
            key: '7',
            icon: <LogoutOutlined />,
            label: (
              <Link to="/homepage"
                onClick={handleLogout}>
                Đăng xuất
              </Link>),
          },
        ]}
      />
    </Sider>
  )
}

export default AdvisorSidebar