import React from 'react';
import styles from './Signup.module.scss';
import classNames from 'classnames';

import { Button } from 'antd';
import SignupForm from './SignupForm';

const Signup = () => {
    return (
        <div className={classNames('px-8 py-4 flex flex-row justify-center')}>
            <div className={classNames('max-w-xl w-full text-center')}>
                <div>Logo</div>
                <div>Create a free account</div>
                <div
                    className={classNames(
                        'flex flex-col',
                        styles['third-party-signup-btn']
                    )}>
                    <Button type="primary">Signup with Facebook</Button>
                    <Button>Signup with Google</Button>
                </div>
                <SignupForm />
                <div>
                    Already have an account? <a href="/login">Log in</a>{' '}
                </div>
            </div>
        </div>
    );
};

export default Signup;
