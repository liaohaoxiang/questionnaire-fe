import { useState } from 'react'
import { Tag, Table, Button, Space, Modal, Empty } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal

// import { MOCK_QUESTION } from '@mock/index.ts'
import styles from '../common.module.scss'

const MOCK_QUESTION_COLUMNS = [
  { title: '标题', dataIndex: 'title', key: 'title' },
  {
    title: '是否发布',
    dataIndex: 'isPublish',
    key: 'isPublish',
    render: (isPublish: boolean) => {
      return (
        <Tag color={isPublish ? 'processing' : ''}>
          {isPublish ? '已发布' : '未发布'}
        </Tag>
      )
    },
  },
  { title: '答卷数量', dataIndex: 'answerCount', key: 'answerCount' },
  { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
  {
    title: '是否星标',
    dataIndex: 'isStar',
    key: 'isStar',
    render: (isStar: boolean) => {
      return (
        <Tag color={isStar ? 'processing' : ''}>
          {isStar ? '星标问卷' : '非星标'}
        </Tag>
      )
    },
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrashTable = ({ questions }: any) => {
  const [selectedIds, setSelectedIds] = useState<React.Key[]>([]) // 选中的问卷id

  const handleDelete = () => {
    confirm({
      title: '确定删除这些问卷吗？',
      content: '删除后将无法恢复',
      okText: '确定删除',
      cancelText: '取消',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log('OK', selectedIds)
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }
  return (
    <>
      {questions.length === 0 ? (
        <Empty description="暂无数据" />
      ) : (
        <>
          <div className={styles.controller}>
            <Space>
              <Button type="primary" disabled={selectedIds.length === 0}>
                恢复
              </Button>
              <Button
                type="default"
                danger
                disabled={selectedIds.length === 0}
                onClick={handleDelete}
              >
                删除
              </Button>
            </Space>
          </div>
          <Table
            dataSource={questions}
            columns={MOCK_QUESTION_COLUMNS}
            rowKey={q => q._id} // 设置主键为_id
            rowSelection={{
              type: 'checkbox', // 设置Table可选操作为复选框
              onChange: (selectedRowKeys, selectedRows) => {
                setSelectedIds(selectedRowKeys)
              },
            }}
            pagination={false}
          ></Table>
        </>
      )}
    </>
  )
}

export default TrashTable
