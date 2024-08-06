import React from 'react';
import './ChooseSphereButtons.scss';
import { useDataContext } from '../../contexts/DataContext';

const ChooseSphereButtons: React.FC = () => {
  const { data, selected, setSelected } = useDataContext();
  const maxValue = data.length;

  return (
    <div className="chooseSphere__container">
      <p className="chooseSphere__numbers">
        0{selected + 1}&#47;0{maxValue}
      </p>

      <button
        type="button"
        className="chooseSphere__button"
        aria-label="Предыдущий элемент"
        onClick={() => {
          if (selected === 0) {
            setSelected(maxValue - 1);
          } else {
            setSelected(selected - 1);
          }
        }}
      >
        <span className="chooseSphere__button-icon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M9.6 4l-4 4 4 4 .8-.8L7.2 8l3.2-3.2z" fill="#42567A"></path>
          </svg>
        </span>
      </button>
      <button
        type="button"
        className="chooseSphere__button"
        aria-label="Следующий элемент"
        onClick={() => {
          if (selected === maxValue - 1) {
            setSelected(0);
          } else {
            setSelected(selected + 1);
          }
        }}
      >
        <span className="chooseSphere__button-icon">
          <svg width="24" height="24" role="none" viewBox="0 0 16 16">
            <path d="M6.4 12l4-4-4-4-.8.8L8.8 8l-3.2 3.2z" fill="#42567A"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default ChooseSphereButtons;
