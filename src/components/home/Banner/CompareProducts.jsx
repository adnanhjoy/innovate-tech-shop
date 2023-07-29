import React from 'react';

const CompareProducts = () => {
    return (
        <div className='ms-lg-5 mt-4 mt-lg-0'>
            <div className='bg-warning-subtle px-md-5 px-4 py-3 rounded text-center shadow-lg'>
                <p className='fw-bold m-0'>Compare Products</p>
                <p className='fs-sm'>Choose Two Products to Compare</p>
                <input className='mb-2 p-2 rounded border border-0 w-100' placeholder='search and select product' type="text" name="" id="" />
                <input className='mb-2 p-2 rounded border border-0 w-100' placeholder='search and select product' type="text" name="" id="" />
                <input className='mb-2 py-2 rounded border border-0 btn btn-primary d-block w-100' type="submit" name="" id="" />
            </div>
        </div>
    );
};

export default CompareProducts;