import type { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

const LoginForm: FC = () => {
    const navigate: NavigateFunction = useNavigate();

    // 登录操作
    const onFinish = (values: any): void => {
        console.log('接收到的值',values)
        // 本地保存账号，拼接时间戳作为临时token
        sessionStorage.setItem('token', values.username + new Date().getTime());
        // 跳转首页
        navigate("/");
    }

    return (
        <div className='LoginForm'>
            <div className='title'>Admin管理系统</div>
            <div className='form'>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名称!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名称" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入用户密码!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="用户密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox className="login-form-checkbox">记住密码</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                        忘记密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block htmlType="submit" className="login-form-button">
                        登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;