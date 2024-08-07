import React from 'react';
import './movieswiper.css';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//Import Required modules
import {Autoplay, EffectCoverflow } from 'swiper/modules';


function MovieSwiper({slides ,slideChange}) {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    slidesPerView={'auto'}
    autoplay={{
      delay:2500,
      disableOnInteraction:false,
    }}
    overflowEffect={{
      rotate: 50,
      stretch:0,
      depth:100,
      modifier:1,
      slideShadow:true,
    }}
    loop={true}
    modules={[Autoplay,EffectCoverflow]}
    className='movieSwiper'
    > 
      { slides.map(slide=> (
        <SwiperSlide key={slide._id}>
          <img src={slide.previewImg} alt="Preview Image" 
          onClick = {() => slideChange(slide._id)} 

          />
        </SwiperSlide>
      ))
      }
    </Swiper>
  );
}

export default MovieSwiper;