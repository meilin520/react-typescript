import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import App from './App'
import './index.scss'
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import theme from '@/theme';

//注意: ConfigProvider 组件的层级应该在页面组件最上级包括路由组件

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ConfigProvider>

  </React.StrictMode>,
)
