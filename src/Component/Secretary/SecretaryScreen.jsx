import React, { useState } from 'react';
import '../scss/_layout.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import SecretaryHomePage from './SecretaryHomePage/SecretaryHomePage';
import SecretarySidebar from './SecretarySideBar/SecretarySidebar';
import HeaderGeneral from '../HeaderGeneral/HeaderGeneral';
const { Content } = Layout;
function SecretaryScreen() {
  const [collapsed, setCollapsed] = useState(false);
  const [titleHeader, setTitleHeader] = useState('')
  return (
    <>
      <Layout hasSider className='layout__main'>
        <SecretarySidebar setTitleHeader={setTitleHeader}
          collapsed={collapsed} setCollapsed={setCollapsed}
        />
        <Layout className='layout__right'
          style={{
            paddingLeft: collapsed ? 80 : 200,
            transition: '0.3s ease'
          }} >
          <HeaderGeneral titleHeader={titleHeader}
            collapsed={collapsed} setCollapsed={setCollapsed} />

          <Content className='layout__content'>
            <Routes>
              <Route path="/" element={<SecretaryHomePage/>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default SecretaryScreen