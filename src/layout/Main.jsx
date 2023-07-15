import React from 'react';
import TopNav from '../components/header/topNav/TopNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/menuBar/NavBar';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;