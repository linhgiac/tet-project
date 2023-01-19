import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div>
            <div className={styles.logo}> Logo</div>
            <div className={styles.content}> Content</div>
            <div className={styles.button}>Button</div>
        </div>
    );
};

export default Header;
