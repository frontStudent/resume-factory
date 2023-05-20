import {
    HomeOutlined,
    SettingOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
const items = [
    {
        label: '首页',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: '模板',
        key: 'template',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: '工作区',
        key: 'workSpace',
        icon: <SettingOutlined />,
    },
];
const TopGuide = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
        <Menu.Item style={{fontSize:'22px',fontWeight:'bold'}}>
            小贝简历
        </Menu.Item>
        {items.map(({ label, key, icon, disabled }, index) => (
            <Menu.Item key={key} disabled={disabled} style={index === 0 ? { marginLeft: '68%' } : {}}>
                {icon} {label}
            </Menu.Item>))}
    </Menu>
}
export default TopGuide;