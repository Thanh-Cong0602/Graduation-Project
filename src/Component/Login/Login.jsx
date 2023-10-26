import React from 'react'
import './Login.scss'
import { Button, Space } from 'antd';
import logo_hcmut from '../../assets/hcmut.png'
import { Link, useNavigate } from 'react-router-dom';
import { setRoleUser } from '../../Redux/_actions/user.action';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSetRole = (role) => {
    dispatch(setRoleUser(role))
    navigate("/login")
  }
  return (
    <div className='delegation__login__wrapper'>
      <div className='delegation__form'>
        <img src={logo_hcmut} />
        <p>Đăng nhập dành cho</p>
        <Space
          direction="vertical"
          style={{
            width: '80%',
          }}
        >
          <Button block size={'large'} style={{ fontSize: 16, fontWeight: 500 }}
            onClick={() => onSetRole('student')}>
            Sinh viên
          </Button>
          <Button block size={'large'} style={{ fontSize: 16, fontWeight: 500 }}
            onClick={() => onSetRole('advisor')}>
            Cán bộ hướng dẫn
          </Button>
          <Button block size={'large'} style={{ fontSize: 16, fontWeight: 500 }}
            onClick={() => onSetRole('headofsubject')}>
            Trưởng bộ môn
          </Button>
          <Button block size={'large'} style={{ fontSize: 16, fontWeight: 500 }}
            onClick={() => onSetRole('secretary')}>
            Giáo vụ khoa
          </Button>
          <Button block size={'large'} style={{ fontSize: 16, fontWeight: 500 }}
            onClick={() => onSetRole('council')}>
            Hội đồng ngành
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default Login