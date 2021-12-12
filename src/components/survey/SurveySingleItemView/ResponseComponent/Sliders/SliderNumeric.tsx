import React, { useState, useEffect } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/data_types';
import { Slider } from '../../../../inputs';
import { getLocaleStringTextByCode } from '../../utils';

interface SliderNumericProps {
  parentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const SliderNumeric: React.FC<SliderNumericProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [inputValue, setInputValue] = useState<number>(
    props.prefill && props.prefill.value ? parseFloat(props.prefill.value) : 0
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

  const handleSliderChange = (key: string | undefined) => (value?: number) => {
    if (!key) { return; }
    setTouched(true);

    setInputValue(value as number);

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

  const fullKey = [props.parentKey, props.compDef.key].join('.');
  const noResponseText = getLocaleStringTextByCode(props.compDef.description, props.languageCode);

  return (
    <React.Fragment>
      {props.compDef.content ?
        <label htmlFor={fullKey} className="me-1">
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
          <span className="ms-1 fw-bold text-primary">{response ? inputValue : noResponseText}</span>
        </label>
        : null}
      <div className="d-flex py-1">
        <div className="flex-grow-1">
          <Slider
            id={fullKey}
            aria-labelledby={props.compDef.content ? "slider-numeric" : undefined}
            value={typeof inputValue === 'number' ? inputValue : 0}
            onChange={handleSliderChange(props.compDef.key)}
            min={props.compDef.properties?.min as number}
            max={props.compDef.properties?.max as number}
            step={props.compDef.properties?.stepSize as number}
            trackColor="white"
            tickColor="grey-3"
          />
          <div className="d-flex">
            <span className="flex-grow-1 text-start">
              {props.compDef.properties?.min}
            </span>
            <span className="">
              {props.compDef.properties?.max}
            </span>
          </div>
        </div>

      </div>
    </React.Fragment>
  );
};

export default SliderNumeric;
