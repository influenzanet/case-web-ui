import React, { RefObject, useEffect, useRef, useState } from 'react';
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
import { InputHandleRef } from '../../../../../types/type';

interface SingleChoiceGroupProps extends CommonResponseComponentProps {
  showOptionKey?: boolean;
}

const SingleChoiceGroup: React.FC<SingleChoiceGroupProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const inputRefs: { key: string | undefined, obj: RefObject<InputHandleRef>}[] = []

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleSelectionChange = (key: string) => {
    if(key === getSelectedKey()) {
      return;
    }

    const currentlySelected = inputRefs.find((input) => input.key === getSelectedKey());
    if(currentlySelected) {
      currentlySelected.obj.current?.clearValue();
    }

    onOptionSelected(key);
  };

  const onOptionSelected = (key: string) => {
    setTouched(true);
    setResponse({
      key: props.compDef.key ? props.compDef.key : 'no key found',
      items: [{ key: key }]
    });
  }

  const getHandleSelectionCallback = (key: string | undefined) => () => {
    if(!key) {
      return;
    }
    handleSelectionChange(key)
  }

  const setResponseForKey = (key: string | undefined) => (response: ResponseItem | undefined) => {
    if (!key || !props.compDef.key) { return; }

    if(key === getSelectedKey()) {
      setTouched(true);

      if (!response) {
        setResponse({ key: props.compDef.key, items: [] });
      } else {
        setResponse({ key: props.compDef.key, items: [{ ...response }] });
      }
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

    const inputRefHandle = useRef<InputHandleRef>(null);

    inputRefs.push({ key: option.key, obj: inputRefHandle });

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
              ref={inputRefHandle}
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              updateDelay={5}
              disabled={isDisabled}
              dateLocales={props.dateLocales}
              onFocus={getHandleSelectionCallback(option.key)}
            />;
          break;
        case 'numberInput':
          labelComponent =
            <NumberInput
              ref={inputRefHandle}
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              ignoreClassName={optionClassName !== undefined}
              dateLocales={props.dateLocales}
              onFocus={getHandleSelectionCallback(option.key)}
            />;
          break;
        case 'timeInput':
          labelComponent =
            <Time
              ref={inputRefHandle}
              parentKey={props.parentKey}
              key={option.key}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={setResponseForKey(option.key)}
              ignoreClassName={optionClassName !== undefined}
              dateLocales={props.dateLocales}
              onFocus={getHandleSelectionCallback(option.key)}
            />;
          break;
        case 'dateInput':
          labelComponent = <DateInput
            ref={inputRefHandle}
            parentKey={optionKey}
            key={option.key}
            compDef={option}
            prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
            languageCode={props.languageCode}
            responseChanged={setResponseForKey(option.key)}
            openCalendar={touched && getSelectedKey() === option.key}
            disabled={isDisabled}
            dateLocales={props.dateLocales}
            onFocus={getHandleSelectionCallback(option.key)}
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
          onChange={getHandleSelectionCallback(option.key)}
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
