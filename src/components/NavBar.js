import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Button } from "@mui/material";

const Navbar = (props) => {
  return (
    <>
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        HackITT
      </Menu.Item>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
        
    </Menu>
    </>
  );
};

export default Navbar;