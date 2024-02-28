import React, { useState, useEffect, RefObject, useRef, useCallback } from 'react';
import { ItemComponent, ResponseItem, ItemGroupComponent, isItemGroupComponent } from 'survey-engine/data_types';
import { CommonResponseComponentProps, getLocaleStringTextByCode } from '../../utils';
import TextInput from './TextInput';
import clsx from 'clsx';
import TextViewComponent from '../../SurveyComponents/TextViewComponent';
import NumberInput from './NumberInput';
import { renderFormattedContent } from '../../renderUtils';
import ClozeQuestion from './ClozeQuestion';
import Time from './Time';
import { InputHandleRef } from '../../../../../types/type';


interface MultipleChoiceGroupProps extends CommonResponseComponentProps {
  showOptionKey?: boolean;
}

const MultipleChoiceGroup: React.FC<MultipleChoiceGroupProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const inputRefs: { key: string | undefined, obj: RefObject<InputHandleRef>}[] = [];

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
    const key = event.target.value;
    const checked = event.target.checked;

    if(! checked) {
      const inputHandle = inputRefs.find((input) => input.key === key);
      if(inputHandle) {
        inputHandle.obj.current?.clearValue();
      }
    }

    setResponseForKey(key, checked);
  };

  const setResponseForKey = (key: string, checked: boolean, value?: string, dtype?: string, items?: ResponseItem[]) => {
    setTouched(true);
    if (checked) {
      const newRI: ResponseItem = {
        key: key,
      }
      if (value) {
        newRI.value = value;
      }
      if (dtype) {
        newRI.dtype = dtype;
      }
      if (items) {
        newRI.items = items;
      }
      setResponse(prev => {
        if (!prev || !prev.items) {
          return {
            key: props.compDef.key ? props.compDef.key : 'no key found',
            items: [newRI]
          }
        }
        const ind = prev.items.findIndex(pr => pr.key === key);
        if (ind < 0) {
          prev.items.push(newRI);
        }
        else {
          prev.items[ind] = newRI;
        }
        return {
          ...prev,
          items: [...prev.items]
        }
      });
    } else {
      setResponse(prev => {
        if (!prev) {
          return undefined;
        }
        const newItems = prev.items?.filter(i => i.key !== key);
        if (!newItems || newItems.length < 1) {
          return undefined;
        }
        return {
          ...prev,
          items: newItems,
        }
      });
    }
  }

  const isChecked = (key: string): boolean => {
    if (!response || !response.items || response.items.length < 1) {
      return false;
    }
    return response.items.findIndex(ri => ri.key === key) > -1;
  }

  const isDisabled = (item: ItemComponent): boolean => {
    if (item.disabled === true) {
      const key = item.key ? item.key : 'no key found';
      if (isChecked(key)) {
        setResponse(prev => {
          if (!prev) { return { key: 'no key found', items: [] } }
          return {
            ...prev,
            items: prev.items?.filter(i => i.key !== key),
          }
        });
      }
      return true;
    }
    return false;
  }

  const renderResponseOption = (option: ItemComponent, isLast: boolean): React.ReactNode => {
    if (option.displayCondition === false) {
      return null;
    }
    const optionKey = props.parentKey + '.' + option.key;
    let labelComponent = <p>{'loading...'}</p>;
    const prefill = response?.items?.find(r => r.key === option.key);

    const inputRefHandle = useRef<InputHandleRef>(null);

    inputRefs.push({ key: option.key, obj: inputRefHandle });

    if (isItemGroupComponent(option)) {
      switch (option.role) {
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
            responseChanged={(response) => {
              const checkStatus = (response !== undefined && response.items !== undefined);
              setResponseForKey(option.key ? option.key : 'unknown', checkStatus, response?.value, undefined, response?.items);
            }}
            disabled={isDisabled(option)}
            dateLocales={props.dateLocales}
          />;
          break;
      }
    } else {
      switch (option.role) {
        case 'text':
          return <TextViewComponent
            key={option.key}
            compDef={option}
            languageCode={props.languageCode}
          />;
        case 'option':
          labelComponent = <label
            className="form-check-label cursor-pointer w-100"
            htmlFor={optionKey}>
            {getLocaleStringTextByCode(option.content, props.languageCode)}
          </label>;
          break;
        case 'input':
          labelComponent =
            <TextInput
              parentKey={props.parentKey}
              key={option.key}
              ref={inputRefHandle}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={(response) => {
                const value = response?.value;
                const checkStatus = (value !== undefined && value.length > 0);
                setResponseForKey(option.key ? option.key : 'unknown', checkStatus, value);
              }}
              updateDelay={5}
              disabled={isDisabled(option)}
              dateLocales={props.dateLocales}
            />;
          break;
        case 'timeInput':
          labelComponent =
            <Time
              parentKey={props.parentKey}
              key={option.key}
              ref={inputRefHandle}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={(response) => {
                const value = response?.value;
                const checkStatus = (value !== undefined && value.length > 0);
                setResponseForKey(option.key ? option.key : 'unknown', checkStatus, value);
              }}
              disabled={isDisabled(option)}
              dateLocales={props.dateLocales}
            />;
          break;
        case 'numberInput':
          labelComponent =
            <NumberInput
              parentKey={props.parentKey}
              key={option.key}
              ref={inputRefHandle}
              compDef={option}
              prefill={(prefill && prefill.key === option.key) ? prefill : undefined}
              languageCode={props.languageCode}
              responseChanged={(response) => {
                const value = response?.value;
                const checkStatus = (value !== undefined && value.length > 0);
                setResponseForKey(option.key ? option.key : 'unknown', checkStatus, value);
              }}
              disabled={isDisabled(option)}
              dateLocales={props.dateLocales}
            />;
          break;
        default:
          labelComponent = <p key={option.key}>role inside multiple choice group not implemented yet: {option.role}</p>
          break;
      }
    }

    return (<div className={clsx(
      "form-check d-flex align-items-center",
      {
        'mb-2': !isLast
      })}
      key={option.key} >
      <div>
        {props.showOptionKey ?
          <span className="text-primary me-2">{option.key}</span>
          : null}
        <input
          className="form-check-input cursor-pointer"
          type="checkbox"
          name={props.parentKey}
          id={optionKey}
          value={option.key}
          checked={isChecked(option.key ? option.key : 'no key found')}
          disabled={isDisabled(option)}
          onChange={handleSelectionChange}
        />
      </div>
      {labelComponent}
    </div>)

  }

  if (!(props.compDef as ItemGroupComponent).items) {
    return <p>ERROR: multiple choice options missing</p>
  }

  return (
    <fieldset
      id={props.parentKey}
      aria-label="multiple choice options"
    >
      {
        (props.compDef as ItemGroupComponent).items.map((option, index) =>
          renderResponseOption(option, (props.compDef as ItemGroupComponent).items.length - 1 === index)
        )
      }
    </fieldset>
  );
};

export default MultipleChoiceGroup;
