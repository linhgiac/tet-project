import { Layout } from 'antd';
import React from 'react';

import DashboardContent from './DashboardContent';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider } = Layout;

const Dashboard = () => {
    return (
        <Layout style={{ height: '100%' }}>
            <Sider
                width={218}
                breakpoint="lg"
                collapsedWidth={0}>
                <PresentationMenu selectedKey={'dashboard'} />
            </Sider>
            <DashboardContent />
        </Layout>
    );
};

export default Dashboard;
