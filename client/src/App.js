import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

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
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/signup"
                            element={<Signup />}
                        />
                    </Routes>
                </div>
            </Router>
        </UserProvider.Provider>
    );
}

export default App;
