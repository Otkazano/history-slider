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
      <button type="button" className="infoSlider__buttonPrev">
        <span className="infoSlider__buttonIcon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M9.6 4l-4 4 4 4 .8-.8L7.2 8l3.2-3.2z" fill="#3877EE"></path>
          </svg>
        </span>
      </button>
      <button type="button" className="infoSlider__buttonNext">
        <span className="infoSlider__buttonIcon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M6.4 12l4-4-4-4-.8.8L8.8 8l-3.2 3.2z" fill="#3877EE"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default InfoSlider;
