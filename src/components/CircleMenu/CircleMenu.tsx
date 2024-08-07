import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './CircleMenu.scss';
import { useDataContext } from '../../contexts/DataContext';
import useWindowSize from '../../hooks/useWindowSize';

const CircleMenu: React.FC = () => {
  const { data, selected, setSelected } = useDataContext();
  const buttons = data;
  const [translateX, setTranslateX] = useState<number>(265);
  const [animatedIndex, setAnimatedIndex] = useState<number | null>(selected);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 1023) {
      setTranslateX(180);
    } else {
      setTranslateX(265);
    }
  }, [width]);

  useEffect(() => {
    const angle = 360 / buttons.length;
    const rotation = -angle * selected - 60;

    setAnimatedIndex(null);

    gsap.to('.circleMenu__container', {
      rotation: rotation,
      duration: 1,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    });

    buttons.forEach((button, index) => {
      const buttonAngle = (360 / buttons.length) * index + rotation;
      gsap.to(`.circleMenu__button-text-container-${index}`, {
        rotation: -buttonAngle,
        duration: 1,
        ease: 'sine.inOut',
        transformOrigin: 'center center',
        onComplete: () => {
          if (index === selected) {
            setAnimatedIndex(selected);
          }
        },
      });
    });
  }, [selected, buttons.length]);

  return (
    <div className="circleMenu__wrapper">
      <div className="circleMenu__background"></div>
      <div className="circleMenu__container">
        {buttons.map((button, index) => (
          <button
            type="button"
            key={index}
            className={`circleMenu__button ${selected === index ? 'circleMenu__button-selected' : ''}`}
            onClick={() => setSelected(index)}
            style={{
              transform: `rotate(${(360 / buttons.length) * index}deg) translateX(${translateX}px)`,
            }}
            aria-label={button.title}
          >
            <div
              className={`circleMenu__button-text-container circleMenu__button-text-container-${index}`}
            >
              <p className="circleMenu__button-text">{index + 1}</p>
              <p
                className={`circleMenu__button-title ${animatedIndex === index ? 'circleMenu__button-title-selected' : ''}`}
              >
                {button.title}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CircleMenu;
