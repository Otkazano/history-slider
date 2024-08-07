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
    const animateYearChange = (
      startElement: HTMLDivElement,
      endElement: HTMLDivElement,
      oldStart: number,
      newStart: number,
      oldEnd: number,
      newEnd: number,
    ) => {
      if (!startElement || !endElement) return;

      const duration = 1;

      const yearUpdate = (element: HTMLDivElement, startValue: number, endValue: number) => {
        gsap.to(
          {},
          {
            duration,
            onUpdate: function () {
              const progress = this.progress();
              const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
              element.textContent = currentValue.toString();
            },
          },
        );
      };

      yearUpdate(startElement, oldStart, newStart);
      yearUpdate(endElement, oldEnd, newEnd);
    };

    const renderYear = (value: number, ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        ref.current.textContent = value.toString();
      }
    };

    if (startRef.current && endRef.current) {
      const oldStart = currentYears.start;
      const newStart = data[selected].years.start;
      const oldEnd = currentYears.end;
      const newEnd = data[selected].years.end;

      renderYear(oldStart, startRef);
      renderYear(oldEnd, endRef);

      animateYearChange(startRef.current, endRef.current, oldStart, newStart, oldEnd, newEnd);

      const updateState = () => {
        setCurrentYears(data[selected].years);
      };

      gsap.delayedCall(2, updateState);
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
