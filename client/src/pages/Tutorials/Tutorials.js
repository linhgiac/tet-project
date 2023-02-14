import React from 'react';
import { Layout } from 'antd';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider, Content } = Layout;
const Tutorials = () => {
    return (
        <Layout>
            <Sider width={218}>
                <PresentationMenu selectedKey={'tutorials'} />
            </Sider>
            <Content></Content>
        </Layout>
    );
};

export default Tutorials;
