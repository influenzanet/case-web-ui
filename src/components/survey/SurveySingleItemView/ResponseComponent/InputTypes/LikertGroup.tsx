import React, { useEffect, useState } from 'react';
import { ItemComponent, ItemGroupComponent } from 'survey-engine/lib/data_types/survey-item-component';
import { ResponseItem } from 'survey-engine/lib/data_types/response';
import TextViewComponent from '../../SurveyComponents/TextViewComponent';
import LikertScale from './LikertScale';

interface LikertGroupProps {
  componentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const LikertGroup: React.FC<LikertGroupProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);

  const getPrefillForItem = (item: ItemComponent): ResponseItem | undefined => {
    if (!props.prefill || !props.prefill.items) { return undefined; }
    const itemPrefill = props.prefill.items.find(ri => ri.key === item.key);
    return itemPrefill;
  }

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleItemResponse = (key: string) => (response: ResponseItem | undefined) => {
    setTouched(true);
    setResponse(
      prev => {
        if (!prev || !prev.items) {
          return {
            key: props.compDef.key ? props.compDef.key : 'no key defined',
            items: response ? [response] : [],
          }
        }

        if (!response) {
          const newItems = prev.items?.filter(i => i.key !== key)
          if (!newItems || newItems.length < 1) {
            return undefined;
          }
          return {
            ...prev,
            items: newItems,
          }
        }

        const ind = prev.items.findIndex(item => item.key === response.key);
        if (ind > -1) {
          prev.items[ind] = { ...response };
        } else {
          prev.items.push({ ...response });
        }
        return {
          ...prev,
          items: [...prev.items],
        }
      });
  };

  const renderRow = (row: ItemComponent): React.ReactNode => {
    if (row.displayCondition === false) {
      return null;
    }
    const rowKey = props.componentKey + '.' + row.key;

    switch (row.role) {
      case 'text':
        return <TextViewComponent
          key={rowKey}
          compDef={row}
          languageCode={props.languageCode}
        />
      case 'likert':
        return <LikertScale
          key={rowKey}
          componentKey={rowKey}
          languageCode={props.languageCode}
          compDef={row}
          prefill={getPrefillForItem(row)}
          responseChanged={handleItemResponse(row.key ? row.key : 'no key found')}
        />
      default:
        return <p key={row.key}>role inside likert group not implemented yet: {row.role}</p>
    }
  }

  return (
    <React.Fragment>
      {(props.compDef as ItemGroupComponent).items.map((row) => renderRow(row))}
    </React.Fragment>
  );
};

export default LikertGroup;
