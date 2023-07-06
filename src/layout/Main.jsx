import React from 'react';
import TopNav from '../components/header/topNav/TopNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;