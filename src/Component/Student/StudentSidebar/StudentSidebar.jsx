import React, { useState } from 'react'
import '../../scss/_layout.scss'
import {
  UploadOutlined,
  FolderAddOutlined,
  HomeOutlined,
  FormOutlined,
  LineChartOutlined,
  FileTextOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setTitlePage } from '../../../Redux/_actions';
const { Sider } = Layout;
function StudentSidebar({ collapsed, setCollapsed }) {
  const [selectedKey, setSelectedKey] = useState(1);
  const dispatch = useDispatch();
  const handleSetTitleHeader = (title) => { dispatch(setTitlePage(title)) }
  const handleLogout = () => { dispatch(setLoggedIn(false)) }
  return (
    <div>
      <Sider className={`layout__sidebar ${collapsed ? 'res_sider_open' : 'res_sider_close'}`}
        trigger={null}
        breakpoint="lg" collapsedWidth="80"
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed)
        }}
        collapsible collapsed={collapsed}
      >
        <Menu
          theme="light"
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
                <Link to="/student/registertopic"
                  onClick={() => {
                    setSelectedKey(2)
                    handleSetTitleHeader('Đăng ký đề tài')
                  }}>
                  Đăng ký đề tài
                </Link>),
            },
            {
              key: '3',
              icon: <LineChartOutlined />,
              label: (
                <Link to="/student/implement_topic"
                  onClick={() => {
                    setSelectedKey(3)
                    handleSetTitleHeader('Triển khai đề tài')
                  }}>
                  Triển khai đề tài
                </Link>),
            },
            {
              key: '4',
              icon: <FormOutlined />,
              label: (
                <Link to="/student/registertopic"
                  onClick={() => {
                    setSelectedKey(4)
                    handleSetTitleHeader('Yêu cầu phát sinh')
                  }}>
                  Yêu cầu phát sinh
                </Link>),
            },
            {
              key: '5',
              icon: <FileTextOutlined />,
              label: (
                <Link to="/student/viewform"
                  onClick={() => {
                    setSelectedKey(5)
                    handleSetTitleHeader('Xem biểu mẫu')
                  }}>
                  Xem biểu mẫu
                </Link>),
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: (
                <Link to="/student/uploadreport"
                  onClick={() => {
                    setSelectedKey(6)
                    handleSetTitleHeader('Upload file báo cáo')
                  }}>
                  Upload file báo cáo
                </Link>),
            },
            {
              key: '7',
              icon: <FolderAddOutlined />,
              label: (
                <Link to="create_exception"
                  onClick={() => {
                    setSelectedKey(7)
                    handleSetTitleHeader('Tạo ngoại lệ')
                  }}>
                  Tạo ngoại lệ
                </Link>),
            },
            {
              key: '8',
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
    </div>
  )
}

export default StudentSidebar


{/* <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}
            onClick={() => handleSetTitleHeader('Trang chủ hệ thống')}>
            <Link to="/">Trang chủ hệ thống</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FolderAddOutlined />}
            onClick={() => handleSetTitleHeader('Đăng ký đề tài')}>
            <Link to="/student/registertopic">Đăng ký đề tài</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LineChartOutlined />}
            onClick={() => handleSetTitleHeader('Triển khai đề tài')}>
            <Link to="/student/implementtopic">Triển khai đề tài</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FormOutlined />}
            onClick={() => handleSetTitleHeader('Yêu cầu phát sinh')}>
            <Link to="/student/registertopic">Yêu cầu phát sinh</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}
            onClick={() => handleSetTitleHeader('Xem biểu mẫu')}>
            <Link to="/student/viewform">Xem biểu mẫu</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to="/student/uploadreport">Upload file báo cáo</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UploadOutlined />}>
            <Link to="/create_exception">Tạo ngoại lệ</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined />} onClick={handleLogout}>
            <Link to="/homepage">Đăng xuất</Link>
          </Menu.Item>
        </Menu> */}