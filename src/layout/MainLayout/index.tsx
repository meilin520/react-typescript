import { FC, useEffect, /*useMemo*/ } from "react";
// import { useState } from "react";
import { Outlet, /*Navigate,*/ useNavigate } from "react-router-dom";

const MainLayout: FC = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        let token = sessionStorage.getItem("token");
        if(!token) navigate("/login");
    })

    // const AuthPage: React.ReactNode = useMemo(()=>{
    //     let token = sessionStorage.getItem("token");
    //     if(token) {
    //         return (
    //             <div className="MainLayout">
    //                 主入口页面
    //                 <div className="view">
    //                     <Outlet />
    //                 </div>
    //             </div>
    //         )
    //     }else{
    //         return <Navigate to="/login" replace={true} />
    //     }
    // },[])

    // return AuthPage
    return (
        <div className="MainLayout">
            主入口页面
            <div className="view">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;