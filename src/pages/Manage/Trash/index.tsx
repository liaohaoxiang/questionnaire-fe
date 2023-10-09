import { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Spin } from 'antd'

import styles from '../common.module.scss'
import TrashTable from './TrashTable'
import ListSearch from '@components/ListSearch'

import useSearchQuestion from '@hooks/useSearchQuestion'

const { Title } = Typography

const Trash: FC = () => {
  useTitle('回收站') // 设置标题

  const { loading, data = {} } = useSearchQuestion({ isDeleted: true })
  const { list = [], total = 0 } = data
  return (
    <>
      <div className={styles.list}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Title level={3}>回收站</Title>
          </div>
          <div className={styles.right}>
            <ListSearch />
          </div>
        </div>
        <div className={styles.content}>
          {loading && <Spin size="large" />}
          {!loading && <TrashTable questions={list} />}
        </div>
        <div className="footer">分页</div>
      </div>
    </>
  )
}

export default Trash
