import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getClassName, getInputMaxWidth, getLocaleStringTextByCode, getStyleValueByKey } from '../../utils';
import clsx from 'clsx';

interface TextInputProps extends CommonResponseComponentProps {
  updateDelay?: number;
  onClick?: () => void;
  nonFullWidth?: boolean;
  defaultClassName?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<string>(
    props.prefill && props.prefill.value ? props.prefill.value : ''
  );

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, props.updateDelay !== undefined ? props.updateDelay : 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);


  const handleInputValueChange = (key: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!key) { return; }
    setTouched(true);

    const value = (event.target as HTMLInputElement).value;
    setInputValue(value);
    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          value: value
        }
      }
      return {
        ...prev,
        value: value
      }
    })
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
        className="form-control border-0 flex-grow-1"
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
        onChange={handleInputValueChange(props.compDef.key)}
        disabled={props.compDef.disabled === true || props.disabled === true}
      />
    </div>
  );
};

export default TextInput;
