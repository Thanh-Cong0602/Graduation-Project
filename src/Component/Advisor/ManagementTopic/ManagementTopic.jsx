import React, { useCallback, useState } from 'react'
import { Space, Table, Tag, Form } from 'antd';
import DataTopics from '../../Data/listOfTopic.json'
import ModalDetailTopic from './DetailTopic'
function ManagementTopic() {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [form] = Form.useForm();
  const columns = [
    {
      title: 'STT',
      dataIndex: 'ID',
      key: 'ID',
      width: 20
    },
    {
      title: 'Mã đề tài',
      dataIndex: 'code',
      key: 'code',
      width: 100,
      render: (text) => <>MDT-52</>
    },
    {
      title: 'Tên đề tài',
      dataIndex: 'titleOfTopicVN',
      key: 'titleOfTopicVN',
      width: '30%',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <>Đang duyệt</>
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (text) => <>18/10/2023</>
    },
    {
      title: 'Phê duyệt',
      dataIndex: 'approve',
      key: 'approve',
      render: (text) => <>Status</>
    },
    {
      title: 'Ngoại lệ',
      dataIndex: 'exception',
      key: 'exception',
      render: (text) => <>Ngoại lệ</>
    },
    {
      title: "Mô tả chi tiết",
      dataIndex: "action",
      key: "action",
      width: '15%',
      render: (_, record) => (
        <>
          <a onClick={() => onClickViewDetailTopic()}> Chi tiết </a>
        </>
      ),
    }
  ];
  const onClickOpenDetailTopic = useCallback(() => {
    setIsOpenForm(true);
  }, [form])
  const onClickViewDetailTopic = useCallback(() => {
    onClickOpenDetailTopic();
  }, [onClickOpenDetailTopic])
  return (
    <div>
      <Table
        bordered pagination={{position: ['bottomCenter']}}
        columns={columns} dataSource={DataTopics} />
      <ModalDetailTopic
        isOpenForm={isOpenForm}
        form={form}
      />
    </div>
  )
}

export default ManagementTopic
