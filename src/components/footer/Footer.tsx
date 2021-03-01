import React from 'react';
import { containerClassName } from '../../constants';
import { FooterContentConfig } from '../../types/footerConfig';
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
    return <div className="d-flex align-items-center bg-primary justify-content-center h-100" style={{ minHeight: 200 }}>
      <div className="spinner-border text-white" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
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
