import React from 'react';
import { Modal } from 'react-bootstrap';
import clsx from 'clsx';
import { defaultDialogPaddingXClass, defaultDialogPaddingYClass } from './constants';


interface DialogProps {
  open: boolean;
  title: string;
  color?: 'primary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'lg' | 'xl';
  fullScreenFrom?: 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
  onClose: () => void;
  ariaLabelledBy: string;
  ariaDescribedBy?: string;
  dialogPaddingXClass?: string;
  dialogPaddingYClass?: string;
}


const Dialog: React.FC<DialogProps> = (props) => {
  const color = props.color ? props.color : 'primary';

  const isTextColorWhite = ['primary', 'danger'].includes(color);

  const paddingX = props.dialogPaddingXClass ? props.dialogPaddingXClass : defaultDialogPaddingXClass;
  const paddingY = props.dialogPaddingYClass ? props.dialogPaddingYClass : defaultDialogPaddingYClass;

  const headerContent = () => <React.Fragment>
    <h4 id={props.ariaLabelledBy}
      className={clsx(
        'flex-grow-1 m-0 fw-bold',
        {
          'text-white': isTextColorWhite
        }
      )}
    >
      {props.title}
    </h4>
    <div className="ps-2">
      <button type="button"
        onClick={props.onClose}
        className={clsx(
          "btn-close",
          {
            "btn-close-white": isTextColorWhite
          }
        )} aria-label="Exit"></button>
    </div>
  </React.Fragment>

  const dialogHeader = <React.Fragment>
    <div className={clsx(
      paddingX,
      paddingY,
      'd-flex align-items-center sticky-top ',
      `bg-${color}`,
    )}
    >
      {headerContent()}
    </div>

  </React.Fragment>


  return (
    <Modal
      scrollable={false}
      onHide={props.onClose}
      aria-labelledby={props.ariaLabelledBy}
      show={props.open}
      bgClassName="bg-grey-1"
      contentClassName="border-0"
      size={props.size}
      centered
      fullscreen={props.fullScreenFrom ? props.fullScreenFrom : 'sm-down'}
    >
      {dialogHeader}
      <div className="flex-grow-1 bg-grey-1">
        {props.children}
      </div>
    </Modal>
  );
};

export default Dialog;
