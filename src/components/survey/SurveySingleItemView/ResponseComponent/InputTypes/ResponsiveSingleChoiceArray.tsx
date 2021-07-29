import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { isItemGroupComponent, ItemComponent, ItemGroupComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { renderFormattedContent } from '../../renderUtils';
import { getClassName } from '../../utils';

interface ResponsiveSingleChoiceArrayProps {
  componentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

interface BreakpointModeDef {
  start?: string;
  end?: string;
  variant: Variant;
}

type Variant = 'vertical' | 'horizontal' | 'table';

const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'];

interface VerticalModeOptionProps {
  slotFullKey: string;
  optionKey?: string;
  className?: string;
  optionDef: ItemComponent;
  isLast: boolean;
  isChecked: boolean;
  languageCode: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const VerticalModeOption: React.FC<VerticalModeOptionProps> = (props) => {
  const optionFullKey = props.slotFullKey + '.' + props.optionKey;
  return <div className={clsx(
    "form-check d-flex align-items-center",
    {
      'mb-2': !props.isLast,
    },
    props.className,
  )}
    key={optionFullKey} >
    <div>
      <input
        className="form-check-input cursor-pointer"
        type="radio"
        name={props.slotFullKey}
        id={optionFullKey}
        value={props.optionKey}
        onChange={props.onChange}
        checked={props.isChecked}
      />
    </div>
    <label className="form-check-label cursor-pointer flex-grow-1" htmlFor={optionFullKey}>
      {renderFormattedContent(props.optionDef, props.languageCode, 'cursor-pointer')}
    </label>
  </div>
}


const ResponsiveSingleChoiceArray: React.FC<ResponsiveSingleChoiceArrayProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [options, setOptions] = useState<ItemGroupComponent | undefined>();


  useEffect(() => {
    if (!isItemGroupComponent(props.compDef)) {
      console.warn('ResponsiveSingleChoiceArray: no components found.');
      return;
    }
    const options = props.compDef.items.find(item => item.role === 'options');

    if (options === undefined || !isItemGroupComponent(options)) {
      console.warn('ResponsiveSingleChoiceArray: no options found.');
      return;
    }
    setOptions(options);
  }, [props.compDef]);

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);


  const radioSelectionChanged = (rowKey: string | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!rowKey) { return; }
    const selectedValue = event.target.value;

    setTouched(true);
    setResponse(prev => {
      if (!prev || !prev.items) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          items: [{
            key: rowKey, items: [{ key: selectedValue }]
          }]
        }
      }

      const rowIndex = prev.items.findIndex(item => item.key === rowKey);
      const items = [...prev.items];
      if (rowIndex > -1) {
        items[rowIndex].items = [{ key: selectedValue }];
      } else {
        items.push({
          key: rowKey, items: [{ key: selectedValue }]
        });
      }

      return {
        ...prev,
        items: items
      }
    });
  }


  const isResponseSet = (rowKey: string | undefined, itemKey: string | undefined): boolean => {
    if (!rowKey || !itemKey) { return false; }

    if (!response || !response.items || response.items.length < 1) {
      return false;
    }
    const rowResponse = response.items.find(item => item.key === rowKey);
    if (!rowResponse || !rowResponse.items || rowResponse.items.length < 1) { return false; }
    const resp = rowResponse.items.find(item => item.key === itemKey);
    return resp !== undefined;
  }

  const renderVerticalMode = () => {
    if (!isItemGroupComponent(props.compDef)) {
      return <p>Empty</p>;
    }

    if (!options) {
      return <p>No options found.</p>;
    }

    const reverseOrder = props.compDef.style?.find(s => s.key === 'verticalModeReverseOrder')?.value === 'true';

    const rows = props.compDef.items;
    return <React.Fragment>
      {rows.map((item, index) => {
        switch (item.role) {
          case 'row':
            const rowKey = props.compDef.key + '.' + item.key;
            const sortedOptions = reverseOrder ? options.items.slice().reverse() : options.items;
            return <div key={item.key}
              className={clsx(
                { 'mb-2 pb-2': index !== rows.length - 1 },
                getClassName(item.style),
              )}
            >
              <h6
                id={rowKey + 'label'}
                className={clsx(
                  'fw-bold'
                )}
              >
                {renderFormattedContent(item, props.languageCode)}
              </h6>
              <fieldset
                id={props.compDef.key + '.' + item.key}
                aria-describedby={rowKey + 'label'}
              >
                {sortedOptions.map((option, index) => {
                  const optionClassName = getClassName(option.style);

                  return <VerticalModeOption
                    key={option.key}
                    slotFullKey={rowKey}
                    optionKey={option.key}
                    optionDef={option}
                    className={optionClassName}
                    isLast={index === options.items.length - 1}
                    isChecked={isResponseSet(item.key, option.key)}
                    languageCode={props.languageCode}
                    onChange={radioSelectionChanged(item.key)}
                  />
                })}
              </fieldset>
            </div>;
          case 'options':
            return undefined;
          default:
            return <p>Unknown item role: {item.role}</p>
        }
      })}
    </React.Fragment>
  }

  const renderHorizontalRow = (rowDef: ItemComponent, options: ItemGroupComponent, isLast: boolean) => {
    const rowKey = rowDef.key;

    const labelOnTop = props.compDef.style?.find(s => s.key === 'horizontalModeLabelPlacement')?.value === 'top';

    return <div
      key={rowKey}
      className={clsx(
        { 'mb-2 pb-2': !isLast },
        getClassName(rowDef.style),
      )}
    >
      <h6 id={rowKey + 'label'}

        className={clsx(
          'fw-bold'
        )}
      >
        {renderFormattedContent(rowDef, props.languageCode)}
      </h6>
      <fieldset
        id={rowKey}
        name={rowKey}
        className={clsx(
          "d-flex",
        )}
        aria-describedby={rowKey + 'label'}
      >
        {
          options.items.map(
            option => {
              const optionKey = option.key;
              const radioBtn = (<div
                className={clsx(
                  "text-center",
                )}
              >
                <input
                  className="form-check-input cursor-pointer"
                  type="radio"
                  name={rowKey}
                  id={optionKey}
                  onChange={radioSelectionChanged(rowKey)}
                  value={option.key}
                  checked={isResponseSet(rowKey, option.key)}
                />
              </div>);

              const optionLabelClassName = getClassName(option.style)

              const label = (<div className={clsx(
                {
                  "text-center": !optionLabelClassName,
                },
                optionLabelClassName
              )}>
                <label htmlFor="todo-optionkey" >
                  {renderFormattedContent(option, props.languageCode, 'cursor-pointer')}
                </label>
              </div>);

              return <div
                key={option.key}
                className={clsx(
                  "flex-grow-1",
                )}
                style={{ flexBasis: 0 }}
              >
                {labelOnTop ? label : null}
                {radioBtn}
                {!labelOnTop ? label : null}
              </div>
            }
          )
        }
      </fieldset>
    </div>
  }

  const renderHorizontalMode = () => {
    if (!isItemGroupComponent(props.compDef)) {
      return <p>Empty</p>;
    }

    if (!options) {
      return <p>No options found.</p>;
    }

    const rows = props.compDef.items;

    return <React.Fragment>
      {rows.map((item, index) => {
        switch (item.role) {
          case 'row':
            return renderHorizontalRow(item, options, index === rows.length);
          case 'options':
            return undefined;
          default:
            return <p>Unknown item role: {item.role}</p>
        }
      })}
    </React.Fragment>
  }

  const renderTableMode = () => {
    if (!isItemGroupComponent(props.compDef)) {
      return <p>Empty</p>;
    }

    if (!options) {
      return <p>No options found.</p>;
    }

    const useFixedLayout = props.compDef.style?.find(st => st.key === 'tableModeLayout')?.value === 'fixed';
    const useFirstColWidth = props.compDef.style?.find(st => st.key === 'tableModeFirstColWidth')?.value;
    const tableClassName = props.compDef.style?.find(st => st.key === 'tableModeClassName')?.value;

    return <table className={clsx(
      "table",
      tableClassName
    )}
      style={useFixedLayout ? {
        tableLayout: 'fixed',
      } : undefined}
    >
      <thead>
        <tr className={getClassName(options.style)}>
          <th scope="col" style={useFirstColWidth ? {
            width: useFirstColWidth
          } : undefined}></th>

          {options.items.map(item => <th
            key={props.compDef + '.' + item.key}
            scope="col"
            className="text-center"
          >
            {renderFormattedContent(item, props.languageCode, 'cursor-pointer')}
          </th>)}

        </tr>
      </thead>
      <tbody>
        {props.compDef.items.map(item => {
          let rowContent = <td colSpan={options.items.length + 1}>Unknown row type: {item.role}</td>;
          switch (item.role) {
            case 'row':
              rowContent = <React.Fragment>
                <th scope="row">
                  {renderFormattedContent(item, props.languageCode)}
                </th>
                {options.items.map(oi => <td
                  key={props.compDef + '.' + oi.key}
                  className="text-center align-middle"
                >
                  <input
                    className="form-check-input cursor-pointer"
                    type="radio"
                    onChange={radioSelectionChanged(item.key)}
                    value={oi.key}
                    checked={isResponseSet(item.key, oi.key)}
                  />
                </td>)}
              </React.Fragment>
              break;
            case 'options':
              return undefined;
            default:
              break;
          }
          return <tr key={props.compDef + '.' + item.key}
            className={getClassName(item.style)}
          >
            {rowContent}
          </tr>
        })}
      </tbody>
    </table>
  }

  const getModeForBreakpont = (bp: string): Variant | undefined => {
    const bpMode = props.compDef.style?.find(style => style.key === `${bp}Mode`);
    if (!bpMode) {
      return undefined;
    }
    return bpMode.value as Variant;
  }

  const getDefaultMode = (): Variant => {
    const bpMode = props.compDef.style?.find(style => style.key === 'defaultMode');
    if (!bpMode) {
      return 'horizontal';
    }
    return bpMode.value as Variant;
  }

  const renderMode = (mode: Variant) => {
    switch (mode) {
      case 'vertical':
        return renderVerticalMode();
      case 'horizontal':
        return renderHorizontalMode();
      case 'table':
        return renderTableMode();
      default:
        return <p>unknown mode: {mode}</p>
    }
  }

  const getResponsiveModes = () => {
    const breakpointModes: Array<BreakpointModeDef> = [];
    let currentMode: BreakpointModeDef = {
      variant: getDefaultMode()
    };

    breakpoints.forEach(bp => {
      const mode = getModeForBreakpont(bp);
      if (mode === undefined) {
        return;
      }
      currentMode.end = bp;
      breakpointModes.push(currentMode);
      currentMode = {
        start: bp,
        variant: mode,
      }
    });
    breakpointModes.push(currentMode);

    const className = getClassName(props.compDef.style);

    return (
      <React.Fragment>
        {
          breakpointModes.map((bm, index) => <div
            key={index.toString()}
            className={clsx(
              'overflow-visible',
              {
                'd-none': bm.start !== undefined,
                [`d-${bm.start}-block`]: bm.start !== undefined,
                [`d-${bm.end}-none`]: bm.end !== undefined
              },
              className,
            )}
          >
            {renderMode(bm.variant)}
          </div>)
        }
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {getResponsiveModes()}
    </React.Fragment>
  );
};

export default ResponsiveSingleChoiceArray;
