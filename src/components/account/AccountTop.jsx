import React from 'react';
import { FaUser } from 'react-icons/fa';

const AccountTop = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-2'>
                    <div className='border rounded-circle d-flex justify-content-center align-items-center' style={{height:'80px', width:'80px'}}>
                        <FaUser className='fs-1 text-secondary'></FaUser>
                    </div>
                    <div>
                        <p className='m-0'>Hello,</p>
                        <h6>Adnan Hossain</h6>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='text-center border-start px-5'>
                        <p className='m-0 text-secondary'>Star Points</p>
                        <h4 className='text-orange'>0</h4>
                    </div>
                    <div className='text-center border-start px-5'>
                        <p className='m-0 text-secondary'>Store Credit</p>
                        <h4 className='text-orange'>0</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountTop;