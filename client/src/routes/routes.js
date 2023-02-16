import { get } from 'lodash';

import { routesConfigs, appRoutesConfigs } from '../configs/routes';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import Templates from '../pages/Template/Templates';
import Tutorials from '../pages/Tutorials/Tutorials';

//Pages

export const publicRoutes = [
    { path: routesConfigs.home, component: <Home /> },
    { path: routesConfigs.login, component: <Login /> },
    { path: routesConfigs.signup, component: <Signup /> },
];

export const appRoutes = [
    { path: get(appRoutesConfigs, 'dashboard'), component: <Dashboard /> },
    {
        path: get(appRoutesConfigs, ['templates', 'templates']),
        component: <Templates activeKey={'explore'} />,
    },
    {
        path: get(appRoutesConfigs, ['templates', 'business-templates']),
        component: <Templates activeKey={'business-templates'} />,
    },
    {
        path: get(appRoutesConfigs, ['templates', 'education-templates']),
        component: <Templates activeKey={'education-templates'} />,
    },
    {
        path: get(appRoutesConfigs, ['templates', 'quiz-templates']),
        component: <Templates activeKey={'quiz-templates'} />,
    },
    { path: appRoutesConfigs.tutorials, component: <Tutorials /> },
];
