import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Space, Form, Input, Button, Checkbox } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

import { REGISTER_PATH } from '@router/index'

const { Title } = Typography

// 记住我的账户和密码
const USERNAME_KEY = '__MATRIX_USERNAME'
const PASSWORD_KEY = '__MATRIX_PASSWORD'

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

const forgetUser = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

const getUserInfoFromStorage = () => {
  const username = localStorage.getItem(USERNAME_KEY)
  const password = localStorage.getItem(PASSWORD_KEY)
  return { username, password }
}

const Login: FC = () => {
  const [form] = Form.useForm() // 第三方hook, 关联form的数据
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage()
    form.setFieldsValue({ username, password })
  }, [form])

  // 提交表单触发
  const handleFinish = (values: IFinishEvent) => {
    console.log(`form values: `, values)
    const { username, password } = values
    if (values.remember) {
      rememberUser(username, password)
    } else {
      forgetUser()
    }
  }
  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <UserAddOutlined />
        </Title>
        <Title level={2}>用户登录</Title>
      </Space>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onFinish={handleFinish}
        initialValues={{ remember: true }} // 设置默认值
        form={form}
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
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 6, span: 18 }}
        >
          <Checkbox>记住用户和密码</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
          <Space size="large">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATH}>注册账户</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

interface IFinishEvent {
  [key: string]: string
}
export default Login
