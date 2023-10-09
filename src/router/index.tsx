import { createBrowserRouter } from 'react-router-dom'

import ManageLayout from '../layouts/ManageLayout'
import MainLayout from '../layouts/MainLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import ManageList from '../pages/Manage/List'
import ManageStar from '../pages/Manage/Star'
import ManageTrash from '../pages/Manage/Trash'
import QuestionEdit from '../pages/Question/Edit'
import QuestionStatistics from '../pages/Question/Statistics'

import FormDemo from '@components/FormDemo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // 一级路由
    children: [
      // 二级路由
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <ManageList />,
          },
          {
            path: 'star',
            element: <ManageStar />,
          },
          {
            path: 'trash',
            element: <ManageTrash />,
          },
        ],
      },
      {
        path: 'test', // 测试页面
        element: <FormDemo />,
      },
      {
        path: '*', // 404兜底
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <QuestionEdit />,
      },
      {
        path: 'statistics/:id',
        element: <QuestionStatistics />,
      },
    ],
  },
])

export default router

// pathnames
export const LOGIN_PATH = '/login'
export const HOME_PATH = '/'
export const REGISTER_PATH = '/register'

// manage
export const MANAGE_PATH = '/manage'
export const MANAGE_LIST_PATH = `${MANAGE_PATH}/list`

// question
export const QUESTION_PATH = '/question'
export const QUESTION_EDIT_PATH = `${QUESTION_PATH}/edit`
export const QUESTION_STATISTICS_PATH = `${QUESTION_PATH}/statistics`
