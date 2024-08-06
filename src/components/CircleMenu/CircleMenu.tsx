import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './CircleMenu.scss';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface CircleMenuProps {
  data: MockDataInit[];
  currentSelected: number;
  setNewSelected: (value: number) => void;
}

const CircleMenu: React.FC<CircleMenuProps> = ({ data, currentSelected, setNewSelected }) => {
  const buttons = data;

  useEffect(() => {
    const angle = 360 / buttons.length;
    const rotation = -angle * currentSelected - 60;

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
  }, [currentSelected, buttons.length]);

  return (
    <div className="circle-menu__wrapper">
      <div className="circle-menu__background"></div>
      <div className="circle-menu__container">
        {buttons.map((button, index) => (
          <button
            type="button"
            key={index}
            className={`circle-menu__button ${currentSelected === index ? 'circle-menu__button-selected' : ''}`}
            onClick={() => setNewSelected(index)}
            style={{
              transform: `rotate(${(360 / buttons.length) * index}deg) translateX(265px)`,
            }}
          >
            <div
              className={`circle-menu__button-text-container circle-menu__button-text-container-${index}`}
            >
              <p className="circle-menu__button-text">{index + 1}</p>
              <p
                className={`circle-menu__button-title ${currentSelected === index ? 'circle-menu__button-title-selected' : ''}`}
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
