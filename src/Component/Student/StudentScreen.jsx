import React, { useState } from 'react';
import '../scss/_layout.scss'
import StudentHomePage from './StudentHomePage/StudentHomePage';
import StudentSidebar from './StudentSidebar/StudentSidebar';
import RegisterTopic from './RegisterTopic/RegisterTopic';
import ImplementTopic from './ImplementTopic/ImplementTopic';
import HeaderGeneral from '../HeaderGeneral/HeaderGeneral';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Content } = Layout;
function StudentScreen() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout hasSider className='layout__main'>
        <StudentSidebar collapsed={collapsed} setCollapsed={setCollapsed}
        />
        <Layout className='layout__right'
          style={{
            paddingLeft: collapsed ? 80 : 200,
            transition: '0.3s ease'
          }} >
          <HeaderGeneral collapsed={collapsed} setCollapsed={setCollapsed} />

          <Content className='layout__content'>
            <Routes>
              <Route path="/" element={<StudentHomePage />} />
              <Route path="/student/registertopic" element={<RegisterTopic />} />
              <Route path="/student/implement_topic" element={<ImplementTopic />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default StudentScreen;
