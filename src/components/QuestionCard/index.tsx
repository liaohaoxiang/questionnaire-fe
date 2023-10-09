import { FC } from 'react'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'

import { QUESTION_EDIT_PATH, QUESTION_STATISTICS_PATH } from '@router/index'

import styles from './style.module.scss'

const { confirm } = Modal

const QuestionCard: FC<IQuestionCardProps> = ({
  _id,
  title,
  isPublish,
  isStar,
  answerCount,
  createdAt,
}) => {
  const navigate = useNavigate()
  const handleCopyQuestion = () => {
    message.success('复制成功')
  }
  const handleDeleteQuestion = () => {
    confirm({
      title: '是否删除该问卷',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        message.success('删除成功')
      },
    })
  }
  return (
    <div className={styles['question__card']}>
      <div className={styles['question__header']}>
        <Link
          to={
            isPublish
              ? `${QUESTION_STATISTICS_PATH}/${_id}`
              : `${QUESTION_EDIT_PATH}/${_id}`
          }
        >
          <Space>
            {isStar && <StarOutlined style={{ color: 'red' }} />}
            {title}
          </Space>
        </Link>
        <div className={styles['question__header--publish']}>
          <Space>
            <Tag
              icon={isPublish ? <CheckCircleOutlined /> : <SyncOutlined spin />}
              color={isPublish ? 'success' : ''}
            >
              {isPublish ? '已发布' : '未发布'}
            </Tag>
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '18px' }} />

      <div className={styles['question__buttons']}>
        <Space>
          <Button
            icon={<EditOutlined />}
            type="default"
            size="middle"
            onClick={() => navigate(`${QUESTION_EDIT_PATH}/${_id}`)}
          >
            编辑问卷
          </Button>
          <Button
            icon={<LineChartOutlined />}
            type="default"
            size="middle"
            onClick={() => navigate(`${QUESTION_STATISTICS_PATH}/${_id}`)}
            disabled={!isPublish}
          >
            问卷统计
          </Button>
        </Space>

        <Space>
          <Button icon={<StarOutlined />} type="default" size="middle">
            {isStar ? '取消' : '收藏'}
          </Button>
          <Popconfirm
            title="是否复制该问卷"
            okText="确定"
            cancelText="取消"
            onConfirm={handleCopyQuestion}
          >
            <Button icon={<CopyOutlined />} type="default" size="middle">
              复制
            </Button>
          </Popconfirm>

          <Button
            icon={<DeleteOutlined />}
            type="default"
            size="middle"
            onClick={handleDeleteQuestion}
          >
            删除
          </Button>
        </Space>
      </div>
    </div>
  )
}
interface IQuestionCardProps {
  _id: string
  title: string
  isPublish: boolean
  isStar: boolean
  answerCount?: number
  createdAt?: string
}

export default QuestionCard
