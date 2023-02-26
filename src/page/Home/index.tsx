import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button } from 'antd'
import reactLogo from '@/assets/react.svg'

const Home: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(import.meta.env)
  },[])
  return (
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
  )
}

export default Home;