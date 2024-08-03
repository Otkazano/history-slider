import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './InfoSlider.scss';

import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface SliderProps {
  data: MockDataInit;
}

const InfoSlider: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="infoSlider">
      <Swiper
        className="infoSlider__container"
        spaceBetween={80}
        slidesPerView="auto"
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, FreeMode]}
        navigation={{ nextEl: '.infoSlider__buttonNext', prevEl: '.infoSlider__buttonPrev' }}
      >
        {data.events.map((event, index) => (
          <SwiperSlide key={index} className="infoSlider__slide">
            <p className="infoSlider__year">{event.year}</p>
            <p className="infoSlider__fact">{event.fact}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="infoSlider__buttonPrev"></button>
      <button className="infoSlider__buttonNext"></button>
    </div>
  );
};

export default InfoSlider;
