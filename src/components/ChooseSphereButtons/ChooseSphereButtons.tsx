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
        type="button"
        className="chooseButton"
        onClick={() => {
          if (currentSelected === 0) {
            setNewSelected(maxValue - 1);
          } else {
            setNewSelected(currentSelected - 1);
          }
        }}
      >
        <span className="chooseButton__icon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M9.6 4l-4 4 4 4 .8-.8L7.2 8l3.2-3.2z" fill="#42567A"></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="chooseButton"
        onClick={() => {
          if (currentSelected === maxValue - 1) {
            setNewSelected(0);
          } else {
            setNewSelected(currentSelected + 1);
          }
        }}
      >
        <span className="chooseButton__icon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M6.4 12l4-4-4-4-.8.8L8.8 8l-3.2 3.2z" fill="#42567A"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ChooseSphereButtons;
