import React, { useEffect, useState, useMemo } from 'react';
import './RegisterTopic.scss'
import DataStudents from '../../Data/listOfStudent.json'
import { PlusCircleOutlined, DeleteTwoTone, CloseOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input, Select,
  Row, Col, Flex, notification, Alert, Space
} from 'antd';
const { Search, TextArea } = Input;
function RegisterTopic() {

  const [form] = Form.useForm();
  const [numOfAdvisors, setNumOfAdvisors] = useState(0);
  const [numOfStudents, setNumOfStudents] = useState(0);
  const [inforStudent, setInforStudent] = useState([]);
  const [isShowInforStudent, setIsShowInforStudent] = useState({});
  const [isFindStudent, setIsFindStudent] = useState({});

  const updateStudentInfo = (index, studentInfor) => {
    setInforStudent((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = { ...updatedInfo[index], ...studentInfor };
      return updatedInfo;
    });
  };

  const onSearchWithKey = (key) => (value, _e, info) => {
    const student = DataStudents.find((item) => item.MSSV === parseInt(value));
    if (student) {
      setIsShowInforStudent((prev) => ({ ...prev, [key]: true }));
      setIsFindStudent((prev) => ({ ...prev, [key]: false }))
      updateStudentInfo(key, student)
    } else {
      setIsFindStudent((prev) => ({ ...prev, [key]: true }))
    }
  };

  const handleChangeNumOfAdvisors = (value) => {
    setNumOfAdvisors(value.value);
  };
  const handleChangeNumOfStudents = (value) => {
    setNumOfStudents(value.value)
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (placement, type, message) => {
    api[type]({
      message: message,
      placement,
    });
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    const topicFields = {
      titleOfTopicVN: values.titleOfTopicVN,
      titleOfTopicEN: values.titleOfTopicEN,
      specialization: values.specialization,
      listOfAdvisors: values.listOfAdvisors.list,
      listOfStudents: values.listOfStudents.list,
      educationProgram: values.educationProgram,
      missonInformation: values.missonInformation,
      topicInformation: values.topicInformation,
    }
    console.log(topicFields)
    const messageSuccess = 'Đăng ký đề tài thành công'
    openNotificationWithIcon('top', 'success', messageSuccess)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    const messageError = 'Đăng ký đề tài không thành công'
    openNotificationWithIcon('top', 'error', messageError)
  };

  const validateNumOfStudents = () => {
    console.log(numOfStudents)
    console.log(Object.keys(inforStudent).length)
    if ((numOfStudents < Object.keys(inforStudent).length ||
      numOfStudents > Object.keys(inforStudent).length)
      && Object.keys(inforStudent).length !== 0) {
      return Promise.reject(new Error('Số lượng sinh viên không hợp lệ, vui lòng kiểm tra lại'));
    } else {
      return Promise.resolve();
    }
  };
  return (
    <>
      {contextHolder}
      <Form className='register__topic'
        form={form}
        layout="vertical"
        autoComplete="off"
        style={{ maxWidth: 1400, }}
        labelWrap
        wrapperCol={{ flex: 1, }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="titleOfTopicVN"
          label="Tên đề tài (Tiếng Việt)"
          rules={[{
            required: true,
            message: 'Vui lòng nhập tên đề tài bằng tiếng việt',
          },]}>
          <Input placeholder="Nhập tên đề tài tiếng việt" />
        </Form.Item>

        <Form.Item
          name="titleOfTopicEN"
          label="Tên đề tài (Tiếng Anh)"
          rules={[{
            required: true,
            message: 'Vui lòng nhập tên đề tài băng tiếng anh',
          },]}>
          <Input placeholder="Nhập tên đề tài tiếng anh" />
        </Form.Item>

        <Form.Item
          name="numOfAdvisors"
          rules={[{
            required: true,
            message: 'Vui lòng chọn số lượng CBHD',
          },]}
          label="Số lượng cán bộ hướng dẫn hỗ trợ:">
          <Select
            labelInValue
            style={{ width: 120, marginLeft: '20px' }}
            value="0"
            onChange={handleChangeNumOfAdvisors}
            placeholder="0"
          >
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Thông tin cán bộ hướng dẫn">
          <Form.List name={["listOfAdvisors", 'list']}>
            {(advisorFields, advisorOpt) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: 16,
                }} >
                {advisorFields.map((advisorField) => (
                  <Flex className='advisor_information' key={advisorField.key}
                    gap="large" align="center" justify='center'
                    style={{ paddingLeft: 20, paddingRight: 20 }}
                  >
                    <label style={{ minWidth: 52 }}>  CBHD {advisorField.key + 1}:  </label>
                    <Form.Item noStyle name={[advisorField.name, 'nameofadvisor']}>
                      <Input placeholder="Họ và tên" />
                    </Form.Item>
                    <Form.Item noStyle name={[advisorField.name, 'emailofadvisor']}>
                      <Input placeholder="Email" />
                    </Form.Item>
                    <DeleteTwoTone style={{ fontSize: 18, marginTop: 10 }}
                      onClick={() => { advisorOpt.remove(advisorField.name); }}
                    />
                  </Flex>
                ))}
                {advisorFields.length < numOfAdvisors && (
                  <Button type="dashed" onClick={() => advisorOpt.add()} block
                    className='btn_add_advisor'
                    style={{ marginLeft: 20, width: 250 }}>
                    <PlusCircleOutlined /> Thêm thông tin CBHD
                  </Button>
                )}
              </div>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item label="Ngành:" name=" specialization"
          rules={[{
            required: true,
            message: 'Vui lòng chọn chuyên ngành',
          },]}
        >
          <Checkbox.Group
            style={{ width: '100%', }} >
            <Row gutter={[0, 16]}>
              <Col xs={24} sm={8}>
                <Checkbox value="CS">Khoa học máy tính</Checkbox>
              </Col>
              <Col xs={24} sm={8}>
                <Checkbox value="CE">Kỹ thuật máy tính</Checkbox>
              </Col>
              <Col xs={24} sm={8}>
                <Checkbox value="CS_CE">Liên ngành CS-CE</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item label="Chương trình đào tạo:" name="educationProgram"
          rules={[{
            required: true,
            message: 'Vui lòng chọn CTĐT',
          },]}
        >
          <Checkbox.Group style={{ width: '100%', }} >
            <Row gutter={[0, 16]} >
              <Col xs={24} sm={{ span: 6 }} >
                <Checkbox value="formal">Chính quy</Checkbox>
              </Col>
              <Col xs={24} sm={{ offset: 2, span: 8 }}>
                <Checkbox value="high_quality">Chất lượng cao</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>


        <Form.Item
          name="numOfStudents"
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn số lượng sinh viên thực hiện',
            },
            // () => ({ validator: validateNumOfStudents, }),
          ]}
          label="Số lượng sinh viên thực hiện:">
          <Select
            labelInValue
            style={{ width: 120, marginLeft: '20px' }}
            value={numOfStudents}
            onChange={handleChangeNumOfStudents}
            placeholder="0"
          >
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Thông tin sinh viên thực hiện">
          <Form.List name={["listOfStudents", 'list']}>
            {(studentFields, studentOpt) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: 16,
                }}
              >
                {studentFields.map((studentField, index) => (
                  <div key={studentField.key}>
                    <Flex className='student_information'
                      gap="large" align="center" justify="flex-start"
                      style={{ paddingLeft: 20, paddingRight: 20 }}>
                      <label style={{ minWidth: 72 }}>  Sinh viên {index + 1}:  </label>
                      <Search style={{ width: 250, }}
                        placeholder="Nhập MSSV"
                        allowClear enterButton
                        onSearch={onSearchWithKey(studentField.key)}
                      />
                    </Flex>
                    {(isShowInforStudent[studentField.key] && !isFindStudent[studentField.key])
                      && (<Flex className='student_information' gap="large" align="center" justify='center'
                        style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
                        <div style={{ display: 'block', width: '100%' }}>
                          <label>MSSV</label>
                          <Form.Item name={[studentField.name, 'MSSV']} noStyle initialValue={inforStudent[studentField.key].MSSV}>
                            <TextArea autoSize disabled className='stu_infor_search' />
                          </Form.Item>

                        </div>
                        <div style={{ display: 'block', width: '100%' }}>
                          <label>Họ và tên</label>
                          <Form.Item name={[studentField.name, 'nameofstudent']} noStyle initialValue={inforStudent[studentField.key].nameofstudent}>
                            <TextArea autoSize disabled className='stu_infor_search' />
                          </Form.Item>
                        </div>
                        <div style={{ display: 'block', width: '100%' }}>
                          <label>Email</label>
                          <Form.Item name={[studentField.name, 'email']} noStyle initialValue={inforStudent[studentField.key].email}>
                            <TextArea autoSize disabled className='stu_infor_search' />
                          </Form.Item>
                        </div>
                        <DeleteTwoTone
                          style={{ fontSize: 20, marginTop: 20, }}
                          className='icon__delete__res'
                          onClick={() => {
                            studentOpt.remove(studentField.name);
                          }}
                        />
                      </Flex>
                      )}
                    {isFindStudent[studentField.key] && (
                      <>
                        <Flex style={{ margin: 20, }} gap={24} className='student_search_infor'>
                          <Space
                            direction="vertical"
                            style={{
                              width: '20%',
                            }}
                          >
                            <Alert message="Không tìm thấy sinh viên" type="warning" showIcon />
                          </Space>
                          <CloseOutlined style={{ fontSize: '18px' }}
                            onClick={() => {
                              studentOpt.remove(studentField.name);
                            }}
                          />

                        </Flex>
                      </>
                    )
                    }
                  </div>

                ))}
                {studentFields.length < numOfStudents && (
                  <Button type="dashed" onClick={() => studentOpt.add()} block
                    className='btn_add_student'
                    style={{ marginLeft: 20, width: 250 }}>
                    <PlusCircleOutlined /> Thêm thông tin sinh viên
                  </Button>
                )}
              </div>
            )}
          </Form.List>
        </Form.Item>

        <Form.Item
          name="topicInformation"
          rules={[{
            required: true,
            message: 'Vui lòng nhập thông tin mô tả đề tài',
          },]}
          label="Mô tả đề tài:">
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item
          name="missonInformation"
          rules={[{
            required: true,
            message: 'Vui lòng nhập nhiệm vụ của đề tài',
          },]}
          label="Nhiệm vụ:">
          <Input.TextArea rows={7} />
        </Form.Item>

        <Flex gap={50} justify='center'>
          <Button type="primary" size='large' htmlType="submit" style={{ width: 100 }}>
            Đăng ký
          </Button>
          <Button type="primary" size='large' htmlType="delete" danger style={{ width: 100 }}>
            Hủy
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default RegisterTopic





{/* 
      <Form.Item
        name="NumOfStudents"
        rules={[
          {
            required: true,
            message: 'Vui lòng chọn số lượng sinh viên thực hiện',
            type: String,
          },
        ]}
        label="Số lượng sinh viên thực hiện:">
        <Select
          labelInValue
          style={{ width: 120, marginLeft: '20px' }}
          value="0"
          onChange={handleChangeNumOfStudents}
          placeholder="0"
        >
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="3">3</Select.Option>
        </Select>
      </Form.Item> */}

{/* <Form.Item label="Thông tin sinh viên thực hiện">
        <Form.List name={["listOfStudents", 'list']}>
          {(studentFields, studentOpt) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 16,
              }}
            >
              {studentFields.map((studentField) => (

                <Flex className='student_information'
                  gap="large" align="center" justify='center' key={studentField.key}
                  style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <label style={{ minWidth: 72 }}>
                    Sinh viên {studentField.key + 1}:
                  </label>
                  <Form.Item noStyle name={[studentField.name, 'MSSVofstudent']}>
                    <Input placeholder="MSSV" />
                  </Form.Item>
                  <Form.Item noStyle name={[studentField.name, 'nameofstudent']}>
                    <Input placeholder="Họ và tên" />
                  </Form.Item>
                  <Form.Item noStyle name={[studentField.name, 'emailofstudent']}>
                    <Input placeholder="Email" />
                  </Form.Item>
                  <DeleteTwoTone
                    onClick={() => {
                      studentOpt.remove(studentField.name);
                    }}
                  />
                </Flex>

              ))}
              {studentFields.length < numOfStudents && (
                <Button type="dashed" onClick={() => studentOpt.add()} block
                  className='btn_add_student'
                  style={{ marginLeft: 20, width: 250 }}>
                  <PlusCircleOutlined /> Thêm thông tin sinh viên
                </Button>
              )}
            </div>
          )}
        </Form.List>
      </Form.Item> */}