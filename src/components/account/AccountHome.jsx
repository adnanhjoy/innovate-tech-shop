import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaAddressCard, FaElementor, FaHeart, FaLaptop, FaLock, FaStar, FaUserAlt, FaWpforms } from 'react-icons/fa';
import './Account.css';
import { Link } from 'react-router-dom';

const AccountHome = () => {
    return (
        <div className='container mx-auto mb-5'>
            <Row md={4}>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaAddressCard className='fs-4 text-primary'></FaAddressCard>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaUserAlt className='fs-4 text-primary'></FaUserAlt>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaLock className='fs-4 text-primary'></FaLock>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaElementor className='fs-4 text-primary'></FaElementor>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaHeart className='fs-4 text-primary'></FaHeart>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaLaptop className='fs-4 text-primary'></FaLaptop>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaStar className='fs-4 text-primary'></FaStar>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className='py-2'>
                    <Link to='/account/order' className='text-decoration-none '>
                        <div className='border rounded-3 shadow-sm pointer nav-card'>
                            <div className='p-5 d-flex justify-content-center align-items-center flex-column'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle bg-primary-subtle p-2' style={{ height: '50px', width: '50px' }}>
                                    <FaWpforms className='fs-4 text-primary'></FaWpforms>
                                </div>
                                <p className='m-0 fs-sm fw-semibold text-black'>Orders</p>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default AccountHome;