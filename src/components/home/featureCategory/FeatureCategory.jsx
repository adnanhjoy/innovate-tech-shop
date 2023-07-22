import React from 'react';
import { FaTv } from "react-icons/fa";


const FeatureCategory = () => {
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h4>Featured Category</h4>
                <p>Get Your Desired Product from Featured Category!</p>
            </div>

            {/* category component */}
            <div className='row row-cols-3 row-cols-md-3 row-cols-lg-6 m-0'>
                {
                    Array.from({ length: 12 }).map((fcat, index) =>
                        <div key={index} className='col mb-3 p-1'>
                            <div className='rounded bg-light p-4 shadow-sm d-flex flex-column justify-content-center align-items-center' style={{ cursor: 'pointer' }}>
                                <FaTv className='fs-1'></FaTv>
                                <p className='m-0 mt-2'>LED TV</p>
                            </div>
                        </div>
                    )
                }
            </div>


        </div>
    );
};

export default FeatureCategory;