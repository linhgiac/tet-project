import React from 'react';
import { Layout } from 'antd';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider, Content } = Layout;
const Templates = () => {
    return (
        <div>
            <Layout>
                <Sider width={218}>
                    <PresentationMenu selectedKey={'templates'} />
                </Sider>
                <Content></Content>
            </Layout>
        </div>
    );
};

export default Templates;
