import type { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div className="BaseLayout">
            主入口页面
            <div className="view">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;