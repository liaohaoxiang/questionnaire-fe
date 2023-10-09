import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './index.module.scss'
import { HOME_PATH } from '@router/index'

const Logo: FC = () => {
  return (
    <>
      <Link to={HOME_PATH} className={styles.container}>
        <img src="/favicon.ico" alt="logo" className={styles.logo} />
        <span className={styles.text}>Matrix问卷</span>
      </Link>
    </>
  )
}

export default Logo
