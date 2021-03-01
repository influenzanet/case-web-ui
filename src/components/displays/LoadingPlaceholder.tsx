import React from 'react';
import clsx from 'clsx';

interface LoadingPlaceholderProps {
  minHeight: number;
  color: 'primary' | 'secondary';
}

const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = (props) => {
  return (
    <div
      className={clsx("d-flex align-items-center justify-content-center h-100", {
        'bg-secondary': props.color === 'secondary',
        'bg-primary': props.color === 'primary'
      })}
      style={{ minHeight: props.minHeight }}>
      <div className={clsx(
        "spinner-border",
        {
          "text-primary": props.color === 'secondary',
          "text-white": props.color === 'primary'
        }
      )} style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
