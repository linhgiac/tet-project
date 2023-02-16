import { Menu } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PresentationMenu = ({ selectedKey, onClick }) => {
    const navigate = useNavigate();
    const getItem = (label, key, icon, children, type) => {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    };

    const items = [
        getItem(
            <div className={classNames('font-semibold hover:opacity-60')}>
                My Presentations
            </div>,
            'dashboard'
        ),
        getItem(
            <div className={classNames('font-semibold hover:opacity-60')}>
                Templates
            </div>,
            'templates'
        ),
        getItem(
            <div className={classNames('font-semibold hover:opacity-60')}>
                Tutorials
            </div>,
            'tutorials'
        ),
    ];

    const clickHandler = e => {
        navigate(`/app/${e.key}`);
    };
    return (
        <Menu
            
            style={{ height: '100%' }}
            items={items}
            defaultSelectedKeys={[selectedKey]}
            onClick={clickHandler}
        />
    );
};

export default PresentationMenu;
