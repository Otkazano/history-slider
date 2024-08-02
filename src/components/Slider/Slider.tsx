import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface SliderProps {
  data: MockDataInit;
}

const InfoSlider: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      >
        {data.events.map((event, index) => {
          return (
            <SwiperSlide key={index}>
              <p>{event.year}</p>
              <p>{event.fact}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default InfoSlider;
