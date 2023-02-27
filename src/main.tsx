import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from '@/router';
import '@/assets/style/reset.scss';
import App from './App'
import './index.scss'
import { ConfigProvider, Spin } from 'antd';
import 'antd/dist/reset.css';
import theme from '@/theme';
import store from '@/redux';

//注意: ConfigProvider 组件的层级应该在页面组件最上级包括路由组件

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <Suspense>
        <RouterProvider router={router} />
          <Provider store={store}>
            <App />
          </Provider>
      </Suspense>
    </ConfigProvider>

  </React.StrictMode>,
)
