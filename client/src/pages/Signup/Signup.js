import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Signup.module.scss';
import classNames from 'classnames';

import { Button } from 'antd';
import SignupForm from './SignupForm';

const Signup = () => {
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
                <div className={classNames('text-5xl font-bold mb-12')}>
                    Create a free account
                </div>
                <div className="mx-28">
                    <div
                        className={classNames(
                            'flex flex-col',
                            styles['third-party-signup-btn']
                        )}>
                        <Button
                            type="primary"
                            className={classNames(
                                styles['button'],
                                styles['primary-btn']
                            )}>
                            Signup with Facebook
                        </Button>
                        <Button className={classNames(styles['button'])}>
                            Signup with Google
                        </Button>
                    </div>
                    <SignupForm />
                    <div className={classNames('mt-8 font-bold text-xl')}>
                        Already have an account?{' '}
                        <a
                            href="/login"
                            style={{ color: '#196CFF' }}
                            className="no-underline">
                            Log in
                        </a>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
