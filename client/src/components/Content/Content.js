import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

const Content = ({ className, children }) => {
    return (
        <Layout.Content
            style={{
                width: '100%',
                padding: '16px',
                backgroundColor: '#fff',
            }}>
            <div className={classNames(className)}>{children}</div>
        </Layout.Content>
    );
};

export default Content;
