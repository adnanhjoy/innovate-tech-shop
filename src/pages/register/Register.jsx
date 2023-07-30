import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container mx-auto py-5'>
            <form className='mx-auto' style={{width: '40%'}}>
                <h5>Register Account</h5>
                <div className='d-flex mt-3'>
                    <div className='w-100 me-2'>
                        <label>First Name <span className='text-danger'>*</span></label>
                        <input type="text" className='rounded-2 focus-ring focus-ring-secondary border border-secondary-subtle d-block p-2 w-100' placeholder='first name' />
                    </div>

                    <div className='w-100 ms-2'>
                        <label>Last Name <span className='text-danger'>*</span></label>
                        <input type="text" className='rounded-2 focus-ring focus-ring-secondary border border-secondary-subtle d-block p-2 w-100' placeholder='last name' />
                    </div>
                </div>
                <div className='mt-3'>
                    <label>Email <span className='text-danger'>*</span></label>
                    <input type="text" className='rounded-2 focus-ring focus-ring-secondary border border-secondary-subtle d-block p-2 w-100' placeholder='email' />
                </div>
                <div className='mt-3'>
                    <label>Password <span className='text-danger'>*</span></label>
                    <input type="password" className='rounded-2 focus-ring focus-ring-secondary border border-secondary-subtle d-block p-2 w-100' placeholder='password' />
                </div>
                <button className='mt-3 border-0 w-100 fw-bold py-2 rounded-3 bg-p-gift text-white'>Continue</button>
            </form>
            <div className='mt-4 d-flex justify-content-center'>
                <p className='fw-bold text-secondary'>Already have an account ? </p>
                <Link to='/login' className='text-decoration-none text-primary fw-bold'> Login</Link>
            </div>
        </div>
    );
};

export default Register;