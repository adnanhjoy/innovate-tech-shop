import React from 'react';
import promotionAds from '../../../assets/promotionAds.webp'

const PromotionAds = () => {
    return (
        <div className='ps-lg-5 mt-3'>
            <img className='img-fluid w-100' style={{height: '128px'}} src={promotionAds} alt="" />
        </div>
    );
};

export default PromotionAds;