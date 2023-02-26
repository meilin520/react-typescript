import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import './App.scss'

const App: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(import.meta.env)
  },[])
  return (
    <Outlet />
  )
}

export default App
