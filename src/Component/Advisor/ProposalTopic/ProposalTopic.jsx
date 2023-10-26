import React from 'react'
import './ProposalTopic.scss'
import { PlusCircleOutlined, DeleteTwoTone } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input, Select,
  Row, Col, Flex
} from 'antd';
const { Search, TextArea } = Input;
function ProposalTopic() {
  const [form] = Form.useForm();
  return (
    <Form >
      <Form.Item name="titleOfTopicVN"
        label="Tên đề tài (Tiếng Việt)"
        rules={[{
          required: true,
          message: 'Vui lòng nhập tên đề tài bằng tiếng việt',
        },]}>
        <Input placeholder="Nhập tên đề tài tiếng việt" />
      </Form.Item>

      <Form.Item name="titleOfTopicEN"
        label="Tên đề tài (Tiếng Anh)"
        rules={[{
          required: true,
          message: 'Vui lòng nhập tên đề tài bằng tiếng anh',
        },]}>
        <Input placeholder="Nhập tên đề tài tiếng anh" />
      </Form.Item>
    </Form>
  )
}

export default ProposalTopic