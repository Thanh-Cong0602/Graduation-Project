import React, { useState } from 'react'
import '../scss/_layout.scss'
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import AdvisorSidebar from './AdvisorSidebar/AdvisorSidebar';
import HeaderGeneral from '../HeaderGeneral/HeaderGeneral';
import AdvisorHomePage from './AdvisorHomePage/AdvisorHomePage';
import ManagementTopic from './ManagementTopic/ManagementTopic';
import ProposalTopic from './ProposalTopic/ProposalTopic';
const { Content } = Layout;
function AdvisorScreen() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout hasSider className='layout__main'>
        <AdvisorSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className='layout__right'
          style={{
            paddingLeft: collapsed ? 80 : 235,
            transition: '0.3s ease'
          }}>
          <HeaderGeneral collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content className='layout__content'>
            <Routes>
              <Route path="/" element={<AdvisorHomePage />} />
              <Route path="/advisor/management_topic" element={<ManagementTopic />} />
              <Route path="/advisor/proposal_topic" element={<ProposalTopic />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default AdvisorScreen