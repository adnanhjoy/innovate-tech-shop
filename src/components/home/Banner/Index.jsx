import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from './Banner';
import CompareProducts from './CompareProducts';
import PromotionAds from '../promotionAds/PromotionAds';

const Index = () => {
    return (
        <div className='mx-5'>
            <Row className='w-100 m-auto'>
                <Col sm={8} className='p-0'>
                    <Banner />
                </Col>
                <Col sm={4} className='p-0'>
                    <CompareProducts />
                    <PromotionAds/>
                </Col>
            </Row>
        </div>
    );
};

export default Index;