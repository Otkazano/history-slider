import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Years.scss';
import { useDataContext } from '../../contexts/DataContext';

const Years: React.FC = () => {
  const { data, selected } = useDataContext();
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [currentYears, setCurrentYears] = useState(data[selected].years);

  useEffect(() => {
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
          span.setAttribute('aria-live', 'polite'); // Добавляем aria-live для динамически обновляемых цифр
          ref.current?.appendChild(span);
        });
      }
    };

    if (startRef.current && endRef.current) {
      renderDigits(currentYears.start.toString(), startRef);
      renderDigits(currentYears.end.toString(), endRef);

      animateDigit(
        startRef.current,
        currentYears.start.toString(),
        data[selected].years.start.toString(),
      );
      animateDigit(
        endRef.current,
        currentYears.end.toString(),
        data[selected].years.end.toString(),
      );

      const updateState = () => {
        setCurrentYears(data[selected].years);
      };

      gsap.delayedCall(0.5, updateState);
    }
  }, [selected, data]);

  return (
    <div className="years">
      <div
        ref={startRef}
        className="years__dateStart"
        aria-live="polite"
        aria-label={`Начальный год: ${currentYears.start}`}
      />
      <div
        ref={endRef}
        className="years__dateEnd"
        aria-live="polite"
        aria-label={`Конечный год: ${currentYears.end}`}
      />
    </div>
  );
};

export default Years;
