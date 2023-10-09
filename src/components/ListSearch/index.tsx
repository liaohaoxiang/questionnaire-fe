import { FC, useState, ChangeEvent, useLayoutEffect } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

import { LIST_SEARCH_KEY } from '@/constant'

const { Search } = Input

const ListSearch: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  useLayoutEffect(() => {
    const keyword = searchParams.get(LIST_SEARCH_KEY) || ''
    if (keyword) {
      setSearchValue(keyword)
    }
  }, [searchParams])

  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSearch = (value: string) => {
    navigate({
      pathname,
      search: `${LIST_SEARCH_KEY}=${value}`,
    })
  }
  return (
    <>
      <Search
        size="large"
        placeholder="输入关键字搜索"
        allowClear
        value={searchValue}
        onChange={handleSearchChange}
        onSearch={handleSearch}
      />
    </>
  )
}

export default ListSearch
