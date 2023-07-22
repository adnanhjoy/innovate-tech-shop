import React from 'react';
import Index from '../../components/home/Banner/Index';
import Marquee from '../../components/home/Marquee/Marquee';
import FeatureCategory from '../../components/home/featureCategory/FeatureCategory';
import FeatureProduct from '../../components/home/FeatureProduct/FeatureProduct';

const Home = () => {
    return (
        <div className='container'>
            <Index/>
            <Marquee/>
            <FeatureCategory/>
            <FeatureProduct/>
        </div>
    );
};

export default Home;