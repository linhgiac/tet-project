import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Login.module.scss';
import classNames from 'classnames';

import { Button } from 'antd';
import LoginForm from './LoginForm';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className={classNames('py-8 px-4 flex flex-row justify-center')}>
            <div className={classNames('max-w-xl mx-28 w-full text-center')}>
                <div
                    onClick={() => {
                        navigate('/');
                    }}
                    className={styles.logo}>
                    Logo
                </div>
                <div className={'mb-8'}>
                    <div className="mb-4 text-5xl font-bold">Welcome back!</div>
                    <div className={classNames('text-xl')}>
                        Log in to your Mentimeter account
                    </div>
                </div>

                <div className="mx-28">
                    <div
                        className={classNames(
                            'flex flex-col',
                            styles['third-party-login-btn']
                        )}>
                        <Button
                            type="primary"
                            className={classNames('button', 'primary-btn')}>
                            Login with Facebook
                        </Button>
                        <Button className={classNames('button')}>
                            Login with Google
                        </Button>
                    </div>
                    <LoginForm />
                    <div className={classNames('mt-8 font-bold text-xl')}>
                        New to Mentimeter?{' '}
                        <a
                            href="/signup"
                            style={{ color: '#196CFF' }}
                            className="no-underline">
                            Sign up now
                        </a>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
