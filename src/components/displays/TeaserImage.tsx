import clsx from 'clsx';
import React from 'react';
import { containerClassName } from '../../constants';
import { getExternalOrLocalContentURL } from '../../utils/routeUtils';
import styles from './TeaserImage.module.scss';

interface TeaserImageProps {
  image: {
    url: string;
    height?: number;
    className?: string;
    backgroundPosition?: string;
    copyrightNotice?: string;
    copyrightNoticeXAlignment?: 'start' | 'end'
  }
  textBox?: {
    className?: string;
    title?: string;
    content?: string;
  }
}

const TeaserImage: React.FC<TeaserImageProps> = (props) => {
  return (
    <div
      className={(clsx(
        styles.teaserImage,
        "d-flex align-items-center position-relative",
        props.image.className,
        {
          "pb-4": props.image.copyrightNotice
        }
      ))}
      style={{
        minHeight: props.image.height ? props.image.height : 367,
        backgroundImage: `url(${getExternalOrLocalContentURL(props.image.url)})`,
        backgroundPosition: props.image.backgroundPosition,
      }}
    >
      {props.textBox ? <div className={containerClassName}>
        <div className="row">
          <div className={clsx(
            // "col-12 col-md-6 col-lg-4",
            props.textBox.className
          )} >
            <div className={clsx('p-2', styles.textBox)}>
              {props.textBox && props.textBox.title && props.textBox.title.length > 0 ? <h4>{props.textBox.title}</h4> : null}
              {props.textBox && props.textBox.content ? <p className="m-0">{props.textBox.content}</p> : null}
            </div>
          </div>
        </div>
      </div> : null}
      {props.image.copyrightNotice ? <span className={clsx(
        'position-absolute px-1a py-a text-white bottom-0 m-1a fs-small',
        {
          'start-0': props.image.copyrightNoticeXAlignment === 'start',
          'end-0': props.image.copyrightNoticeXAlignment !== 'start',
        }
      )}
        style={{
          backgroundColor: 'rgba(32,32,32,0.5)'
        }}
      >{props.image.copyrightNotice}</span> : null}
    </div>
  );
};

export default TeaserImage;
