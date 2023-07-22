import React from 'react';
import TopNav from '../components/header/topNav/TopNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/menuBar/NavBar';
import Footer from '../components/footer/Footer';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;