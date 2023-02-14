import { Layout } from 'antd';
import React from 'react';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider, Content } = Layout;

const Dashboard = () => {
    return (
        <Layout>
            <Sider width={218}>
                <PresentationMenu selectedKey={'dashboard'} />
            </Sider>
            <Content></Content>
        </Layout>
    );
};

export default Dashboard;
