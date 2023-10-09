import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import styles from './MainLayout.module.scss'

import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        <span>Matrix问卷 ©2023 Created by Holk</span>
      </Footer>
    </Layout>
  )
}

export default MainLayout
