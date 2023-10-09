import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import axios from 'axios'

import styles from './index.module.scss'

import { MANAGE_LIST_PATH } from '@router/index'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  useEffect(() => {
    axios.get('api/test').then(res => console.log(res))
  }, [])

  const navigate = useNavigate() // 通过useNavigate()跳转到指定路由
  const handleLogin = () => {
    navigate(MANAGE_LIST_PATH)
  }
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 万份, 发布问卷 98万份, 收到答卷 2万份
        </Paragraph>
        <div>
          <Button type="primary" onClick={handleLogin}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
