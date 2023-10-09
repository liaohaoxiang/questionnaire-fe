import { FC } from 'react'
import useLoadingQuestion from '@hooks/useLoadQuestion'

const Statistics: FC = () => {
  const { loading, question } = useLoadingQuestion()
  return (
    <div>
      <p>Statistics Page</p>
      {loading ? <p>loading...</p> : <p>{JSON.stringify(question)}</p>}
    </div>
  )
}

export default Statistics
