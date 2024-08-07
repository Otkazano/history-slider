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
    const duration = 1;

    const startElement = startRef.current;
    const endElement = endRef.current;

    if (startElement && endElement) {
      const oldStart = currentYears.start;
      const newStart = data[selected].years.start;
      const oldEnd = currentYears.end;
      const newEnd = data[selected].years.end;

      // Animate year changes
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

      // Update state after animation
      gsap.delayedCall(duration, () => {
        setCurrentYears(data[selected].years);
      });
    }
  }, [selected, data, currentYears]);

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
