import React from 'react';
import TopNav from '../components/header/topNav/TopNav';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/header/menuBar/NavBar';
import Footer from '../components/footer/Footer';
import BottomNav from '../components/header/bottomNav/BottomNav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <BottomNav></BottomNav>
            <Footer></Footer>
        </div>
    );
};

export default Main;