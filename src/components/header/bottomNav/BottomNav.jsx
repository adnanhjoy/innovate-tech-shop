import React from 'react';
import { FaHome, FaLaptopMedical, FaUserAlt } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className='fixed-bottom bg-black-100 d-flex justify-content-between align-itemx-center px-3 d-md-none py-2'>
            <Link to='/' className='text-center text-decoration-none'>
                <FaHome className='fs-5 text-white'></FaHome>
                <p className='fs-xs text-secondary m-0'>Home</p>
            </Link>
            <Link className='text-center text-decoration-none'>
                <MdFlashOn className='fs-5 text-white'></MdFlashOn>
                <p className='fs-xs text-secondary m-0'>Deal</p>
            </Link>
            <Link className='text-center text-decoration-none'>
                <FaLaptopMedical className='fs-5 text-white'></FaLaptopMedical>
                <p className='fs-xs text-secondary m-0'>Pc Build</p>
            </Link>
            <Link className='text-center text-decoration-none'>
                <HiMiniSquaresPlus className='fs-5 text-white'></HiMiniSquaresPlus>
                <p className='fs-xs text-secondary m-0'>Compare</p>
            </Link>
            <Link className='text-center text-decoration-none'>
                <FaUserAlt className='fs-5 text-white'></FaUserAlt>
                <p className='fs-xs text-secondary m-0'>Account</p>
            </Link>
        </div>
    );
};

export default BottomNav;