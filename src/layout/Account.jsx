import React from 'react';
import AccountTop from '../components/account/AccountTop';
import { Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div className='container  mx-auto'>
            <AccountTop/>
            <Outlet></Outlet>
        </div>
    );
};

export default Account;