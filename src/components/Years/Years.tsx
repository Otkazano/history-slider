import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Years.scss';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface YearsProps {
  data: MockDataInit;
}

const Years: React.FC<YearsProps> = ({ data }) => {
  const startRef = useRef<HTMLParagraphElement>(null);
  const endRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (startRef.current && endRef.current) {
      const timeline = gsap.timeline();

      timeline.to(startRef.current, {
        textContent: data.years.start,
        duration: 0.5,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        onUpdate: function () {
          const current = parseInt(startRef.current?.textContent || '0');
          startRef.current!.textContent = Math.floor(
            Math.random() * 10 ** data.years.start.toString().length,
          ).toString();
        },
        onComplete: function () {
          startRef.current!.textContent = data.years.start.toString();
        },
      });

      timeline.to(
        endRef.current,
        {
          textContent: data.years.end,
          duration: 0.5,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          onUpdate: function () {
            const current = parseInt(endRef.current?.textContent || '0');
            endRef.current!.textContent = Math.floor(
              Math.random() * 10 ** data.years.end.toString().length,
            ).toString();
          },
          onComplete: function () {
            endRef.current!.textContent = data.years.end.toString();
          },
        },
        '-=0.4',
      );
    }
  }, [data]);

  return (
    <div className="years">
      <p ref={startRef} className="years__dateStart">
        {data.years.start}
      </p>
      <p ref={endRef} className="years__dateEnd">
        {data.years.end}
      </p>
    </div>
  );
};

export default Years;
