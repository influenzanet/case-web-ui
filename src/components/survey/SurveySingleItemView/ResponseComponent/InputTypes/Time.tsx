import React, { useState, useEffect } from 'react';
import { ResponseItem } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getClassName, getLabelPlacementStyle, getLocaleStringTextByCode, getStyleValueByKey } from '../../utils';
import clsx from 'clsx';
import { preprocessTimeInputValue, TimeInput } from '../../../../inputs';

interface TimeProps extends CommonResponseComponentProps {
  ignoreClassName?: boolean;
  nonFullWidth?: boolean;
  defaultClassName?: string;
}

const secondsToInputTimeFormat = (value: number | undefined, defaultValue?: string, step?: number | undefined): string | undefined => {
  if (value === undefined) {
    return defaultValue ?? "--:--";
  }

  const minuteInSeconds = 60;
  const hourInSeconds = 3600;

  const hours = Math.floor(value / hourInSeconds);
  const minutes = Math.floor((value - hourInSeconds * hours) / minuteInSeconds);
  const seconds = Math.floor(value - hourInSeconds * hours - minuteInSeconds * minutes);

  const paddedHours = convertWithPad(hours);
  const paddedMinutes = convertWithPad(minutes);
  const paddedSeconds = convertWithPad(seconds);

  let result = `${paddedHours}:${paddedMinutes}`;

  if(step && step < minuteInSeconds) {
    result = `${result}:${paddedSeconds}`;
  }

  return result;
}

const convertWithPad = (v: number) => {
  let s = v.toFixed(0);
  while (s.length < 2) { s = "0" + s; }
  return s;
}

const Time: React.FC<TimeProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<undefined | number>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value) : undefined
  );

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleInputValueChange = (key: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!key) { return; }
    setTouched(true);

    const value = preprocessTimeInputValue(event);

    setInputValue(value);
    setResponse(prev => {
      if (value === undefined) {
        return undefined;
      }
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          dtype: 'number',
          value: value.toString()
        }
      }
      return {
        ...prev,
        dtype: 'number',
        value: value.toString()
      }
    })
  };


  const minValue = getStyleValueByKey(props.compDef.style, 'minTime');
  const maxValue = getStyleValueByKey(props.compDef.style, 'maxTime');
  const defaultValue = getStyleValueByKey(props.compDef.style, 'defaultValue');
  const stepSize = props.compDef.properties?.stepSize as number ?? undefined;

  const content = props.compDef.content;
  const placeAfter = getLabelPlacementStyle(props.compDef.style) === 'after';
  const fullKey = [props.parentKey, props.compDef.key].join('.');

  const labelText = getLocaleStringTextByCode(content, props.languageCode);

  return (<div
    className={clsx(
      props.defaultClassName,
      "d-flex align-items-center",
      {
        'w-100': !props.nonFullWidth,
      },
      props.ignoreClassName !== true ? getClassName(props.compDef.style) : undefined
    )}
  >
    {!placeAfter ? <label htmlFor={fullKey} className={clsx(
      "flex-grow-1",
      {
        "me-1": labelText !== undefined && labelText.length > 0
      }
    )}
      style={{ maxWidth: 'fit-content' }}
    >
      {getLocaleStringTextByCode(content, props.languageCode)}
    </label> : null}
    <TimeInput
      id={props.parentKey}
      disabled={props.compDef.disabled !== undefined || props.disabled === true}
      min={minValue}
      max={maxValue}
      step={stepSize}
      value={secondsToInputTimeFormat(inputValue, defaultValue, stepSize)}
      onChange={handleInputValueChange(props.compDef.key)}
    />
    {placeAfter ? <label htmlFor={props.parentKey} className="ms-1">
      {getLocaleStringTextByCode(content, props.languageCode)}
    </label> : null}
  </div>
  );
};

export default Time;
