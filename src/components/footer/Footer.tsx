import React from 'react';
import { containerClassName } from '../../constants';
import { FooterContentConfig } from '../../types/footerConfig';
import LoadingPlaceholder from '../displays/LoadingPlaceholder';
import FooterColumn from './FooterComponents/FooterColumn';

interface FooterProps {
  loading?: boolean;
  content?: FooterContentConfig;
  onChangeLanguage: (code: string) => void;
  onNavigate: (url: string, external?: boolean) => void;
  onOpenDialog: (dialog: string) => void;
}

const Footer: React.FC<FooterProps> = (props) => {
  if (props.loading || !props.content) {
    return <LoadingPlaceholder color="primary" minHeight={300} />
  }

  return (
    <div className="w-100 bg-primary">
      <div className={containerClassName}>
        <div className="row pb-3">
          {props.content.columns.map(
            column =>
              <FooterColumn
                key={column.columnKey}
                title={column.columnTitle}
                items={column.items}
                classNameOverride={column.classNameOverride}
                onChangeLanguage={props.onChangeLanguage}
                onNavigate={props.onNavigate}
                onOpenDialog={props.onOpenDialog}
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
