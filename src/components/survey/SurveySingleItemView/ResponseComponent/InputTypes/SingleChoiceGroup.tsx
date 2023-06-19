import React, { useEffect, useState } from 'react';
import { isItemGroupComponent, ItemComponent, ItemGroupComponent } from 'survey-engine/data_types/survey-item-component';
import { ResponseItem } from 'survey-engine/data_types/response';
import { CommonResponseComponentProps, getClassName, getLocaleStringTextByCode } from '../../utils';
import DateInput from '../DateInput/DateInput';
import TextInput from './TextInput';
import NumberInput from './NumberInput';

import clsx from 'clsx';
import { renderFormattedContent } from '../../renderUtils';
import ClozeQuestion from './ClozeQuestion';
import Time from './Time';

interface SingleChoiceGroupProps extends CommonResponseComponentProps {
  showOptionKey?: boolean;
}


const SingleChoiceGroup: React.FC<SingleChoiceGroupProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [subResponseCache, setSubResponseCache] = useState<Array<ResponseItem>>(
    (props.prefill && props.prefill.items) ? [...props.prefill.items] : []
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


  const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = (event.target as HTMLInputElement).value;
    onOptionSelected(key);
  };

  const onOptionSelected = (key: string) => {
    setTouched(true);
    setResponse(prev => {
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [{ key: key }]
        }
      }
      const subResp = subResponseCache.find(sr => sr.key === key);
      return {
        ...prev,
        items: [
          subResp ? subResp : { key }
        ]
      }
    });
  }

  const setResponseForKey = (key: string | undefined) => (response: ResponseItem | undefined) => {
    if (!key || !props.compDef.key) { return; }
    setTouched(true);
    // console.log(response);

    if (!response) {
      setResponse({ key: props.compDef.key, items: [] });
      setSubResponseCache(prev => {
        const ind = prev.findIndex(pr => pr.key === key);
        if (ind < 0) {
          return prev;
        }
        return prev.splice(ind, 1);
      })
    } else {
      setResponse({ key: props.compDef.key, items: [{ ...response }] });
      setSubResponseCache(prev => {
        const ind = prev.findIndex(pr => pr.key === key);
        if (ind < 0) {
          prev.push(response);
        }
        else {
          prev[ind] = { ...response };
        }
        return [...prev];
      })
    }
  }

  const getSelectedItem = (): ResponseItem | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return undefined;
    }
    return response.items[0];
  }

  const getSelectedKey = (): string | undefined => {
    if (!response || !response.items || response.items.length < 1) {
      return '';
    }
    return response.items[0].key;
  }

  const renderResponseOption = (option: ItemComponent, isLast: boolean): React.ReactNode => {
    if (option.displayCondition === false) {
      return null;
    }
    const prefill = getSelectedItem();
    const optionKey = props.parentKey + '.' + option.key;

    const isDisabled = option.disabled === true;

    const optionClassName = getClassName(option.style);

    let labelComponent = <p>{'loading...'}</p>
    if (isItemGroupComponent(option)) {
      switch (option.role) {
        // TODO: handle composite option types, when contains different inputs
        case 'option':
          labelComponent = <label htmlFor={optionKey}
            className="flex-grow-1 cursor-pointer"
          >
            {renderFormattedContent(option, props.languageCode, 'cursor-pointer', props.dateLocales)}
          </label>
          break;
        case 'cloze':
          labelComponent = <ClozeQuestion
            parentKey={optionKey}
            key={option.key}
            compDef={option}
            prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
            languageCode={props.languageCode}
            responseChanged={setResponseForKey(option.key)}
            disabled={isDisabled}
            dateLocales={props.dateLocales}
          />;
          break;
      }
    } else {
      // Simplified option type (no styled text, single input)
      switch (option.role) {
        case 'option':
          labelComponent = <label className="form-check-label cursor-pointer flex-grow-1" htmlFor={optionKey}>
            {getLocaleStringTextByCode(option.content, props.languageCode)}
          </label>
          break;
        case 'input':
          labelComponent =
            <TextInput
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              updateDelay={5}
              disabled={isDisabled}
              dateLocales={props.dateLocales}
            />;
          break;
        case 'numberInput':
          labelComponent =
            <NumberInput
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              ignoreClassName={optionClassName !== undefined}
              dateLocales={props.dateLocales}
            />;
          break;
        case 'timeInput':
          labelComponent =
            <Time
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              ignoreClassName={optionClassName !== undefined}
              dateLocales={props.dateLocales}
            />;
          break;
        case 'dateInput':
          labelComponent = <DateInput
            parentKey={optionKey}
            key={option.key}
            compDef={option}
            prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
            languageCode={props.languageCode}
            responseChanged={setResponseForKey(option.key)}
            openCalendar={touched && getSelectedKey() === option.key}
            disabled={isDisabled}
            dateLocales={props.dateLocales}
          />;
          break;
        default:
          labelComponent = <p key={option.key}>role inside single choice group not implemented yet: {option.role}</p>;
      }
    }

    return (<div className={clsx(
      "form-check d-flex align-items-center",
      {
        'mb-2': !isLast
      },
      optionClassName,
    )}
      key={option.key} >
      <div>
        {props.showOptionKey ?
          <span className="text-primary me-2">{option.key}</span>
          : null}
        <input
          className="form-check-input cursor-pointer"
          type="radio"
          name={props.parentKey}
          id={optionKey}
          value={option.key}
          checked={getSelectedKey() === option.key}
          disabled={isDisabled}
          onChange={handleSelectionChange}
        />
      </div>
      {labelComponent}

    </div>)
  }

  if (!(props.compDef as ItemGroupComponent).items) {
    return <p>ERROR: single choice options missing</p>
  }

  return (
    <fieldset
      id={props.parentKey}
      aria-label="single choice options"
    >
      {
        (props.compDef as ItemGroupComponent).items.map(
          (option, index) => renderResponseOption(option, (props.compDef as ItemGroupComponent).items.length - 1 === index)
        )
      }
    </fieldset>
  );
};

export default SingleChoiceGroup;
