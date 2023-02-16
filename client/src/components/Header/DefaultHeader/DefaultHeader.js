import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { Button } from 'antd';

import HeaderButton from './HeaderButton';
import HeaderProfile from './HeaderProfile';
import styles from '../Header.module.scss';
import { UserProvider } from '../../../App';
import Header from '../Header';

const DefaultHeader = () => {
    const navigate = useNavigate();
    const [currentPath, setCurrentPath] = useState('/');
    const [userState, setLoginState] = useContext(UserProvider);

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, [navigate]);

    useEffect(() => {
        console.log('currentPath :>> ', currentPath);
    }, [currentPath]);
    return (
        <Header>
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
                    {currentPath === '/' ? (
                        <Button
                            type="primary"
                            className={classNames(
                                'button primary-btn',
                                'mr-10 mb-0'
                            )}>
                            <a
                                className={styles.text}
                                href="/app">
                                My Presentation
                            </a>
                        </Button>
                    ) : (
                        <HeaderProfile />
                    )}
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
        </Header>
    );
};

export default DefaultHeader;
