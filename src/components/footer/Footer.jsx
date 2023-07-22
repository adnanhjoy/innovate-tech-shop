import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black-100'>
            <div className='p-4 container'>
                <div className='row'>
                    <div className='col-sm'>
                        <p className='text-uppercase text-white' style={{ letterSpacing: '5px' }}>Support</p>
                        <div className='border border-secondary rounded-pill p-1 p-md-2 d-flex align-items-center' style={{ cursor: 'pointer' }}>
                            <div className='px-3 border-end'>
                                <FaPhoneAlt className='fs-2 text-white'></FaPhoneAlt>
                            </div>
                            <div className='p-2'>
                                <p className='m-0 fw-md-bold text-secondary'>10-AM - 7-PM</p>
                                <p className='m-0 text-orange fs-md-5 fw-bold'>16789</p>
                            </div>
                        </div>
                        <div className='border border-secondary rounded-pill p-1 p-md-2 d-flex align-items-center mt-2' style={{ cursor: 'pointer' }}>
                            <div className='px-3 border-end'>
                                <FaMapMarkerAlt className='fs-2 text-white'></FaMapMarkerAlt>
                            </div>
                            <div className='p-2'>
                                <p className='m-0 fw-md-bold text-secondary'>Store Locator</p>
                                <p className='m-0 text-orange fs-md-5 fw-bold'>Find Our Store</p>
                            </div>
                        </div>
                    </div>

                    {/* about */}
                    <div className='col-6 col-md-6 mt-3 mt-md-0'>
                        <div className='mx-md-5'>
                            <p className='text-uppercase text-white' style={{ letterSpacing: '5px' }}>About Us</p>

                            <div className='d-md-flex justify-content-between'>
                                <div className='d-flex flex-column'>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>EMI Terms</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Privacy Policy</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Start Point Policy</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Brands</Link>
                                </div>
                                <div className='d-flex flex-column'>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>About Us</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Terms & Conditions</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Blog</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Online Support and Service</Link>
                                </div>
                                <div className='d-flex flex-column'>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Online Delivery</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Refund and Return Policy</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Contact Us</Link>
                                    <Link className='link-title mb-3 text-secondary text-decoration-none'>Complain</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* stay connected */}
                    <div className='col-sm'>
                        <p className='text-uppercase text-white' style={{ letterSpacing: '5px' }}>Stay Connected</p>
                        <div>
                            <p className='fw-semi-bold text-white'>Innovate Tech Shop</p>
                            <p className='text-secondary'>Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</p>
                            <p className='text-orange'>Email: example@inovatetech.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;