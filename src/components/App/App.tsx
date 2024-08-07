import React from 'react';
import './App.scss';
import Title from '../Title/Title';
import Years from '../Years/Years';
import InfoSlider from '../InfoSlider/InfoSlider';
import ChooseSphereButtons from '../ChooseSphereButtons/ChooseSphereButtons';
import CircleMenu from '../CircleMenu/CircleMenu';

const App: React.FC = () => {
  return (
    <div className="app">
      <Title />
      <Years />
      <div className="sliderContainer">
        <ChooseSphereButtons />
        <InfoSlider />
      </div>
      <CircleMenu />
    </div>
  );
};

export default App;
