import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  DesktopOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import "../css/main-layout.css";
import TaskContainer from "./TaskContainer";
import DisplayContainer from "./DisplayContainer";

const { Header, Sider, Content } = Layout;

const menuItems = {
  1: <TaskContainer />,
  2: <DisplayContainer />,
};

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [content, setContent] = useState(1);

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          className="side-menu"
          defaultSelectedKeys={["1"]}
          onClick={(e) => {
            setContent(e.key);
          }}
          items={[
            {
              key: "1",
              icon: <PlusCircleOutlined />,
              label: "Add new task",
            },
            {
              key: "2",
              icon: <DesktopOutlined />,
              label: "Display Task",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {menuItems[content]}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
