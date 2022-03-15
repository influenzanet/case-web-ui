import clsx from 'clsx';
import React, { useState } from 'react';

interface SliderProps {
  min: number;
  max: number;
  id?: string;
  step?: number;
  value: number;
  onChange: (value?: number) => void;
  trackColor?: string;
  tickColor?: string;
}

const Slider: React.FC<SliderProps> = (props) => {
  const [touched, setTouched] = useState(false);

  const trackColor = 'bg-' + (props.trackColor ? props.trackColor : 'grey-1');
  const tickColor = 'bg-' + (props.tickColor ? props.tickColor : 'grey-4');

  const renderTicks = () => {
    if (!props.step) {
      return null;
    }

    const numberOfTicks = Math.floor((props.max - props.min) / (props.step) + 1);

    return (
      <React.Fragment>
        {Array(numberOfTicks).fill(0).map(
          (_, index: number) => <span
            key={index.toString()}
            className={clsx("tick", tickColor)}
          ></span>)
        }
      </React.Fragment>
    )
  }

  return (
    <div className="position-relative">
      <input
        type="range"
        className="form-range"
        min={props.min}
        max={props.max}
        step={props.step}
        id={props.id}
        value={props.value}
        onChange={(event) => {
          const value = parseFloat(event.target.value);
          props.onChange(value)
          setTouched(true);
        }}
        onClick={(event) => {
          if (touched) { return; }
          console.log('clicked')
          const value = parseFloat((event.target as HTMLInputElement)?.value);
          props.onChange(value)
          setTouched(true);
        }}

      />
      <div className="pe-none ticks position-absolute left-0 right-0 top-0 h-100 d-flex w-100 justify-content-between">
        <div className={clsx("range-track", trackColor)}></div>
      </div>
      <div className="pe-none ticks position-absolute left-0 right-0 top-0 h-100 d-flex w-100 justify-content-between">
        {renderTicks()}
      </div>
    </div>
  );
};

export default Slider;
