import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const WebNav = () => {
    return (
        <ul className='d-flex gap-3 py-3'>
            <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Desktop</Link></li>
            <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Laptop</Link></li>
            <div className='list-unstyled adnan position-relative d-inline'>
                <Link className='text-decoration-none text-black py-3'>Component</Link>
                <ul className='p-0 d-none joy bg-primary position-absolute z-1'>
                    <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Processor</Link></li>
                    <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Cpu Cooler</Link></li>
                    <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Motherboard</Link></li>
                    <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Graphics Card</Link></li>
                </ul>
            </div>
            <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Monitor</Link></li>
            <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Ups</Link></li>
            <li className='list-unstyled'><Link className='text-decoration-none text-black py-3'>Phone</Link></li>
        </ul>
    );
};

export default WebNav;