import React, { useEffect, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme, Dropdown, Space, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import "./index.scss";
const { Header, Sider, Content } = Layout;

const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

const MainLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const navigate = useNavigate();

    const {
        token: { colorBgContainer }
    } = theme.useToken();

    useEffect(()=>{
        let token = sessionStorage.getItem("token");
        if(!token) navigate("/login");
    })
    return (
        <div className="MainLayout">
        <Layout className="main-layout">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo">
                Omniverse
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: '0 16px', background: colorBgContainer }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                style: {
                    fontSize: "20px"
                },
                onClick: () => setCollapsed(!collapsed),
              })}
              <Dropdown className="header-setting" menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <Avatar src="https://joesch.moe/api/v1/random" size={35}/>
                    飞雪
                </Space>
                </a>
            </Dropdown>
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        </div>
    );
}

export default MainLayout;