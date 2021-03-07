import React from 'react';
import clsx from 'clsx';

interface LoadingPlaceholderProps {
  minHeight: number | string;
  color: 'primary' | 'secondary';
  iconSize?: string;
}

const defaultIconSize = '3rem';

const LoadingPlaceholder: React.FC<LoadingPlaceholderProps> = (props) => {
  const iconSize = props.iconSize ? props.iconSize : defaultIconSize;

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
      )} style={{ width: iconSize, height: iconSize }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPlaceholder;
