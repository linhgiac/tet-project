import React from 'react';
import { Avatar, Tooltip, Button, Dropdown } from 'antd';
import { LeftOutlined, ShareAltOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import Header from '../Header';
import { useNavigate } from 'react-router-dom';

const PresentationHeader = () => {
    const navigate = useNavigate();
    const title = 'My Presentation';

    const presentItems = [
        {
            key: 'openMentimode2',
            label: 'Open Mentimode',
        },
        {
            key: 'previewPresentation',
            label: 'Preview Presentation',
        },
    ];
    const presentItemClickHandler = e => {
        console.log('e :>> ', e);
    };
    return (
        <Header>
            <div
                className={classNames(
                    'h-full flex flex-row justify-between px-4'
                )}>
                <div className={classNames('flex flex-row items-center')}>
                    <Tooltip
                        placement="bottomLeft"
                        title="Back to My Presentations">
                        <LeftOutlined
                            style={{ fontSize: '20px', marginRight: '10px' }}
                            onClick={() => {
                                navigate('/app/dashboard');
                            }}
                        />
                    </Tooltip>
                    <div className={classNames('text-base font-semibold')}>
                        {title}
                    </div>
                </div>
                <div className={classNames('flex flex-row items-center')}>
                    <div>
                        <Avatar />
                    </div>
                    <Button
                        icon={<ShareAltOutlined />}
                        className="button mb-0 hidden lg:block mx-2">
                        Share
                    </Button>
                    <Dropdown.Button
                        className="button mb-0"
                        type="primary"
                        menu={{
                            items: presentItems,
                            onClick: presentItemClickHandler,
                        }}
                        onClick={() => {
                            console.log(' click Present:>> ');
                        }}>
                        Present
                    </Dropdown.Button>
                </div>
            </div>
        </Header>
    );
};

export default PresentationHeader;
