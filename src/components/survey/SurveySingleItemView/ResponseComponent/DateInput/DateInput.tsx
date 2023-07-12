import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, Ref } from 'react';
import { ResponseItem } from 'survey-engine/data_types';
import DatePicker, { registerLocale } from "react-datepicker";
import { CommonResponseComponentProps, getClassName, getLocaleStringTextByCode } from '../../utils';
import { format, getYear, getMonth } from 'date-fns';
import { addYears, getUnixTime, eachMonthOfInterval, startOfYear, endOfYear } from 'date-fns';
import YearMonthSelector from './YearMonthSelector';
import clsx from 'clsx';
import { InputHandleRef } from '../../../../../types/type';

interface DateInputProps extends CommonResponseComponentProps {
  openCalendar: boolean | undefined;
  defaultClassName?: string;
  onFocus?: () => void
}

const DateInput = forwardRef<InputHandleRef, DateInputProps>((props, ref) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);
  const datePickerRef = useRef<DatePicker>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    props.prefill && props.prefill.value ? new Date(parseInt(props.prefill.value) * 1000) : null
  );

  useImperativeHandle(ref, () => {
    return {
      clearValue: () => handleDateChange(null)
    }
  });

  useEffect(() => {
    props.dateLocales?.forEach(loc => {
      registerLocale(loc.code, loc.locale);
    })
  }, []);

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
    if (props.openCalendar) {
      datePickerRef.current?.setOpen(true)
    }
  }, [props.openCalendar]);

  const handleDateChange = (date: Date | null) => {
    if(!props.compDef.key) {
      return;
    }
    setTouched(true);

    setSelectedDate(date);

    const response: ResponseItem = {
      key: props.compDef.key
    };

    if(date) {
      response.dtype = 'date';
      response.value = getUnixTime(date).toString()
    }

    setResponse(response);
  }

  const minDate = props.compDef.properties?.min ? new Date((props.compDef.properties?.min as number) * 1000) : new Date(1900, 1);
  const maxDate = props.compDef.properties?.max ? new Date((props.compDef.properties?.max as number) * 1000) : addYears(new Date(), 100);

  const DatepickerContainer = ({ className, children }: any) => {
    return (
      <div className="shadow bg-white">
        <div className="react-datepicker__triangle"></div>
        <span className={className} >{children}</span>
      </div>
    )
  }

  const DatepickerHeader = ({ date, decreaseMonth, increaseMonth, changeYear, changeMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }: any) => {
    const years = new Array<number>();
    for (let i = getYear(minDate); i <= getYear(maxDate); i++) {
      years.push(i);
    }
    years.reverse();

    const referenceYear = getYear(new Date());
    const months = eachMonthOfInterval({
      start: startOfYear(new Date(referenceYear, 0, 2)),
      end: endOfYear(new Date(referenceYear, 0, 2)),
    }).map(m => {
      return format(m, 'MMM', { locale: props.dateLocales?.find(l => l.code === props.languageCode)?.locale })
    });

    return (
      <div className="my-1 d-flex justify-content-between align-items-center">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="btn datepicker-arrow-btn p-0 ms-3 ">
          <span className="material-icons ">arrow_back</span>
        </button>
        <select
          className='form-select'
          value={getYear(date)}
          onChange={({ target: { value } }) => changeYear(value)}
          style={{ minWidth: 95 }}
        >
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          className='form-select ms-1'
          value={months[getMonth(date)]}
          onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="btn datepicker-arrow-btn p-0 me-3">
          <span className="material-icons ">arrow_forward</span>
        </button>
      </div>
    )
  }

  let datepicker = <p>{'...'}</p>;
  const placeholder = getLocaleStringTextByCode(props.compDef.description, props.languageCode);

  switch (props.compDef.properties?.dateInputMode) {
    case 'YM':
      datepicker = <YearMonthSelector
        currentDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleDateChange}
        languageCode={props.languageCode}
        dateLocales={props.dateLocales}
        yearPlaceholder={placeholder}
        onFocus={props.onFocus}
      />
      break;
    case 'Y':
      datepicker = <YearMonthSelector
        currentDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onlyYear={true}
        onChange={handleDateChange}
        languageCode={props.languageCode}
        dateLocales={props.dateLocales}
        yearPlaceholder={placeholder}
        onFocus={props.onFocus}
      />
      break;
    default:
      datepicker = <div
        ref={wrapperRef}
        tabIndex={0}
        className="border-0 btn bg-white p-0 d-flex flex-row "
        onClick={() => !datePickerRef.current?.isCalendarOpen() ? datePickerRef.current?.setOpen(true) : false}
      >
        <DatePicker
          id={props.parentKey}
          ref={datePickerRef}
          className="form-control border-0 shadow-none p-1"
          selected={selectedDate}
          locale={props.languageCode}
          onChange={handleDateChange}
          dateFormat={props.dateLocales?.find(loc => loc.code === props.languageCode)?.format}
          placeholderText={placeholder}
          minDate={props.compDef.properties?.min ? new Date((props.compDef.properties?.min as number) * 1000) : undefined}
          maxDate={props.compDef.properties?.max ? new Date((props.compDef.properties?.max as number) * 1000) : undefined}
          onCalendarOpen={() => wrapperRef.current?.focus()}
          autoComplete="off"
          disabled={props.compDef.disabled !== undefined || props.disabled === true}
          popperPlacement="top"
          disabledKeyboardNavigation
          calendarContainer={DatepickerContainer}
          renderCustomHeader={DatepickerHeader}
          onFocus={props.onFocus}
        />
        <span className="m-1 d-none d-sm-inline material-icons">date_range</span>
      </div>
      break;
  }

  return (
    <div className={clsx(
      props.defaultClassName,
      "d-flex align-items-center",
      getClassName(props.compDef.style)
    )}>
      {props.compDef.content ?
        <label className="me-1">
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </label>
        : null}
      {datepicker}
    </div >
  );
});

export default DateInput;
