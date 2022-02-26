import React from 'react';
import { FooterLinkItemConfig } from '../../../types/footerConfig';
import LinkButton from './FooterLinkButton';

interface FooterColumnProps {
  title: string;
  items: Array<FooterLinkItemConfig>;
  classNameOverride?: string;
  onNavigate: (url: string, external: boolean) => void;
  onChangeLanguage: (code: string) => void;
  onOpenDialog: (dialog: string) => void;
}


const footerColClass = 'col-12 col-sm-10 col-md-8 col-lg-4 col-xl-3 mt-3 text-white';

const FooterColumn: React.FC<FooterColumnProps> = (props) => {

  const renderItem = (item: FooterLinkItemConfig) => {
    return <LinkButton
      key={item.itemKey}
      text={item.itemText}
      iconClass={item.iconClass}
      external={item.type === 'external'}
      onClick={() => {
        switch (item.type) {
          case 'external':
            if (!item.value) { break; }
            props.onNavigate(item.value, true);
            break;
          case 'internal':
            if (!item.value) { break; }
            props.onNavigate(item.value, false);
            break;
          case 'language':
            if (!item.value) { break; }
            props.onChangeLanguage(item.value)
            break;
          case 'dialog':
            if (!item.value) { break; }
            props.onOpenDialog(item.value)
            break;
          default:
            console.warn(`unknown item type: ${item.type}`)
            break;
        }
      }}
    />
  }

  return (
    <div className={props.classNameOverride ? props.classNameOverride : footerColClass}>
      <h4
        className="border-1 border-bottom pb-1 m-0"
      >{props.title}</h4>
      {props.items.map(item => renderItem(item))}
    </div>

  );
};

export default FooterColumn;
