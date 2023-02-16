import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Header from './components/Header/Header';

import { publicRoutes, appRoutes } from './routes/routes';

export const UserProvider = createContext();

function App() {
    const cookies = new Cookies();
    const accessToken = cookies.get('accessToken');
    const userState = useState({
        accessToken,
        isLogged: accessToken ? true : false,
    });
    return (
        <UserProvider.Provider value={userState}>
            <Router>
                <div className="App">
                    {!window.location.href.includes('signup') &&
                        !window.location.href.includes('login') && <Header />}
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.component}
                                />
                            );
                        })}

                        {appRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.component}
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </UserProvider.Provider>
    );
}

export default App;
