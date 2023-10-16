import React, { useState } from 'react';
import './StudentScreen.scss'
import StudentHomePage from './StudentHomePage/StudentHomePage';
import StudentSidebar from './StudentSidebar/StudentSidebar';
import RegisterTopic from './RegisterTopic/RegisterTopic';
import ImplementTopic from './ImplementTopic/ImplementTopic';
import { Routes, Route } from 'react-router-dom';
import { Layout, Button, Flex } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
const { Header, Content } = Layout;
function StudentScreen() {
  const [collapsed, setCollapsed] = useState(false);
  const [studentTitle, setStudentTitle] = useState('')
  return (
    <>
      <Layout className='student__wrapper' hasSider >
        <StudentSidebar setStudentTitle={setStudentTitle}
          collapsed={collapsed} setCollapsed={setCollapsed}
        />
        <Layout className='stu_layout_res_sm'
          style={{
            paddingLeft: collapsed ? 80 : 200,
            transition: '0.3s ease'
          }} >
          <Header
            className='stu__layout__header'>
            <Flex gap={8} align="center">
              <Button className={`${!collapsed ? 'stu_header_btn_collapsed' : ''}`}
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{ fontSize: '16px', width: 64, height: 64, }}
              />
              <h1 className={`stu_header_title ${!collapsed ? 'stu_header_title_close' : ''}`}>
                {!studentTitle ? 'Trang chủ hệ thống' : studentTitle}
              </h1>
            </Flex>

          </Header>
          <Content className='stu__layout__content'>
            <Routes>
              <Route path="/" element={<StudentHomePage />} />
            </Routes>
            <Routes>
              <Route path="/student/registertopic" element={<RegisterTopic />} />
            </Routes>
            <Routes>
              <Route path="/student/implement" element={<ImplementTopic />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default StudentScreen;