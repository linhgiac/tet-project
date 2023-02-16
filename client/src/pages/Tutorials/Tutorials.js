import React from 'react';
import { Layout } from 'antd';

import TutorialsContent from './TutorialsContent';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider } = Layout;
const Tutorials = () => {
    return (
        <Layout style={{ height: '100%' }}>
            <Sider
                width={218}
                breakpoint="lg"
                collapsedWidth={0}>
                <PresentationMenu selectedKey={'tutorials'} />
            </Sider>
            <TutorialsContent />
        </Layout>
    );
};

export default Tutorials;
