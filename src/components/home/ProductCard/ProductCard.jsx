import React from 'react';
import './ProductCard.css'
import productImg from '../../../assets/productimg.webp'

const ProductCard = () => {
    return (
        <div className='col mb-3 p-1'>
            <div className='position-relative'>
                <div className='rounded bg-light p-2 shadow-sm d-flex flex-column justify-content-center align-items-center' style={{ cursor: 'pointer' }}>
                    <img className='img-fluid' style={{ height: '150px' }} src={productImg} alt="" />
                    <div>
                        <p className='product-title my-3 my-md-5'>MSI PRO MP223 21.45" Full HD Business Monitor</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span className='d-flex align-items-center text-orange'>
                                <p className='m-0 fw-bold'>16,399</p>
                                <p className='m-0 fw-bold' style={{ fontFamily: 'auto' }}>৳</p>
                            </span>
                            <span className='d-flex align-items-center text-secondary text-decoration-line-through'>
                                <p className='m-0 fw-bold'>16,399</p>
                                <p className='m-0 fw-bold' style={{ fontFamily: 'auto' }}>৳</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='position-absolute top-0 start-0 mt-2'>
                    <p className='text-white px-2 m-0 bg-p-gift rounded-end-pill' style={{
                        fontSize: '12px',
                        fontFamily: 'auto'
                    }}>Save: 300৳</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;