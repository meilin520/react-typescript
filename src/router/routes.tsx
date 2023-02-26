// 路由表
import type { RouteObject } from 'react-router-dom'
import type { FC, ReactNode } from 'react';
import MainLayout from 'layout/MainLayout';
import BaseLayout from 'layout/BaseLayout';

import Home from '@/page/Home';

const LoadElement = (Element: FC): ReactNode =>{
    return (
        <Element />
    )
}

const routes: RouteObject[] = [
    {
        path: "/",
        element: LoadElement(MainLayout),
        children: [
            {
                path: '',
                element: <Home />,
            }
        ]
    },
    {
        path: "/login",
        element: LoadElement(BaseLayout),
    }
]

export default routes;