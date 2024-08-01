import React from 'react';
import './Years.scss';
import { MockDataInit } from '../../utils/Data/DataTypes';

interface YearsProps {
  data: MockDataInit;
}

const Years: React.FC<YearsProps> = ({ data }) => {
  return (
    <div className="years">
      <p className="years__dateStart">{data.years.start}</p>
      <p className="years__dateEnd">{data.years.end}</p>
    </div>
  );
};

export default Years;
