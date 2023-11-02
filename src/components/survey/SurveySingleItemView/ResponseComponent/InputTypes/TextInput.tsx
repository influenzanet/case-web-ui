import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ResponseItem } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getClassName, getInputMaxWidth, getLocaleStringTextByCode, getStyleValueByKey } from '../../utils';
import clsx from 'clsx';
import { InputHandleRef } from '../../../../../types/type';

interface TextInputProps extends CommonResponseComponentProps {
  updateDelay?: number;
  onClick?: () => void;
  nonFullWidth?: boolean;
  defaultClassName?: string;
  inputClassName?: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}

const TextInput = forwardRef<InputHandleRef, TextInputProps>((props, ref)  => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    props.prefill && props.prefill.value ? props.prefill.value : ''
  );

  useImperativeHandle(ref, () => {
    return {
      clearValue: () => handleInputValueChange("")
    }
  });

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, props.updateDelay !== undefined ? props.updateDelay : 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);


  const transformCase = getStyleValueByKey(props.compDef.style, 'transformCase');

  const handleInputValueChange = (newValue: string) => {
    if(!props.compDef.key) {
      return
    }

    setTouched(true);

    let value = newValue;

    if (transformCase === 'upper') {
      value = value.toUpperCase();
    } else if (transformCase === 'lower') {
      value = value.toLowerCase();
    }

    setInputValue(value);

    value = value.trim();

    const response: ResponseItem = {
      key: props.compDef.key
    };

    if(value.length > 0) {
      response.value = value;
    }

    setResponse(response);
  };

  const labelText = getLocaleStringTextByCode(props.compDef.content, props.languageCode);
  const inputMaxWidth = getInputMaxWidth(props.compDef.style);
  const maxLengthValue = getStyleValueByKey(props.compDef.style, 'maxLength');

  const fullKey = [props.parentKey, props.compDef.key].join('.');
  return (
    <div
      className={clsx(
        props.defaultClassName,
        "d-flex align-items-center",
        {
          'w-100': !props.nonFullWidth,
        },
        getClassName(props.compDef.style),
      )}
      onClick={props.onClick}
    >
      <label htmlFor={fullKey} className={clsx("flex-grow-1",
        {
          "me-1": labelText !== undefined && labelText.length > 0
        }
      )}
        style={{ maxWidth: 'fit-content' }}
      >
        {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
      </label>
      <input
        className={clsx("form-control border-0 flex-grow-1", props.inputClassName)}
        style={{
          flexBasis: 0,
          minWidth: 40,
          maxWidth: inputMaxWidth,
        }}
        autoComplete="off"
        id={fullKey}
        placeholder={getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
        value={inputValue}
        maxLength={maxLengthValue ? parseInt(maxLengthValue) : 4000}
        onChange={(event) => { handleInputValueChange(event.target.value)} }
        disabled={props.compDef.disabled === true || props.disabled === true}
        onFocus={props.onFocus}
      />
    </div>
  );
});

export default TextInput;
