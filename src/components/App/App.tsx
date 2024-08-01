import React, { useState } from 'react';
import './App.scss';
import Title from '../Title/Title';
import { MockData } from '../../utils/Data/MockData';
import Years from '../Years/Years';
import { MockDataInit } from '../../utils/Data/DataTypes';

const App: React.FC = () => {
  const [mockData, setMockData] = useState<MockDataInit[]>(MockData);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="App">
      <Title />
      <Years data={mockData[selected]} />
    </div>
  );
};

export default App;
