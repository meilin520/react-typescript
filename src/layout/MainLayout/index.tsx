import React, { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getSession, removeSession, setSession } from "@/utils/tools";
import { Layout, Menu, theme, Dropdown, Space, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, AppstoreOutlined, UserOutlined, VideoCameraOutlined, MailOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import "./index.scss";
import { ItemType } from "antd/es/menu/hooks/useItems";
import PropTypes from 'prop-types'
const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path?: string|null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  } as MenuItem;
}

// 菜单列表
const menuItems: MenuProps['items'] = [
  getItem('首页', '0',  '/', <VideoCameraOutlined />,),
  getItem('文章管理', 'sub1', null, <MailOutlined />, [
    getItem('文章列表', '1', '/ArticlesList'),
    getItem('文章分类', '2'),
    getItem('文章标签', '3'),
  ]),
  getItem('图片管理', 'sub2', null, <AppstoreOutlined />, [
    getItem('图片列表', '4'),
  ]),
];

// 设置列表
const items: MenuProps['items'] = [
  {
    key: 'username',
    label: 'Admin'
  },
  {
    key: 'loginout',
    label: "退出登录",
  },
]

const rootSubmenuKeys = ['sub1', 'sub2'];

const MainLayout: React.FC = () => {

  const _defaultSelectedKeys = getSession('defaultSelectedKeys')||['0'];

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>(_defaultSelectedKeys);

  const navigate = useNavigate();

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  useEffect(() => {
    let _token = getSession("token");
    if (!_token) navigate("/login");
  }, [])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const onMenuClick = ({key, keyPath,item}: any): void => {
    console.log(key, keyPath,item);
    
    setDefaultSelectedKeys([key]);
    setSession('defaultSelectedKeys', [key]);
    item?.props?.path&&navigate(item.props.path)
  }

  const onDropDownClick: MenuProps['onClick'] = ({ key }) => {
    console.info(`Click on item ${key}`);
    if(key==='loginout'){
      removeSession('token');
      setTimeout(()=>{navigate("/login");}, 1500)
    }
  };

  return (
    <div className="MainLayout">
      <Layout className="main-layout">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="system-logo">
            {!collapsed?"Admin管理系统": "Admin"}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={defaultSelectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onClick={onMenuClick}
            items={menuItems}
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
            <Dropdown className="header-setting" menu={{ items, onClick: onDropDownClick }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar className="header-avatar" src="https://joesch.moe/api/v1/random" size={35} />
                  <strong>设置</strong>
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY: 'auto',
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default MainLayout;