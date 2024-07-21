import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx"
import Profile from "./pages/Profile.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Animals from "./pages/Animals.jsx"
import Shelters from "./pages/Shelters.jsx"
import WallOfFame from "./pages/WallOfFame.jsx"
import React, {useContext, useState} from 'react';
import {AuthContext} from './context/AuthContext';

function App() {
    const {isLoggedIn, stateChangeHandler} = useContext(AuthContext);

    return (
        <div className="page-container">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={isLoggedIn === true ? <Profile/> : <Navigate to="/signin"/>}/>
                    <Route path="/signin" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/animals" element={<Animals/>}/>
                    <Route path="/shelters" element={<Shelters/>}/>
                    <Route path="/walloffame" element={<WallOfFame/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
