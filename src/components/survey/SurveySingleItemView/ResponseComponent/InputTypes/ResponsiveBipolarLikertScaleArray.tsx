import React from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';

interface ResponsiveBipolarLikertScaleArrayProps {
  componentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
}

const ResponsiveBipolarLikertScaleArray: React.FC<ResponsiveBipolarLikertScaleArrayProps> = (props) => {
  return (
    <p>ResponsiveBipolarLikertScaleArray</p>
  );
};

export default ResponsiveBipolarLikertScaleArray;
