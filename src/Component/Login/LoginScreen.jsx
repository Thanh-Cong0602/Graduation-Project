import React from 'react'
import './Login.scss'
import { Col, Row } from 'antd'
import logo_hcmut from '../../assets/hcmut.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
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
        <Row style={{ padding: 20 }}>
          <Col span={12} className='screen_login_logo' >
            <img src={logo_hcmut} style={{ width: 300, height: 'auto' }} />
          </Col>
          <Col span={12} className='screen_login_form'>
            <h1>Đăng nhập</h1>
            <Form
              name="normal_login"
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
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary"
                  htmlType="submit"
                  className="login-form-button">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LoginScreen