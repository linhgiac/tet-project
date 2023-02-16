import React from 'react';
import classNames from 'classnames';

import styles from './Header.module.scss';

const Header = ({ children }) => {
    return (
        <div className={classNames('h-16', styles['container'])}>
            {children}
        </div>
    );
};

export default Header;
