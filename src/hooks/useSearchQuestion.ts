import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'

import { getQuestionList } from '@api/getQuestion'
import { LIST_SEARCH_KEY } from '@constant/index'

type OptionType = {
  keyword?: string
  isStar: boolean
  isDeleted: boolean
}

const useSearchQuestion = (option: Partial<OptionType> = {}) => {
  const { isStar = false, isDeleted = false } = option
  const [searchParams] = useSearchParams() // 获取url的querystring

  const keyword = searchParams.get(LIST_SEARCH_KEY) || ''

  const { loading, data, error } = useRequest(
    async () => {
      const res = await getQuestionList({ keyword, isStar, isDeleted })
      return res
    },
    {
      refreshDeps: [keyword], // 刷新的依赖项
    }
  )

  return { loading, data, error }
}

export default useSearchQuestion
