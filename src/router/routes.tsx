// 路由表
import type { RouteObject } from 'react-router-dom'
import React from 'react';

// 首页及登录页面需要直接加载
import MainLayout from '@/layout/MainLayout';
import BaseLayout from '@/layout/BaseLayout';

// 采用懒加载提高用户体验
const Home = React.lazy(() => import('@/page/Home'));
const ArticlesList = React.lazy(() => import( '@/page/Articles/ArticlesList'));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'ArticlesList',
                element: <ArticlesList />,
            }
        ]
    },
    {
        path: "/login",
        element: <BaseLayout />,
    }
]

export default routes;