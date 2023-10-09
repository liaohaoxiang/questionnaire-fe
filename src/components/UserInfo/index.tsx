import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '@router/index'

const UserInfo: FC = () => {
  // TODO: 对于已登录
  return <Link to={LOGIN_PATH}>登录</Link>
}

export default UserInfo
