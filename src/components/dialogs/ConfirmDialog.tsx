import clsx from 'clsx';
import React from 'react';
import DialogBtn from '../buttons/DialogBtn';
import { defaultDialogPaddingXClass } from './contants';
import Dialog from './Dialog';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  color: 'warning';
  cancelText: string;
  confirmText: string;
  onConfirm: () => void;
  onClose: () => void;
  dialogPaddingXClass?: string;
  dialogPaddingYClass?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = (props) => {
  const paddingX = props.dialogPaddingXClass ? props.dialogPaddingXClass : defaultDialogPaddingXClass;

  return (
    <Dialog
      open={props.open}
      title={props.title}
      onClose={props.onClose}
      ariaLabelledBy="confirmDialogTitle"
      color={props.color}
      dialogPaddingXClass={props.dialogPaddingXClass}
      dialogPaddingYClass={props.dialogPaddingYClass}
    >
      <div className={clsx(
        paddingX,
        'py-3',
        'bg-grey-1'
      )}>
        {props.children}
        <div className="d-flex flex-wrap">
          <DialogBtn
            type="button"
            className="mt-2 me-2"
            color="primary"
            label={props.cancelText}
            onClick={props.onClose}
          />
          <DialogBtn
            type="button"
            className="mt-2"
            label={props.confirmText}
            color={props.color}
            onClick={props.onConfirm}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmDialog;
