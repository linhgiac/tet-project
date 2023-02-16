import React from 'react';
import { Table, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    EllipsisOutlined,
    PlayCircleOutlined,
    MobileOutlined,
    VerticalAlignBottomOutlined,
    TeamOutlined,
    ShareAltOutlined,
    EditOutlined,
    FolderOutlined,
    CopyOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

const TableActionMenu = () => {
    const items = [
        {
            label: 'Present',
            key: '0',
            icon: <PlayCircleOutlined />,
        },
        {
            label: 'Open Mentimode',
            key: '1',
            icon: <MobileOutlined />,
        },
        {
            label: 'View Result',
            key: '2',
            icon: <VerticalAlignBottomOutlined />,
        },
        {
            type: 'divider',
        },
        {
            label: 'Invite collabrators',
            key: '3',
            icon: <TeamOutlined />,
        },
        {
            label: 'Share',
            key: '4',
            icon: <ShareAltOutlined />,
        },
        {
            type: 'divider',
        },
        {
            label: 'Rename',
            key: '5',
            icon: <EditOutlined />,
        },
        {
            label: 'Move to folder',
            key: '6',
            icon: <FolderOutlined />,
        },
        {
            label: 'Duplicate',
            key: '7',
            icon: <CopyOutlined />,
        },
        {
            type: 'divider',
        },
        {
            label: <div style={{ color: 'red' }}>Delete</div>,
            key: '8',
            icon: <DeleteOutlined style={{ color: 'red' }} />,
        },
    ];
    return (
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}>
            <div>
                <EllipsisOutlined />
            </div>
        </Dropdown>
    );
};
const DashboardTable = () => {
    const navigate = useNavigate()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record, index) => {
                return (
                    <div
                        onClick={() => {
                            navigate(`/app/presentation/${record.owner}/${record.id}/edit`)
                        }}>
                        {text}
                    </div>
                );
            },
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            responsive: ['xl'],
        },
        {
            title: 'Modified',
            dataIndex: 'modified',
            sorter: () => {},
        },
        {
            title: 'Create',
            dataIndex: 'create',
            responsive: ['xl'],
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: () => <TableActionMenu />,
        },
    ];

    const data = [];
    for (let i = 0; i < 5; i++) {
        data.push({
            key: i,
            id: 1,
            name: `Edward King ${i}`,
            owner: 'me',
            modified: Date.now(),
            create: Date.now(),
        });
    }
    const selectHandler = (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        );
    };
    return (
        <Table
            rowSelection={{ type: 'checkbox', onChange: { selectHandler } }}
            columns={columns}
            dataSource={data}
        />
    );
};

export default DashboardTable;
