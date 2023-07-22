import React from 'react';
import Index from '../../components/home/Banner/Index';
import Marquee from '../../components/home/Marquee/Marquee';
import FeatureCategory from '../../components/home/featureCategory/FeatureCategory';

const Home = () => {
    return (
        <div className='container'>
            <Index/>
            <Marquee/>
            <FeatureCategory/>
        </div>
    );
};

export default Home;