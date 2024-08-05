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
    const rotation = -angle * currentSelected - 45;

    gsap.to('.circle-menu', {
      rotation: rotation,
      duration: 1,
      ease: 'sine.inOut',
      transformOrigin: 'center center',
    });
  }, [currentSelected, buttons.length]);

  return (
    <div className="circle-menu-wrapper">
      <div className="circle-background"></div>
      <div className="circle-menu">
        {buttons.map((button, index) => (
          <div
            key={index}
            className={`circle-item ${currentSelected === index ? 'selected' : ''}`}
            onClick={() => setNewSelected(index)}
            style={{
              transform: `rotate(${(360 / buttons.length) * index}deg) translateX(264px)`,
            }}
          >
            <div className="circle-item-content">
              <div className="circle-item-text">{index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleMenu;
