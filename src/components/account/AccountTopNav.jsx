import React from 'react';
import { FaAddressCard, FaElementor, FaHeart, FaHome, FaLaptop, FaLock, FaStar, FaUserAlt, FaWpforms } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AccountTopNav = () => {
    return (
        <div className='d-flex justify-content-around align-items-center mb-5'>
            <Link to='/account' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaHome className='text-secondary'></FaHome>
            </Link>
            <Link to='/account/order' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaAddressCard className='text-secondary'></FaAddressCard>
                <p className='text-secondary m-0'>Orders</p>
            </Link>
            <Link to='/account/edit-profile' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaUserAlt className='text-secondary'></FaUserAlt>
                <p className='text-secondary m-0'>Edit Account</p>
            </Link>
            <Link to='/account/change-password' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaLock className='text-secondary'></FaLock>
                <p className='text-secondary m-0'>Password</p>
            </Link>
            <Link to='/account/address' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaElementor className='text-secondary'></FaElementor>
                <p className='text-secondary m-0'>Addresses</p>
            </Link>
            <Link to='/account/savelist' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaHeart className='text-secondary'></FaHeart>
                <p className='text-secondary m-0'>Saved List</p>
            </Link>
            <Link to='/account/savepc' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaLaptop className='text-secondary'></FaLaptop>
                <p className='text-secondary m-0'>Saved Pc</p>
            </Link>
            <Link to='/account/starpoints' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaStar className='text-secondary'></FaStar>
                <p className='text-secondary m-0'>Star Points</p>
            </Link>
            <Link to='/account/store-credit' className='d-flex align-items-center text-decoration-none gap-2'>
                <FaWpforms className='text-secondary'></FaWpforms>
                <p className='text-secondary m-0'>Store Credit</p>
            </Link>
        </div>
    );
};

export default AccountTopNav;