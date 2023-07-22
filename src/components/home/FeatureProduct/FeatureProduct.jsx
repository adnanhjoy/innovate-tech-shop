import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const FeatureProduct = () => {
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h4>Featured products</h4>
                <p>Check & Get Your Desired Product!</p>
            </div>

           
            <div className='row row-cols-2 row-cols-md-3 row-cols-lg-5 m-0'>
                {
                    Array.from({ length: 20 }).map((fcat, index) =>
                        <ProductCard/>
                    )
                }
            </div>


        </div>
    );
};

export default FeatureProduct;