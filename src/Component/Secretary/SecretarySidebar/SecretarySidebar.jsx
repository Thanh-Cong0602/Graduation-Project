import React from 'react'
import '../../scss/_layout.scss'
import {
  CloudUploadOutlined,
  FolderAddOutlined,
  HomeOutlined,
  FormOutlined,
  SnippetsOutlined,
  FileTextOutlined,
  LogoutOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../../Redux/_actions';
const { Sider } = Layout;

function SecretarySidebar({ collapsed, setCollapsed, setTitleHeader }) {
  const handleSetTitleHeader = (title) => {
    setTitleHeader(title)
  }
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLoggedIn(false))
  }
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
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: (
                <Link to="/"
                  onClick={() => handleSetTitleHeader('Trang chủ hệ thống')}>
                  Trang chủ hệ thống
                </Link>),
            },
            {
              key: '2',
              icon: <SnippetsOutlined />,
              label: (
                <Link to="/secretary/management_topic"
                  onClick={() => handleSetTitleHeader('Quản lý đề tài')}>
                  Quản lý đề tài
                </Link>),
            },
            {
              key: '4',
              icon: <FormOutlined />,
              label: (
                <Link to="/student/registertopic"
                  onClick={() => handleSetTitleHeader('Yêu cầu phát sinh')}>
                  Yêu cầu phát sinh
                </Link>),
            },
            {
              key: '5',
              icon: <FileTextOutlined />,
              label: (
                <Link to="/student/viewform"
                  onClick={() => handleSetTitleHeader('Xem biểu mẫu')}>
                  Xem biểu mẫu
                </Link>),
            },
            {
              key: '6',
              icon: <CloudUploadOutlined />,
              label: (
                <Link to="/student/uploadreport"
                  onClick={() => handleSetTitleHeader('Upload File')}>
                  Upload File
                </Link>),
              children: [
                {
                  key: '7',
                  icon: <UploadOutlined />,
                  label: (
                    <Link to="/secretary/upload_subject_announcements"
                      onClick={() => handleSetTitleHeader('Upload file thông báo môn học')}>
                      File thông báo môn học
                    </Link>),
                },
                {
                  key: '8',
                  icon: <UploadOutlined />,
                  label: (
                    <Link to="/secretary/courses_registration"
                      onClick={() => handleSetTitleHeader('Upload file danh sách đăng ký môn học')}>
                      File danh sách đăng ký môn học
                    </Link>),
                }
              ]
            },
            {
              key: '11',
              icon: <FolderAddOutlined />,
              label: (
                <Link to="create_exception"
                  onClick={() => handleSetTitleHeader('Tạo ngoại lệ')}>
                  Tạo ngoại lệ
                </Link>),
            },
            {
              key: '12',
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

export default SecretarySidebar