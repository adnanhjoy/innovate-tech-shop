import React from 'react';
import Index from '../../components/home/Banner/Index';
import Marquee from '../../components/home/Marquee/Marquee';

const Home = () => {
    return (
        <div className='container'>
            <Index/>
            <Marquee/>
        </div>
    );
};

export default Home;