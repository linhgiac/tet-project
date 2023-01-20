import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
    return (
        <Router>
            <div className="App">
                {window.location.href.includes('signup') &&
                    window.location.href.includes('login') && <Header />}
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
    );
}

export default App;
