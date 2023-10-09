import './App.css'

import { RouterProvider } from 'react-router-dom'

import router from './router' // 路由配置

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
