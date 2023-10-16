import React from 'react'
import './StudentSidebar.scss'
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
import { setLoggedIn } from '../../../Redux/_actions';
const { Sider } = Layout;
function StudentSidebar({ collapsed, setCollapsed, setStudentTitle }) {
  const handleStudentTitle = (title) => {
    setStudentTitle(title)
  }
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLoggedIn(false))
  }
  return (
    <div>
      <Sider className={` ${collapsed ? 'res_stu_sider_open' : 'res_stu_sider_close'}`}
        trigger={null}
        breakpoint="lg" collapsedWidth="80"
        onCollapse={(collapsed, type) => {
          setCollapsed(collapsed)
        }}
        collapsible collapsed={collapsed}
        style={{
          background: 'white',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: '70px',
          bottom: 0,
          borderTopRightRadius: 10,
          zIndex: 5,
        }} >
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}
            onClick={() => handleStudentTitle('Trang chủ hệ thống')}>
            <Link to="/">Trang chủ hệ thống</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FolderAddOutlined />}
            onClick={() => handleStudentTitle('Đăng ký đề tài')}>
            <Link to="/student/registertopic">Đăng ký đề tài</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<LineChartOutlined />}
            onClick={() => handleStudentTitle('Triển khai đề tài')}>
            <Link to="/student/implement">Triển khai đề tài</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FormOutlined />}
            onClick={() => handleStudentTitle('Yêu cầu phát sinh')}>
            <Link to="/student/registertopic">Yêu cầu phát sinh</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}
            onClick={() => handleStudentTitle('Xem biểu mẫu')}>
            <Link to="/student/registertopic">Xem biểu mẫu</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<UploadOutlined />}>
            <Link to="/student/registertopic">Upload file báo cáo</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UploadOutlined />}>
            <Link to="/creategroup">Tạo ngoại lệ</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined/>} onClick={handleLogout}>
            <Link to="/homepage">Đăng xuất</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  )
}

export default StudentSidebar