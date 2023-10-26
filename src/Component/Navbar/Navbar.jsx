import './Navbar.scss'
import React, { useState } from 'react'
import logo_hcmut from '../../assets/hcmut.png'
import { Flex, Button, notification } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BellFilled, MessageFilled } from '@ant-design/icons'
import user_img from '../../assets/user_img.png'
import Conversation from '../Conversation/Conversation'
function HeaderWrapper() {
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);
  const role = useSelector(state => state.userReducer.role)
  const [openConversation, setOpenConversation] = useState(false);
  const showDrawer = () => {
    if (openConversation) {
      setOpenConversation(false)
    }
    else {
      setOpenConversation(true);
    }
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  return (
    <>
      {contextHolder}
      <div className='navbar__wrapper'>
        <Flex align="center" justify="space-between"
          style={{ paddingLeft: 10, paddingRight: 20 }}>
          <div>
            <Flex align="center" justify="space-between" gap={8}>
              <img src={logo_hcmut} alt='Logo HCMUT' />
              <span className='navbar_infor navbar_infor_close'>
                Đại học quốc gia TP.HCM
                <br />
                Trường đại học bách khoa
              </span>
            </Flex>
          </div>
          <div className='ml-auto'> </div>
          <div>
            {isLoggedIn ? (
              <Flex align="center" gap={12}
                className='navbar_login'>
                <Button style={{ border: 'none', padding: '4px 0px' }}
                  onClick={openNotification}>
                  <BellFilled style={{ fontSize: 18 }} />
                </Button>
                <span>|</span>
                <Button style={{ border: 'none', padding: '4px 0px'}}
                  onClick={showDrawer}>
                  <MessageFilled style={{ fontSize: 18, }} />
                </Button>
                <span style={{ marginRight: 20 }}>|</span>
                <span style={{ fontSize: 16 }} className='user_name_close'>
                  Nguyễn Thành Công <br />
                  {role}
                </span>
                <img src={user_img} alt='Avatar User' className='navbar_user_img' />
              </Flex>
            ) : (
              <div className='header_login'>
                <Link to={"/login_delegation"}>Đăng nhập</Link>
              </div>
            )}
          </div>
        </Flex>
      </div>
      <Conversation setOpenConversation={setOpenConversation} openConversation={openConversation} />
    </>
  )
}

export default HeaderWrapper