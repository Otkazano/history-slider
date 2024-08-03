import React from 'react';
import './ChooseSphereButtons.scss';

interface ButtonsProps {
  currentSelected: number;
  setNewSelected: (value: number) => void;
  maxValue: number;
}

const ChooseSphereButtons: React.FC<ButtonsProps> = ({
  currentSelected,
  setNewSelected,
  maxValue,
}) => {
  return (
    <div className="chooseContainer">
      <p className="chooseNumbers">
        0{currentSelected + 1}&#47;0{maxValue}
      </p>

      <button
        className="chooseButton"
        onClick={() => {
          if (currentSelected === 0) {
            setNewSelected(maxValue - 1);
          } else {
            setNewSelected(currentSelected - 1);
          }
        }}
      ></button>
      <button
        className="chooseButton"
        onClick={() => {
          if (currentSelected === maxValue - 1) {
            setNewSelected(0);
          } else {
            setNewSelected(currentSelected + 1);
          }
        }}
      ></button>
    </div>
  );
};

export default ChooseSphereButtons;
