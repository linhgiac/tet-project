import React from 'react';
import { Button, Input, Select } from 'antd';
import classNames from 'classnames';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import Content from '../../components/Content/Content';
import DashboardTable from './DashboardTable';

const DashboardContent = () => {
    return (
        <Content className={classNames('p-8 h-full')}>
            <div>My Presentation</div>
            <div
                className={classNames(
                    'flex',
                    'flex-col-reverse',
                    'md:flex-row md:items-center md:justify-between'
                )}>
                <div className={classNames('md:flex md:flex-row')}>
                    <Button
                        icon={<PlusOutlined />}
                        className={'button primary-btn mr-2 mb-0 w-full'}
                        type="primary">
                        New Presentation
                    </Button>
                    <Button
                        icon={<PlusOutlined />}
                        className={'button default-btn mb-0 w-full'}
                        type="default">
                        New Folder
                    </Button>
                </div>
                <div
                    className={classNames(
                        'w-full py-4',
                        'md:w-2/5 md:flex md:flex-row '
                    )}>
                    <Input
                        className={classNames('input')}
                        prefix={<SearchOutlined />}
                        allowClear
                        placeholder="Type to search"
                    />
                    <Select
                        className={classNames(
                            'ml-2 hidden',
                            'lg:w-1/2 lg:block'
                        )}
                        size="large"
                        defaultValue="Show everything"
                        options={[
                            {
                                value: 'showEverything',
                                label: 'Show everything',
                            },
                            { value: 'ownedByMe', label: 'Owned by me' },
                            { value: 'sharedByMe', label: 'Shared by me' },
                            { value: 'sharedWithMe', label: 'Shared with me' },
                        ]}></Select>
                </div>
            </div>
            {/* <div>
                <DashboardTable />
            </div> */}
        </Content>
    );
};

export default DashboardContent;
