import { FC } from 'react'
import useLoadingQuestion from '@hooks/useLoadQuestion'

const Edit: FC = () => {
  const { loading, question } = useLoadingQuestion()
  return (
    <div>
      <p>Edit Page</p>
      {loading ? <p>loading...</p> : <p>{JSON.stringify(question)}</p>}
    </div>
  )
}

export default Edit
