import clsx from 'clsx';
import React from 'react';
import { isItemGroupComponent, ItemComponent } from 'survey-engine/data_types';
import { getClassName, getLocaleStringTextByCode } from './utils';


export const renderFormattedContent = (component: ItemComponent, languageCode: string, defaultClassNamePerPart?: string) => {
  if (isItemGroupComponent(component)) {
    return <React.Fragment>
      {
        component.items.map(item => <span
          key={item.key}
          className={
            clsx(
              defaultClassNamePerPart,
              getClassName(item.style)
            )
          }
        >
          {getLocaleStringTextByCode(item.content, languageCode)}
        </span>)
      }
    </React.Fragment>
  } else {
    return <span className={defaultClassNamePerPart}>
      {getLocaleStringTextByCode(component.content, languageCode)}
    </span>
  }
}
