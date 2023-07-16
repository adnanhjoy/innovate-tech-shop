import React from 'react';

const CompareProducts = () => {
    return (
        <div className='ms-5'>
            <div className='bg-warning-subtle px-5 py-3 rounded text-center shadow-lg'>
                <p className='fw-bold'>Compare Products</p>
                <p>Choose Two Products to Compare</p>
                <input className='mb-2 p-2 rounded border border-0 w-100' placeholder='search and select product' type="text" name="" id="" />
                <input className='mb-2 p-2 rounded border border-0 w-100' placeholder='search and select product' type="text" name="" id="" />
                <input className='mb-2 py-2 rounded border border-0 btn btn-primary d-block w-100' type="submit" name="" id="" />
            </div>
        </div>
    );
};

export default CompareProducts;