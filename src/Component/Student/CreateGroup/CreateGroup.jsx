import React, { useState } from 'react';
import { Radio, Form, Input } from 'antd';


function CreateGroup() {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout= "horizontal"
      autoComplete="off"
      style={{
        minWidth: 1000,
      }}>
      <Form.Item
        name="title"
        label="Tên nhóm:"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên nhóm',
            type: String,
          },
        ]}
      >
        <Input /> 
      </Form.Item>
    </Form>
  )
}

export default CreateGroup