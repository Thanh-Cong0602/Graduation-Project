import React, { useState } from 'react';
import './RegisterTopic.scss'
import { Radio, Form, Input, Button } from 'antd';
import { Col, Row } from 'antd';
import { Select } from 'antd';
import { Flex } from 'antd';
const RegisterTopic = () => {
  const [form] = Form.useForm();
  const [numOfAdvisors, setNumOfAdvisors] = useState('0');
  const [numOfStudents, setNumOfStudents] = useState('0');
  const handleChangeNumOfAdvisors = (value) => {
    setNumOfAdvisors(value.value);
  };
  const handleChangeNumOfStudents = (value) => {
    setNumOfStudents(value.value);
  };
  function generateFields(num, type) {
    const fields = [];
    for (let i = 1; i <= parseInt(num); i++) {
      const fieldLabel = type === 'advisor' ? `CBHD ${i}` : `sinh viên ${i}`;
      fields.push(
        <div key={i}>
          <Flex gap="large" align="center" justify='center'
            className={`register_res_${type}`}
            style={{ padding: '0px 30px', marginBottom: 16 }}>
            <label style={{ minWidth: type === 'advisor' ? 60 : 72 }}>
              {type === 'advisor' ? (<>CBHD {i}</>) : (<>Sinh viên {i}</>)}
            </label>
            <Input placeholder={`Nhập họ và tên ${fieldLabel} `} />
            <Input placeholder={`Nhập email ${fieldLabel}`} />
            {type === 'student' && (
              <>
                <Input placeholder={`Nhập MSSV ${fieldLabel}`} />
              </>
            )}
          </Flex>
        </div>
      )
    }
    return fields;
  }
  const advisorFields = generateFields(numOfAdvisors, 'advisor');
  const studentFields = generateFields(numOfStudents, 'student');

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(advisorFields);
    console.log(studentFields);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form className='register__topic'
      form={form}
      layout="vertical"
      autoComplete="off"
      style={{
        maxWidth: 1400,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="title"
        label="Tên đề tài:"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập tên đề tài',
            type: String,
          },
        ]}
      >
        <Flex gap="large" align="center" justify='center'
          className='register_res_title'
          style={{ marginBottom: 16, marginLeft: 16 }}>
          <label style={{ minWidth: 70 }} > Tiếng việt:</label>
          <Input className='register_res_input' placeholder="Nhập tên đề tài tiếng việt" />
        </Flex>
        <Flex gap="large" align="center" justify='center'
          className='register_res_title'
          style={{ marginBottom: 16, marginLeft: 16 }}>
          <label style={{ minWidth: 70 }} >Tiếng anh:</label>
          <Input className='register_res_input' placeholder="Nhập tên đề tài tiếng anh" />
        </Flex>
      </Form.Item>
      <Form.Item
        name="NumOfAdvisors"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn số lượng CBHD',
            type: String,
          },
        ]}
        label="Số lượng cán bộ hướng dẫn hỗ trợ:">
        <Select
          labelInValue
          style={{ width: 120, marginLeft: '20px' }}
          defaultValue={{
            value: '0',
            label: '0',
          }}
          onChange={handleChangeNumOfAdvisors}
        >
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="InformationOfAdvisors"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin CBHD',
            type: String,
          },
        ]}
        className={`${numOfAdvisors === '0' ? 'register__disable' : ''}`}
        label="Họ tên và email cán bộ hướng dẫn:"  >
        <div className="form_student_item">{advisorFields}</div>
      </Form.Item>


      <Form.Item label="Ngành:" >
        <Radio.Group buttonStyle="outline">
          <Radio className='form_radio_item' value="CS"> Khoa học máy tính </Radio>
          <Radio className='form_radio_item' value="CE"> Kỹ thuật máy tính </Radio>
          <Radio className='form_radio_item' value="CS_CE"> Liên ngành CS-CE </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Chương trình đào tạo:" >
        <Radio.Group>
          <Radio className='form_radio_item' value="formal"> Chính quy </Radio>
          <Radio className='form_radio_item' value="high_quality"> Chất lượng cao </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="NumOfStudents"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn số lượng sinh viên',
            type: String,
          },
        ]}
        label="Số lượng sinh viên thực hiện:">
        <Select
          labelInValue
          style={{ width: 120, marginLeft: '20px' }}
          defaultValue={{
            value: '0',
            label: '0',
          }}
          onChange={handleChangeNumOfStudents}
        >
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="InformationOfStudents"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin sinh viên thực hiện',
            type: String,
          },
        ]}
        className={`${numOfStudents === '0' ? 'register__disable' : ''}`}
        label="Thông tin sinh viên thực hiện đề tài:">
        <div className="form_student_item">{studentFields}</div>
      </Form.Item>

      <Form.Item
        name="TopicInformation"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập thông tin mô tả đề tài',
            type: String,
          },
        ]}
        label="Mô tả đề tài:">
        <Input.TextArea rows={5} />
      </Form.Item>

      <Form.Item
        name="MissonInformation"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập nhiệm vụ',
            type: String,
          },
        ]}
        label="Nhiệm vụ:">
        <Input.TextArea rows={7} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default RegisterTopic;


{/* <Row gutter={[8, 16]} justify="center" align="middle" >
          <Col span={2}>
            <label style={{marginLeft: 20, minWidth: 70}}>Tiếng việt:</label>
          </Col>
          <Col span={22}>
            <Input placeholder="Nhập tên đề tài tiếng việt" size="default size" />
          </Col>

          <Col xs={6} sm={5} md={4} lg={3} xl={3}>
            <label style={{marginLeft: 20}}>Tiếng anh:</label>
          </Col>
          <Col xs={18} sm={19} md={20} lg={21} xl={20}>
            <Input placeholder="Nhập tên đề tài tiếng anh" size="default size" />
          </Col>
        </Row> */}