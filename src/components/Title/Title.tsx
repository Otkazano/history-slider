import React from 'react';
import './Title.scss';

const Title: React.FC = () => {
  return (
    <h1 className="title">
      <p className="title__text">
        Исторические <br /> даты
      </p>
    </h1>
  );
};

export default Title;
