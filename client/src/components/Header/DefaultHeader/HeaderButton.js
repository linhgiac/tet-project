import React from 'react';
import classNames from 'classnames';
import { Button } from 'antd';

import styles from '../Header.module.scss';

const HeaderButton = ({ className, ...props }) => {
    return (
        <div className={classNames(styles.button)}>
            <Button
                type="text"
                size="medium"
                className={classNames('mx-1', { [styles['text-btn']]: true })}>
                <a
                    className={styles.text}
                    href="/login">
                    Login
                </a>
            </Button>
            <Button
                type="primary"
                size="medium">
                <a
                    className={styles.text}
                    href="/signup">
                    Signup
                </a>
            </Button>
        </div>
    );
};

export default HeaderButton;
