import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './CircleMenu.scss';

const CircleMenu: React.FC = () => {
  const buttons = ['Button 1', 'Button 2', 'Button 3'];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const angle = 360 / buttons.length;
    const rotation = -angle * selectedIndex;

    gsap.to('.circle-menu', {
      rotation: rotation,
      duration: 0.5,
      ease: 'power2.out',
      transformOrigin: '50% 50%',
    });
  }, [selectedIndex]);

  const handleClick = (index: number) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  return (
    <div className="circle-menu-wrapper">
      <div className="circle-background"></div>
      <div className="circle-menu">
        {buttons.map((button, index) => (
          <div
            key={index}
            className={`circle-item ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
            style={{
              transform: `rotate(${(360 / buttons.length) * index}deg) translateX(150px) rotate(${-((360 / buttons.length) * index)}deg)`,
            }}
          >
            {button}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleMenu;
