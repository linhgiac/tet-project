import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import Content from '../../components/Content/Content';
import { Tabs } from 'antd';

const TemplatesTabs = ({ activeKey }) => {
    const navigate = useNavigate();
    const items = [
        {
            key: 'explore',
            label: `Explore`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: 'business-templates',
            label: `Business & Meetings`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: 'education-templates',
            label: `Education`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: 'quiz-templates',
            label: `Quizzes`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: 'icebreakers-templates',
            label: `Icebreakers`,
            children: `Content of Tab Pane 1`,
            disabled: true,
        },
        {
            key: 'poll-templates',
            label: `Polls`,
            children: `Content of Tab Pane 1`,
            disabled: true,
        },
        {
            key: 'survey-templates',
            label: `Surveys`,
            children: `Content of Tab Pane 1`,
            disabled: true,
        },
        {
            key: 'game-templates',
            label: `Fun & Games`,
            children: `Content of Tab Pane 1`,
            disabled: true,
        },
        {
            key: 'word-cloud-templates',
            label: `Word Clouds`,
            children: `Content of Tab Pane 1`,
            disabled: true,
        },
    ];
    const changeTabHandler = key => {
        if (key !== 'explore') {
            navigate(`/app/templates/${key}`);
        }
        console.log('key :>> ', key);
    };
    return (
        <Tabs
            defaultActiveKey={activeKey}
            items={items}
            onChange={changeTabHandler}
            tabBarStyle={{ fontWeight: '600', fontSize: '16px' }}
        />
    );
};

const TemplatesContent = ({ activeKey }) => {
    return (
        <Content className={classNames('h-full p-4')}>
            <h2>Templates</h2>
            <TemplatesTabs activeKey={activeKey} />
        </Content>
    );
};

export default TemplatesContent;
