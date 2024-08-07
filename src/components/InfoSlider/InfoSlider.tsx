import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/pagination';
import './InfoSlider.scss';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { useDataContext } from '../../contexts/DataContext';
import useWindowSize from '../../hooks/useWindowSize';

const InfoSlider: React.FC = () => {
  const { data, selected } = useDataContext();
  const [displayedSelected, setDisplayedSelected] = useState(selected);
  const [spaceBetween, setSpaceBetween] = useState(80);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const spacing = width <= 767 ? 25 : width <= 1023 ? 40 : 80;
    setSpaceBetween(spacing);
  }, [width]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setDisplayedSelected(selected);
          gsap.fromTo(
            sliderRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          );
        },
      });
    }
  }, [selected]);

  return (
    <div className="infoSlider" ref={sliderRef} aria-live="polite" aria-atomic="true">
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, FreeMode]}
        navigation={{
          nextEl: '.infoSlider__buttonNext',
          prevEl: '.infoSlider__buttonPrev',
        }}
        aria-label="Слайдер информации"
      >
        {data[displayedSelected]?.events.map((event, index) => (
          <SwiperSlide
            key={index}
            className="infoSlider__slide"
            aria-label={`Событие ${index + 1}: ${event.year} - ${event.fact}`}
          >
            <p className="infoSlider__year">{event.year}</p>
            <p className="infoSlider__fact">{event.fact}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type="button" className="infoSlider__buttonPrev" aria-label="Предыдущий слайд">
        <span className="infoSlider__buttonIcon">
          <svg width="24" height="24" viewBox="0 0 16 16">
            <path d="M9.6 4l-4 4 4 4 .8-.8L7.2 8l3.2-3.2z" fill="#3877EE"></path>
          </svg>
        </span>
      </button>
      <button type="button" className="infoSlider__buttonNext" aria-label="Следующий слайд">
        <span className="infoSlider__buttonIcon">
          <svg width="24" height="24" viewBox="0 0 16 16">
            <path d="M6.4 12l4-4-4-4-.8.8L8.8 8l-3.2 3.2z" fill="#3877EE"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default InfoSlider;
