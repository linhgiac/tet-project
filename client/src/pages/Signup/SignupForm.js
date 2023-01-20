import React from 'react';
import classNames from 'classnames';

import styles from './Signup.module.scss';
import { Button, Form, Input } from 'antd';

const SignupForm = () => {
    const handleSubmit = () => {};
    return (
        <div className={classNames(styles['email-signup-container'])}>
            <div
                style={{ color: 'rgba(16, 24, 52, 0.5)', fontSize: '14px' }}
                className={classNames('mt-8 mb-4')}>
                or using email
            </div>
            <Form
                name="signupForm"
                layout="vertical"
                onFinish={handleSubmit}>
                <Form.Item
                    label={
                        <div className={styles['form-label']}>
                            First and last name
                        </div>
                    }
                    name="name"
                    rules={[
                        { required: true, message: 'Please input your name!' },
                    ]}
                    className={classNames(styles['form-item'])}>
                    <Input
                        size="large"
                        className="border-2"
                    />
                </Form.Item>
                <Form.Item
                    label={<div className={styles['form-label']}>Email</div>}
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                    ]}
                    className={classNames(styles['form-item'])}>
                    <Input
                        size="large"
                        className="border-2"
                    />
                </Form.Item>
                <Form.Item
                    label={<div className={styles['form-label']}>Password</div>}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    className={classNames(styles['form-item'])}>
                    <Input.Password
                        size="large"
                        className="border-2"
                    />
                </Form.Item>

                <Form.Item className={classNames(styles['form-item'])}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%' }}
                        className={classNames(
                            styles['button'],
                            styles['primary-btn']
                        )}>
                        Signup
                    </Button>
                </Form.Item>
            </Form>
            <div style={{ color: 'rgba(16, 24, 52, 0.5)', fontSize: '14px' }}>
                By signing up you accept our{' '}
                <a
                    href="/"
                    style={{ color: 'rgba(16, 24, 52, 0.5)' }}>
                    terms of use
                </a>{' '}
                and{' '}
                <a
                    href="/"
                    style={{ color: 'rgba(16, 24, 52, 0.5)' }}>
                    policies
                </a>
                .
            </div>
        </div>
    );
};

export default SignupForm;
