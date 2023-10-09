import { FC } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Space, Button, Divider, message } from 'antd'
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { useRequest } from 'ahooks'

import styles from './MangeLayout.module.scss'

import { createQuestion } from '@api/getQuestion'

const ManageLayout: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // const [loading, setLoading] = useState(false)

  // const handleCreate = async () => {
  //   setLoading(true)
  //   const res = await createQuestion()
  //   const { id } = res || {}
  //   if (id) {
  //     navigate(`/question/edit/${id}`)
  //     message.success('创建成功')
  //   }
  //   setLoading(false)
  // }

  // 用ahooks的useRequest来代替上面的代码,手动触发和回调展示
  const {
    loading,
    // error,
    run: handleCreate,
  } = useRequest(createQuestion, {
    manual: true,
    onSuccess: res => {
      const { id } = res || {}
      if (id) {
        navigate(`/question/edit/${id}`)
        message.success('创建成功')
      }
    },
  })
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreate}
            disabled={loading}
          >
            新建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => navigate('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => navigate('/manage/star')}
          >
            收藏问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => navigate('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
