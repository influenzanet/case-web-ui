import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getYear, format, eachMonthOfInterval, startOfYear, getMonth, endOfYear } from 'date-fns';

interface YearMonthSelectorProps {
  currentDate?: Date | null;
  onChange: (date: Date | null) => void;
  minDate: Date;
  maxDate: Date;
  onlyYear?: boolean;
  languageCode: string;
  dateLocales?: Array<{ code: string, locale: any, format: string }>;
  yearPlaceholder?: string;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
}

const YearMonthSelector: React.FC<YearMonthSelectorProps> = (props) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(props.currentDate ? getYear(props.currentDate) : null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(props.currentDate ? getMonth(props.currentDate) : null);

  useEffect(() => {
    setSelectedYear(props.currentDate ? getYear(props.currentDate) : null);
    setSelectedMonth(props.currentDate ? getMonth(props.currentDate) : null);
  }, [props.currentDate]);

  useEffect(() => {
    if (!selectedYear) {
      props.onChange(null);
      return;
    }
    if (props.onlyYear) {
      props.onChange(new Date(selectedYear, 0, 2));
      return;
    }

    if (selectedMonth === null) {
      props.onChange(null);
      return;
    }
    props.onChange(new Date(selectedYear, selectedMonth, 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth]);

  const years = new Array<number>();
  for (let i = getYear(props.minDate); i <= getYear(props.maxDate); i++) {
    years.push(i);
  }
  years.reverse();

  const referenceYear = getYear(new Date());
  const months = eachMonthOfInterval({
    start: startOfYear(new Date(referenceYear, 0, 2)),
    end: endOfYear(new Date(referenceYear, 0, 2)),
  }).map(m => {
    return {
      label: format(m, 'MMMM', { locale: props.dateLocales?.find(l => l.code === props.languageCode)?.locale }),
      value: getMonth(m)
    }
  });

  const onChangeYear = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedYear(value && value !== '-1' ? parseInt(value) : null);
    setSelectedMonth(0);
  }, [setSelectedYear, setSelectedMonth]);

  const yearSelector = <select
    className="form-select mb-2 mb-sm-0"
    value={selectedYear !== null && selectedYear.toString() !== 'NaN' ? selectedYear : 'NaN'}
    onChange={onChangeYear}
    onFocus={props.onFocus}
  >
    <option value={'NaN'}>{props.yearPlaceholder}</option>
    {years.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  const onChangeMonth = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === 'NaN') {
        setSelectedYear(null);
        setSelectedMonth(null);
        return;
      }
      setSelectedMonth(parseInt(value));
  }, [setSelectedYear, setSelectedMonth]);

  const monthSelector = <select
    className="form-select mb-2 mb-sm-0"
    value={selectedMonth !== null ? selectedMonth : 'NaN'}
    onChange={onChangeMonth}
    onFocus={props.onFocus}
  >
    <option value="NaN"></option>
    {
      months.map(option => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))
    }
  </select>;

  return (
    <div
      className="row g-2"
    >
      <div className="col">
        {yearSelector}
      </div>

      {selectedYear && !props.onlyYear ?
        <div className="col-auto">
          {monthSelector}
        </div> : null}
    </div>
  );
};

export default YearMonthSelector;
