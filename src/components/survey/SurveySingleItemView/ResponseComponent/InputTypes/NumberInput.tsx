import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ResponseItem } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getClassName, getInputMaxWidth, getLabelPlacementStyle, getLocaleStringTextByCode } from '../../utils';
import clsx from 'clsx';
import { InputHandleRef } from '../../../../../types/type';

interface NumberInputProps extends CommonResponseComponentProps {
  ignoreClassName?: boolean;
  nonFullWidth?: boolean;
  defaultClassName?: string;
  inputClassName?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}

const NumberInput = forwardRef<InputHandleRef, NumberInputProps>((props, ref) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value).toString() : ''
  );


  useImperativeHandle(ref, () => {
    return {
      clearValue: () => setInputValue("")
    }
  });

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  useEffect(() => {
    if(!props.compDef.key) {
      return;
    }

    let value = inputValue;

    if (props.compDef.properties?.min !== undefined) {
      const numVal = parseFloat(value);
      if (numVal < props.compDef.properties?.min) {
        value = "";
      }
    }
    if (props.compDef.properties?.max !== undefined) {
      const numVal = parseFloat(value);
      if (numVal > props.compDef.properties?.max) {
        value = "";
      }
    }

    const response: ResponseItem = {
      key: props.compDef.key,
    };

    if(value.length > 0) {
      response.dtype = 'number';
      response.value = value;
    }

    setResponse(response);
  }, [inputValue])

  const handleInputValueChange = (newValue: string) => {
    if(!props.compDef.key) {
      return;
    }

    setTouched(true);

    let value = newValue;

    if (props.compDef.properties?.stepSize === 1.0) {
      const numVal = parseFloat(value);
      if (!isNaN(numVal) && !Number.isInteger(numVal)) {
        value = Math.round(numVal).toString();
      }
    }

    setInputValue(value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event || !event.currentTarget) { return; }
    (event.currentTarget as HTMLInputElement).select();

    props.onFocus?.call(this, event);
  };

  const minValue = props.compDef.properties?.min;
  const maxValue = props.compDef.properties?.max;
  const stepSize = props.compDef.properties?.stepSize;

  const content = props.compDef.content;
  const placeAfter = getLabelPlacementStyle(props.compDef.style) === 'after';
  const inputMaxWidth = getInputMaxWidth(props.compDef.style);
  const fullKey = [props.parentKey, props.compDef.key].join('.');

  const labelText = getLocaleStringTextByCode(content, props.languageCode);

  return <div
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

    <input
      style={{
        flexBasis: 0,
        minWidth: 60,
        maxWidth: inputMaxWidth,
      }}
      className={clsx("form-control border-0 flex-grow-1", props.inputClassName)}
      type="number"
      autoComplete="off"
      inputMode='decimal'
      id={props.parentKey}
      placeholder={getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
      value={inputValue}
      maxLength={30}
      onFocus={handleFocus}
      onClick={(e) => (e.target as HTMLInputElement).select()}
      onWheel={(e) => {
        e.currentTarget.blur()
      }}
      onChange={(event) => {  handleInputValueChange(event.target.value) }}
      disabled={props.compDef.disabled !== undefined || props.disabled === true}
      min={minValue !== undefined ? minValue as number : undefined}
      max={maxValue !== undefined ? maxValue as number : undefined}
      step={stepSize ? stepSize as number : undefined}
    />

    {placeAfter ? <label htmlFor={props.parentKey} className="ms-1">
      {getLocaleStringTextByCode(content, props.languageCode)}
    </label> : null}
  </div>
});

export default NumberInput;
