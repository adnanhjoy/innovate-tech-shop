import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='pt-3 pt-md-0'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
                className="mySwiper h-50"
            >
                <SwiperSlide className='m-auto'>
                    <img className='w-100' src="https://www.startech.com.bd/image/cache/catalog/home/banner/express-delivery-home-banner-june-982x500.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='m-auto'>
                    <img className='w-100' src="https://www.startech.com.bd/image/cache/catalog/level-2-opening-offer-creative-home-page-982x500.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className='m-auto'>
                    <img className='w-100' src="https://www.startech.com.bd/image/cache/catalog/home/banner/stel-app-home-982x500.webp" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;