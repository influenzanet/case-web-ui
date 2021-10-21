import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import DialogBtn from '../buttons/DialogBtn';
import MarkdownRenderer from '../displays/MarkdownRenderer';
import Dialog from './Dialog';

import { defaultDialogPaddingXClass } from './constants';

interface ConsentDialogProps {
  open: boolean;
  title: string;
  content?: string;
  cancelBtn: string;
  acceptBtn: string;
  size?: 'sm' | 'lg' | 'xl';
  fullScreenFrom?: 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down';
  onConfirmed: () => void;
  onCancelled: () => void;
  dialogPaddingXClass?: string;
  dialogPaddingYClass?: string;
}

const ConsentDialog: React.FC<ConsentDialogProps> = (props) => {
  const [scrollComplete, setScrollComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const paddingX = props.dialogPaddingXClass ? props.dialogPaddingXClass : defaultDialogPaddingXClass;

  const handleScroll = () => {
    if (containerRef.current && containerRef.current.scrollHeight - containerRef.current.scrollTop - containerRef.current.clientHeight < 5) {
      setScrollComplete(true);
    }
  };

  useEffect(() => {
    if (props.open) {
      setTimeout(() => handleScroll(), 1500);
      setTimeout(() => handleScroll(), 3500);
    }
  }, [props.open])

  return (
    <Dialog
      open={props.open}
      onClose={props.onCancelled}
      title={props.title}
      ariaLabelledBy="contentDialogTitle"
      size={props.size}
      fullScreenFrom={props.fullScreenFrom}
      dialogPaddingXClass={props.dialogPaddingXClass}
      dialogPaddingYClass={props.dialogPaddingYClass}
    >
      {props.content ?
        <div
          className={clsx(
            // styles.content,
            paddingX,
            "pb-2 pt-3 bg-white overflow-auto")}
          ref={containerRef}
          onScroll={() => handleScroll()}
          /*style={{
            maxHeight: fullScreen ? 3000 : '60vh',
          }}*/
          tabIndex={0}
        >
          <MarkdownRenderer
            markdown={props.content} />
        </div>
        : null}
      <div className="container-fluid">
        <div className={clsx(
          "bg-grey-1",
          paddingX,
          "pt-2 pb-4 pb-sm-3",
          "row"
          // styles.btns
        )}>
          <div className="col-12 col-sm-6 p-0 pe-sm-1">
            <DialogBtn
              className="w-100"
              color="primary"
              onClick={props.onConfirmed}
              label={props.acceptBtn}
              disabled={!scrollComplete}
            />

          </div>
          <div className="col-12 col-sm-6 p-0 ps-sm-2">
            <DialogBtn
              className="w-100 my-2 my-sm-0"
              color="primary"
              outlined={true}
              onClick={props.onCancelled}
              label={props.cancelBtn}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConsentDialog;
