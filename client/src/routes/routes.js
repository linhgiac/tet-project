import { get } from 'lodash';

import { routesConfigs, appRoutesConfigs } from '../configs/routes';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import Presentation from '../pages/Presentation/Presentation';
import DefaultHeader from '../components/Header/DefaultHeader/DefaultHeader';
import PresentationHeader from '../components/Header/PresentationHeader/PresentationHeader';

//Pages

export const publicRoutes = [
    {
        path: routesConfigs.home,
        component: (
            <>
                <DefaultHeader />
                <Home />
            </>
        ),
    },
    {
        path: routesConfigs.login,
        component: <Login />,
    },
    {
        path: routesConfigs.signup,
        component: <Signup />,
    },
];

export const appRoutes = [
    { path: get(appRoutesConfigs, 'dashboard'), component: <Dashboard /> },
    {
        path: get(appRoutesConfigs, 'presentation'),
        component: (
            <>
                <PresentationHeader />
                <Presentation />
            </>
        ),
    },
];
