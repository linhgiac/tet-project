import React from 'react';
import classNames from 'classnames';
import Cookies from 'universal-cookie';
import axios from 'axios';

import { Button } from 'antd';

const HeaderProfile = () => {
    const handleLogout = async () => {
        const cookies = new Cookies();
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_HOST}/user/logout`
            );
            console.log('response', response);
            cookies.remove('accessToken');
            window.location.reload();
        } catch (error) {
            console.log('error', error);
        }
    };
    return (
        <Button
            type="primary"
            className={classNames('button primary-btn', 'mb-0')}
            onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default HeaderProfile;
