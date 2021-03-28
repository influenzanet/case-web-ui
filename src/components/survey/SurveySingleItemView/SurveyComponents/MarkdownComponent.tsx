import clsx from 'clsx';
import React from 'react';
import { ItemComponent } from 'survey-engine/lib/data_types';
import { MarkdownRenderer } from '../../../displays';
import { getClassName, getLocaleStringTextByCode } from '../utils';

interface MarkdownComponentProps {
  compDef: ItemComponent;
  languageCode: string;
  className?: string;
}

const MarkdownComponent: React.FC<MarkdownComponentProps> = (props) => {
  const className = clsx(
    props.className,
    getClassName(props.compDef.style)
  );

  const content = getLocaleStringTextByCode(props.compDef.content, props.languageCode);

  return (
    <MarkdownRenderer
      className={className}
      markdown={content ? content : ''}
    />
  );
};

export default MarkdownComponent;
