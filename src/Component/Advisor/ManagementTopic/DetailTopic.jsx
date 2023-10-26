import React, { useEffect, useState } from 'react'
import './ManagementTopic.scss'
import { Modal, Form, Table, Checkbox, Button } from 'antd';
import DataTopics from '../../Data/listOfTopic.json'
function DetailTopic(props) {
  const { isOpenForm, form } = props;
  const columnsAdvisor = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: 20,
      render: (_, record) => <div>{record.dataIndex}</div>
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      width: '25%'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }
  ]

  const columnsStudent = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: 20,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'nameofstudent',
      key: 'nameofstudent',
      width: '25%'
    },
    {
      title: 'MSSV',
      dataIndex: 'MSSV',
      key: 'MSSV',
      width: '10%'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }
  ]
  return (
    <Modal
      className='custom__modal'
      open={isOpenForm}
      form={form}
      width={1000}
      style={{ minHeight: 500 }}
    >
      <Form className='model__detail__topic'>
        <h2>Thông tin chi tiết đề tài</h2>
        <div>
        <label className='text_bold'>Mã đề tài: </label>
        </div>
        <div>
          <label className='text_bold'>Tên đề tài (Tiếng Việt): {DataTopics[0].titleOfTopicVN}</label>
        </div>
        <div>
          <label className='text_bold'>Tên đề tài (Tiếng Anh): {DataTopics[0].titleOfTopicEN}</label>
        </div>
        <div>
          <label className='text_bold'>Ngày tạo:</label>
        </div>
        <div>
          <label className='text_bold'>Trạng thái:</label>
        </div>
        <div>
          <label className='text_bold'>Thông tin cán bộ hướng dẫn:</label>
          <Table bordered style={{ width: '80%' }}
            columns={columnsAdvisor} pagination={false}
            dataSource={DataTopics[0].listOfAdvisors} />
        </div>
        <div>
          <label className='text_bold'>Thông tin sinh viên:</label>
          <Table bordered style={{ width: '80%' }}
            columns={columnsStudent} pagination={false}
            dataSource={DataTopics[0].listOfStudents} />
        </div>
        
        <div>
          <label className='text_bold'>Mô tả đề tài: </label>
          <span>{DataTopics[0].topicInformation}</span>
        </div>
        <div>
          <label className='text_bold'>Nhiệm vụ đề tài: </label>
          <span>{DataTopics[0].missonInformation}</span>
        </div>
      </Form>
    </Modal>
  )

}

export default DetailTopic