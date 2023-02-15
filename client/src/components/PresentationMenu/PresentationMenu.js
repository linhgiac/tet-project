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
                My Presentation
            </div>,
            'dashboard'
        ),
        getItem(
            <div className={classNames('font-semibold hover:opacity-60')}>
                Template
            </div>,
            'templates'
        ),
        getItem(
            <div className={classNames('font-semibold hover:opacity-60')}>
                Tutorial
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
