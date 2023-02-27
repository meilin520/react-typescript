import { useEffect, useState } from 'react'
import type { FC } from 'react'
import { Button } from 'antd'
import reactLogo from '../../assets/images/react.svg';
import './index.scss';

const Home: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log(import.meta.env)
  },[])
  return (
    <div className="Home">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://www.redux.org.cn" target="_blank">
            <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" className='logo' alt='Redux logo' />
          </a>
          <a href="https://ant.design/index-cn" target="_blank">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" className='logo' alt='Ant Design logo' />
          </a>
        </div>
        <h1>Vite + React + Redux + TypeScript + Ant Design</h1>
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