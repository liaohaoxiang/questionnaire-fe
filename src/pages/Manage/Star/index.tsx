/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Spin } from 'antd'

const { Title } = Typography
import styles from '../common.module.scss'

import QuestionCard from '@components/QuestionCard'
import ListSearch from '@components/ListSearch'
import useSearchQuestion from '@hooks/useSearchQuestion'

const Star: FC = () => {
  useTitle('我的收藏') // 设置标题
  // const [questions, setQuestions] = useState(MOCK_QUESTION.filter(question => question.isStar))
  const { loading, data = {} } = useSearchQuestion({ isStar: true })
  const { list: questions = [], total = 0 } = data
  return (
    <>
      <div className={styles.list}>
        <div className={styles.header}>
          <div className={styles.left}>
            <Title level={3}>收藏列表</Title>
          </div>
          <div className={styles.right}>
            <ListSearch />
          </div>
        </div>
        <div className={styles.content}>
          {loading && <Spin size="large" />}
          {!loading && questions.length === 0 ? (
            <Empty description="暂无数据" />
          ) : (
            questions.map((question: any) => {
              const { _id } = question
              return <QuestionCard key={_id} {...question} />
            })
          )}
        </div>
        <div className={styles.footer}>分页</div>
      </div>
    </>
  )
}

export default Star
