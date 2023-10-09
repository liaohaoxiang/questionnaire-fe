/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Spin } from 'antd'

const { Title } = Typography

import styles from '../common.module.scss'

import QuestionCard from '@components/QuestionCard'
import ListSearch from '@components/ListSearch'
import useSearchQuestion from '@hooks/useSearchQuestion'

const List: FC = () => {
  useTitle('我的问卷') // 设置标题
  const { loading, data = {} } = useSearchQuestion()
  const { list: questionList = [], total = 0 } = data

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>问卷列表</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && <Spin size="large" />}
        {!loading &&
          questionList.length > 0 &&
          questionList.map((question: any) => {
            const { _id } = question
            return <QuestionCard key={_id} {...question} />
          })}
      </div>
      <div className={styles.footer}>loadMore...上划加载更多</div>
    </div>
  )
}

export default List
