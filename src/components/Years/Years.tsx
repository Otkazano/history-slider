import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Years.scss';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface YearsProps {
  data: MockDataInit;
}

const Years: React.FC<YearsProps> = ({ data }) => {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [currentYears, setCurrentYears] = useState(data.years);

  useEffect(() => {
    if (startRef.current && endRef.current) {
      const startValue = data.years.start.toString();
      const endValue = data.years.end.toString();

      const animateDigit = (element: HTMLDivElement, oldValue: string, newValue: string) => {
        if (!element) return;

        const oldDigits = oldValue.padStart(newValue.length, '0').split('');
        const newDigits = newValue.padStart(oldValue.length, '0').split('');

        oldDigits.forEach((digit, index) => {
          if (digit !== newDigits[index]) {
            gsap.fromTo(
              element.children[index] as HTMLElement,
              { textContent: digit },
              {
                textContent: newDigits[index],
                duration: 0.5,
                ease: 'circ.inOut',
                snap: { textContent: 1 },
                stagger: {
                  amount: 0.1,
                  grid: [1, newDigits.length],
                },
                onUpdate: function () {
                  (element.children[index] as HTMLElement).textContent = Math.floor(
                    Math.random() * 10,
                  ).toString();
                },
                onComplete: function () {
                  (element.children[index] as HTMLElement).textContent = newDigits[index];
                },
              },
            );
          }
        });
      };

      const renderDigits = (value: string, ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
          ref.current.innerHTML = '';
          value.split('').forEach(digit => {
            const span = document.createElement('span');
            span.textContent = digit;
            ref.current!.appendChild(span);
          });
        }
      };

      renderDigits(currentYears.start.toString(), startRef);
      renderDigits(currentYears.end.toString(), endRef);

      if (startRef.current) {
        animateDigit(startRef.current, currentYears.start.toString(), data.years.start.toString());
      }
      if (endRef.current) {
        animateDigit(endRef.current, currentYears.end.toString(), data.years.end.toString());
      }

      const updateState = () => {
        setCurrentYears(data.years);
      };

      gsap.delayedCall(0.5, updateState);
    }
  }, [data]);

  return (
    <div className="years">
      <div ref={startRef} className="years__dateStart" />
      <div ref={endRef} className="years__dateEnd" />
    </div>
  );
};

export default Years;
