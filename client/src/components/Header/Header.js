import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

import HeaderButton from './HeaderButton';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div
            className={classNames(
                'h-16',
                'flex flex-row items-center justify-around '
            )}>
            <div
                className={styles.logo}
                onClick={() => navigate('/')}>
                {' '}
                Logo
            </div>
            <div className={styles.content}> Content</div>
            <HeaderButton />
        </div>
    );
};

export default Header;
