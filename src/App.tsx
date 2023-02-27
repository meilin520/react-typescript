import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'

const App: FC = () => {
  return (
    <Outlet />
  )
}

export default App
