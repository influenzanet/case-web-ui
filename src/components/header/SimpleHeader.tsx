import React from 'react';
import { SimpleLogoHeaderConfig } from '../../types/headerConfig';
import LanguageDropdown from './LanguageDropdown';
import clsx from 'clsx';
import { getExternalOrLocalContentURL } from '../../utils/routeUtils';
import { containerClassName } from '../../constants';


interface SimpleHeaderProps {
  loading: boolean;
  config?: SimpleLogoHeaderConfig;
  selectedLanguage: string;
  languages: Array<{ code: string; label: string; }>;
  onChangeLanguage: (code: string) => void;
  onOpenExternalPage?: (url: string) => void;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = (props) => {
  const renderLanguageSelector = (languages: Array<{ code: string; label: string; }>) => <LanguageDropdown
    selectedLanguage={props.selectedLanguage}
    languages={languages}
    onLanguageChanged={props.onChangeLanguage}
  />

  if (props.loading || !props.config) {
    return <div className="d-flex align-items-center bg-secondary justify-content-center h-100" style={{ minHeight: 100 }}>
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }

  return (
    <div className={containerClassName}>
      <div className={clsx("position-relative d-flex align-items-center", props.config.className)}>
        <img
          className={clsx('d-none d-sm-inline-block', props.config.image.lg.className)}
          src={getExternalOrLocalContentURL(props.config.image.lg.url)}
          alt={props.config.image.altText ? props.config.image.altText : 'App Logo'}
          height={props.config.image.lg.height}
          width={props.config.image.lg.width}
        />
        <div className="d-inline-block d-sm-none flex-grow-1">
          <img
            style={{ maxWidth: '100%' }}
            className={clsx(props.config.image.sm.className)}
            src={getExternalOrLocalContentURL(props.config.image.sm.url)}
            alt={props.config.image.altText ? props.config.image.altText : 'App Logo'}
            height={props.config.image.sm.height}
            width={props.config.image.sm.width}
          />
        </div>
        {
          props.config.useLanguageSelector ? <React.Fragment>
            <div
              // for large screens
              className="position-absolute d-none d-sm-flex top-0 end-0 h-100  align-items-center">
              {renderLanguageSelector(props.languages)}
            </div>
            <div
              // for small screens
              className="ps-1 d-sm-none align-items-center">
              {renderLanguageSelector(props.languages)}
            </div>

          </React.Fragment>
            : null
        }
      </div>
    </div>

  );
};

export default SimpleHeader;
