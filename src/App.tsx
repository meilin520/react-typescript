import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button, ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import reactLogo from './assets/react.svg'
import './App.scss'

const App: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(import.meta.env)
  },[])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#eaff56',
        }
      }}
    >
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          <Button type="primary">Button</Button>
        </p>
        <p>
          {import.meta.env.APP_NAME}
        </p>
      </div>
    </ConfigProvider>
  )
}

export default App
