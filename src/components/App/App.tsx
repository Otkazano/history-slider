import React, { useState } from 'react';
import './App.scss';
import Title from '../Title/Title';
import { MockData } from '../../utils/Data/MockData';
import Years from '../Years/Years';
import { MockDataInit } from '../../utils/Data/DataTypes';
import InfoSlider from '../InfoSlider/InfoSlider';
import ChooseSphereButtons from '../ChooseSphereButtons/ChooseSphereButtons';

const App: React.FC = () => {
  const [mockData, setMockData] = useState<MockDataInit[]>(MockData);
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="App">
      <Title />
      <Years data={mockData[selected]} />
      <ChooseSphereButtons
        currentSelected={selected}
        setNewSelected={setSelected}
        maxValue={MockData.length}
      />
      <InfoSlider data={mockData[selected]} />
    </div>
  );
};

export default App;
