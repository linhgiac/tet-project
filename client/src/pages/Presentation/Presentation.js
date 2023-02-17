import React from 'react';
import classNames from 'classnames';
import { Button, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Content from '../../components/Content/Content';
import EditorOverview from '../../components/Page/Presentation/EditorOverview/EditorOverview';
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu';

const { Sider } = Layout;
const Presentation = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div
                className={classNames('h-14 px-4')}
                style={{ borderBottom: '1px rgb(231 243 235) solid' }}>
                <Button
                    className="button mb-0 mt-2"
                    type="primary"
                    icon={<PlusOutlined />}>
                    New slide
                </Button>
            </div>
            <Layout style={{ height: '100%' }}>
                <Content
                    breakpoint="lg"
                    collapsedWidth={0}>
                    <EditorOverview />
                </Content>
                <Sider
                    width={120}
                    style={{
                        backgroundColor: 'white',
                    }}
                    breakpoint="lg"
                    collapsedWidth={0}>
                    <div style={{ width: '104px', height: '104px' }}></div>
                </Sider>
            </Layout>
        </div>
    );
};

export default Presentation;
