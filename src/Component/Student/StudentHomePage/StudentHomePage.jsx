import React from 'react'
import './StudentHomePage.scss'
import { Row, Col } from 'antd'
import register_logo from '../../../assets/registration.png'
import homepage_logo from '../../../assets/homepage2.png'
import linechart_logo from '../../../assets/linechart.png'
import form_logo from '../../../assets/form.png'
import { Link } from 'react-router-dom'
function StudentHomePage() {
  return (
    <div>
      <Row className='student__homepage__wrapper' gutter={[24, 24]} align="middle" justify="space-between">
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/">
            <div className='stu_dashboard_card'>
              <div >
                <img src={homepage_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Trang chủ hệ thống</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/student/registertopic">
            <div className='stu_dashboard_card'>
              <div >
                <img src={register_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Đăng ký đề tài</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/student/implement">
            <div className='stu_dashboard_card'>
              <div >
                <img src={linechart_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Triển khai đề tài</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/">
            <div className='stu_dashboard_card'>
              <div >
                <img src={form_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Xem biểu mẫu</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/">
            <div className='stu_dashboard_card'>
              <div >
                <img src={homepage_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Trang chủ hệ thống</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/student/registertopic">
            <div className='stu_dashboard_card'>
              <div >
                <img src={register_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Đăng ký đề tài</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/student/implement">
            <div className='stu_dashboard_card'>
              <div >
                <img src={linechart_logo} alt='Register Alternative' className='card__img' />
              </div>
              <h3>Triển khai đề tài</h3>
            </div>
          </Link>
        </Col>
        <Col xl={{ span: 6 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }}>
          <Link to="/">
            <div className='stu_dashboard_card'>
              <div >
                <img src={linechart_logo} alt='Register Alternative' className='card__img' />
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default StudentHomePage