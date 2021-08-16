import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { isItemGroupComponent, ItemComponent, ItemGroupComponent, ResponseItem } from 'survey-engine/lib/data_types';
import { renderFormattedContent } from '../../renderUtils';
import { getClassName } from '../../utils';
import { getResponsiveModes, Variant } from './responsiveUtils';

interface ResponsiveBipolarLikertScaleArrayProps {
  componentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const ResponsiveBipolarLikertScaleArray: React.FC<ResponsiveBipolarLikertScaleArrayProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const [options, setOptions] = useState<ItemGroupComponent | undefined>();


  useEffect(() => {
    if (!isItemGroupComponent(props.compDef)) {
      console.warn('ResponsiveBipolarLikertScaleArray: no components found.');
      return;
    }
    const options = props.compDef.items.find(item => item.role === 'options');

    if (options === undefined || !isItemGroupComponent(options)) {
      console.warn('ResponsiveBipolarLikertScaleArray: no options found.');
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

    return <p>
      vertical mode
    </p>
  }

  const renderWithLabelRowMode = () => {
    if (!isItemGroupComponent(props.compDef)) {
      return <p>Empty</p>;
    }

    if (!options) {
      return <p>No options found.</p>;
    }

    return <p>
      label row mode
    </p>
  }

  const renderTableMode = () => {
    if (!isItemGroupComponent(props.compDef)) {
      return <p>Empty</p>;
    }

    if (!options) {
      return <p>No options found.</p>;
    }

    const useFixedLayout = props.compDef.style?.find(st => st.key === 'tableModeLayout')?.value === 'fixed';
    const labelColWidth = props.compDef.style?.find(st => st.key === 'tableModeLabelColWidth')?.value;
    const tableClassName = props.compDef.style?.find(st => st.key === 'tableModeClassName')?.value;


    return <table className={clsx(
      "table m-0",
      tableClassName
    )}
      style={useFixedLayout ? {
        tableLayout: 'fixed',
      } : undefined}
    >
      <tbody>
        {props.compDef.items.map(item => {
          let rowContent = <td colSpan={options.items.length + 1}>Unknown row type: {item.role}</td>;

          switch (item.role) {
            case 'row':
              if (!isItemGroupComponent(item)) {
                rowContent = <span key={item.key}>Row labels are missing</span>
                break;
              }

              const startLabelComp = item.items.find(l => l.role === "start");
              const endLabelComp = item.items.find(l => l.role === "end");
              if (!startLabelComp || !endLabelComp) {
                rowContent = <span key={item.key}>Row labels are missing</span>
                break;
              }
              rowContent = <React.Fragment>
                <td scope="row"
                  className="text-start"
                  style={labelColWidth ? {
                    width: labelColWidth
                  } : undefined}
                >
                  {renderFormattedContent(startLabelComp, props.languageCode)}
                </td>
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
                <td scope="row"
                  className="text-end"
                  style={labelColWidth ? {
                    width: labelColWidth
                  } : undefined}
                >
                  {renderFormattedContent(endLabelComp, props.languageCode)}
                </td>
              </React.Fragment>
              break;
            case 'options':
              return undefined;
            default:
              break;
          }
          const rowClassName = item.style?.find(st => st.key === 'tableModeClassName')?.value;
          return <tr key={props.compDef + '.' + item.key}
            className={rowClassName}
          >
            {rowContent}
          </tr>
        })}
      </tbody>
    </table>
  }

  const renderMode = (mode: Variant) => {
    switch (mode) {
      case 'vertical':
        return renderVerticalMode();
      case 'withLabelRow':
        return renderWithLabelRowMode();
      case 'table':
        return renderTableMode();
      default:
        return <p>unknown mode: {mode}</p>
    }
  }

  return (
    <React.Fragment>
      {getResponsiveModes(renderMode, props.compDef.style)}
    </React.Fragment>
  );
};

export default ResponsiveBipolarLikertScaleArray;
