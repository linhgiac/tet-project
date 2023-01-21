import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

import HeaderButton from './HeaderButton';
import HeaderProfile from './HeaderProfile';
import { UserProvider } from '../../App';

const Header = () => {
    const navigate = useNavigate();
    const [userState, setLoginState] = useContext(UserProvider);
    return (
        <>
            {userState.isLogged ? (
                <div
                    className={classNames(
                        'h-16 px-10',
                        'flex flex-row items-center justify-between',
                        styles['container']
                    )}>
                    <div
                        className={styles.logo}
                        onClick={() => navigate('/')}>
                        {' '}
                        Logo
                    </div>
                    <HeaderProfile />
                </div>
            ) : (
                <div
                    className={classNames(
                        'h-16',
                        'flex flex-row items-center justify-around',
                        styles['container']
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
            )}
        </>
    );
};

export default Header;
