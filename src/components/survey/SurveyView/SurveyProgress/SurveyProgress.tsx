import React from 'react';
import clsx from 'clsx';

interface SurveyProgressProps {
  currentIndex: number;
  totalCount: number;
}
const maxPageBarWidth = 45;

const SurveyProgress: React.FC<SurveyProgressProps> = (props) => {
  return (

    <div
      className="d-flex w-100 align-items-center justify-content-center"
      style={{ height: 5 }}
    >
      <div className="d-flex justify-content-evenly h-100"
        style={{ width: (maxPageBarWidth + 10) * props.totalCount, maxWidth: '100%' }}
      >
        {
          Array.from(Array(props.totalCount).keys()).map(
            index => (
              <div
                key={index.toString()}
                className={
                  clsx(
                    'h-100',
                    'flex-grow-1',
                    {
                      'bg-grey-2': index > props.currentIndex,
                      'bg-primary': index <= props.currentIndex,
                    })}
                style={{ maxWidth: maxPageBarWidth }}
              >
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default SurveyProgress;
