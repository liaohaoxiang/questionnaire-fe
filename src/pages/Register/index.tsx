import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Space, Form, Input, Button } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

import { LOGIN_PATH } from '@router/index'

const { Title } = Typography

const Register: FC = () => {
  const handleFinish = (values: IFinishEvent) => {
    console.log(`form values: `, values)
  }
  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>注册用户</Title>
      </Space>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名' },
            {
              type: 'string',
              min: 3,
              max: 20,
              message: '用户名长度为3位到20位',
            },
            {
              pattern: /^[a-zA-Z0-9_]+$/,
              message: '用户名只能由字母、数字、下划线组成',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="昵称" name="nickName">
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="confirmPassword"
          dependencies={['password']} // 依赖password字段, 当password字段变化时, 会重新触发validator校验
          rules={[
            { required: true, message: '请输入确认密码' },
            // 自定义校验规则
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('两次输入的密码不一致')
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATH}>已有账户? 登录</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
interface IFinishEvent {
  [key: string]: string
}
export default Register
