import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ResponseItem } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getClassName, getLabelPlacementStyle, getLocaleStringTextByCode, getStyleValueByKey } from '../../utils';
import clsx from 'clsx';
import { preprocessTimeInputValue, TimeInput } from '../../../../inputs';
import { InputHandleRef } from '../../../../../types/type';

interface TimeProps extends CommonResponseComponentProps {
  ignoreClassName?: boolean;
  nonFullWidth?: boolean;
  defaultClassName?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>
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


const Time = forwardRef<InputHandleRef, TimeProps>((props, ref) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<undefined | number>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value) : undefined
  );

  useImperativeHandle(ref, () => {
    return {
      clearValue: () => handleInputValueChange(defaultValue ?? '--:--')
    }
  })

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleInputValueChange = (newValue: string) => {

    if(!props.compDef.key) {
      return;
    }

    setTouched(true);

    const value = preprocessTimeInputValue(newValue);

    setInputValue(value);

    const response: ResponseItem = {
      key: props.compDef.key
    };

    if(value) {
      response.dtype = 'number';
      response.value = value.toString()
    }

    setResponse(response);
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
      step={stepSize ? stepSize as number : undefined}
      value={secondsToInputTimeFormat(inputValue, defaultValue, stepSize)}
      onChange={(event) => { handleInputValueChange(event.target.value) }}
      onFocus={props.onFocus}
    />
    {placeAfter ? <label htmlFor={props.parentKey} className="ms-1">
      {getLocaleStringTextByCode(content, props.languageCode)}
    </label> : null}
  </div>
  );
});

export default Time;
