import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './CircleMenu.scss';
import { useDataContext } from '../../contexts/DataContext';

const CircleMenu: React.FC = () => {
  const { data, selected, setSelected } = useDataContext();
  const buttons = data;
  const [translateX, setTranslateX] = useState(265);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1023) {
        setTranslateX(180);
      } else {
        setTranslateX(265);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const angle = 360 / buttons.length;
    const rotation = -angle * selected - 60;

    gsap.to('.circle-menu__container', {
      rotation: rotation,
      duration: 1,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    });

    buttons.forEach((button, index) => {
      const buttonAngle = (360 / buttons.length) * index + rotation;
      gsap.to(`.circle-menu__button-text-container-${index}`, {
        rotation: -buttonAngle,
        duration: 1,
        ease: 'sine.inOut',
        transformOrigin: 'center center',
      });
    });
  }, [selected, buttons.length]);

  return (
    <div className="circle-menu__wrapper">
      <div className="circle-menu__background"></div>
      <div className="circle-menu__container">
        {buttons.map((button, index) => (
          <button
            type="button"
            key={index}
            className={`circle-menu__button ${selected === index ? 'circle-menu__button-selected' : ''}`}
            onClick={() => setSelected(index)}
            style={{
              transform: `rotate(${(360 / buttons.length) * index}deg) translateX(${translateX}px)`,
            }}
            aria-label={button.title}
          >
            <div
              className={`circle-menu__button-text-container circle-menu__button-text-container-${index}`}
            >
              <p className="circle-menu__button-text">{index + 1}</p>
              <p
                className={`circle-menu__button-title ${selected === index ? 'circle-menu__button-title-selected' : ''}`}
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
