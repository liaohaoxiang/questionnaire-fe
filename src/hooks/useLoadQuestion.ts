import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'

import { getQuestion } from '@api/getQuestion'

const useLoadQuestion = () => {
  const { id = '' } = useParams() // 获取动态路由参数
  async function fetchData() {
    const res = await getQuestion(id)
    return res
  }
  const { loading, data: question, error } = useRequest(fetchData)

  return { loading, question, error }
}

export default useLoadQuestion
