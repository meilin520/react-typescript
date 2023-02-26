import type { FC } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from './components/ParticlesComponent';
import LoginForm from './components/LoginForm';
import './index.scss';

const BaseLayout: FC = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        let token = sessionStorage.getItem("token");
        if(token) navigate("/");
    })
    return (
        <div className="BaseLayout">
            <ParticlesComponent/>
            <LoginForm />
        </div>
    )
}

export default BaseLayout;