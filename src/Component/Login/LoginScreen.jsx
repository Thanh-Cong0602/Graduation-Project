import React from 'react'
import './Login.scss'
import { Col, Row } from 'antd'
import logo_hcmut from '../../assets/hcmut.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser, setRoleUser, setLoggedIn } from '../../Redux/_actions';
function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector(state => state.userReducer.role)

  const onFinish = (values) => {
    dispatch(setLoggedIn(true))
    navigate("/");

  };
  return (
    <div className='screen__login'>
      <div className='screen_login_container'>
        <Flex align="center" justify="space-evenly" gap={24} className='screen_login_respond'>
          <img src={logo_hcmut} alt='Logo Bách Khoa TP.HCM' />
          <div className='screen_login_form'>
            <h1>Đăng nhập</h1>
            <Form
              name="information_login"
              size='large'
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập tên tài khoản!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined />}
                  placeholder="Tên tài khoản" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Mật khẩu"
                />
              </Form.Item>
              <Form.Item className='btn_submit_form_login'>
                <Button type="primary"
                  htmlType="submit" >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default LoginScreen