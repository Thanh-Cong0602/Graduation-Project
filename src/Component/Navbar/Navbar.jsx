import './Navbar.scss'
import React from 'react'
import logo_hcmut from '../../assets/hcmut.png'
import { Row, Col, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BellFilled, MessageFilled } from '@ant-design/icons'
import user_img from '../../assets/user_img.png'
function HeaderWrapper() {
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);

  return (
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
        <div className='ml-auto'>

        </div>
        <div>
          {isLoggedIn ? (
            <Flex align="center" gap={12}
              className='navbar_login'>
              <Link >
                <BellFilled style={{ fontSize: 18 }} />
              </Link>
              <span>|</span>
              <Link>
                <MessageFilled style={{ fontSize: 18, }} />
              </Link>
              <span style={{ marginRight: 20 }}>|</span>
              <span style={{ fontSize: 16 }} className='user_name_close'>Nguyễn Thành Công</span>
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
  )
}

export default HeaderWrapper