import React from 'react';
import classNames from 'classnames';

import styles from './Login.module.scss';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {};

    return (
        <div className={classNames(styles['email-login-container'])}>
            <div
                style={{ color: 'rgba(16, 24, 52, 0.5)', fontSize: '14px' }}
                className={classNames('mt-8 mb-4')}>
                or using email
            </div>
            <Form
                name="loginForm"
                layout="vertical"
                onFinish={handleSubmit}>
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
                        Login
                    </Button>
                </Form.Item>
                <div
                    style={{ fontSize: '14px' }}
                    onClick={() => navigate('/forgot-password')}
                    className="hover:cursor-pointer">
                    Forgot password?
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;
