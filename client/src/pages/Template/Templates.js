import React from 'react';
import { Layout } from 'antd';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';
import TemplatesContent from './TemplatesContent';

const { Sider } = Layout;
const Templates = ({ activeKey }) => {
    return (
        <Layout style={{ height: '100%' }}>
            <Sider
                width={218}
                breakpoint="lg"
                collapsedWidth={0}>
                <PresentationMenu selectedKey={'templates'} />
            </Sider>
            <TemplatesContent activeKey={activeKey} />
        </Layout>
    );
};

export default Templates;
