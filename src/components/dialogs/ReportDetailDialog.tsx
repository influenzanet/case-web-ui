import clsx from 'clsx';
import React from 'react';
import { defaultDialogPaddingXClass, Dialog } from '.';
import { AvatarConfig } from '../../types/avatars';
import { Profile } from '../../types/profile';
import { DialogBtn } from '../buttons';
import { Avatar, MarkdownRenderer } from '../displays';

interface ReportDetailDialogProps {
  open: boolean;
  dialogTexts: {
    title: string;
    closeBtn: string;
  },
  reportInfos: {
    reportName: string;
    studyName?: string;
    cardIcon?: string;
    subtitle: string;
    profile?: Profile;
    data: Array<{
      label?: string;
      value: string;
      useMarkdown?: boolean;
    }>;
  },
  avatars: Array<AvatarConfig>;
  onClose: () => void;
  dialogPaddingXClass?: string;
  dialogHeaderPaddingYClass?: string;
  dialogBodyPaddingYClass?: string;
}

const ReportDetailDialog: React.FC<ReportDetailDialogProps> = (props) => {
  const paddingX = props.dialogPaddingXClass ? props.dialogPaddingXClass : defaultDialogPaddingXClass;

  return (
    <Dialog
      open={props.open}
      title={props.dialogTexts.title}
      onClose={props.onClose}
      ariaLabelledBy="dialogTitle"
      color={'primary'}
      dialogPaddingXClass={props.dialogPaddingXClass}
      dialogPaddingYClass={props.dialogHeaderPaddingYClass}
    >
      <div className={clsx(
        paddingX,
        props.dialogBodyPaddingYClass ? props.dialogBodyPaddingYClass : 'py-3',
        'bg-grey-1'
      )}>
        {props.reportInfos.cardIcon ? <div className='text-center mb-2'>
          <img src={props.reportInfos.cardIcon} alt="report icon" style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: 175,
          }} /></div> : null}

        <h5 className='mb-0'>
          <span className='fw-bold'>
            {props.reportInfos.reportName}
          </span>
          {props.reportInfos.studyName ?
            <span className="fw-bold report-card-subtitle">
              {' - '}{props.reportInfos.studyName}
            </span> : null}
        </h5>
        <h6 className='report-card-subtitle'>
          {props.reportInfos.subtitle}
        </h6>
        {props.reportInfos.profile ?
          <div className='bg-grey-2 px-2 py-1 d-flex align-items-center'>
            <Avatar
              className="me-1"
              size="24px"
              avatarId={props.reportInfos.profile.avatarId}
              avatars={props.avatars}
            />
            <span
              className="d-inline-block text-truncate"
              style={{ maxWidth: '100%' }}
            >
              {props.reportInfos.profile.alias}
            </span>
          </div> : null
        }
        {props.reportInfos.data.map((d, index) => {
          if (d.useMarkdown) {
            return <div
              key={index.toFixed()}
              className='border-top border-grey-2 pt-2 mt-2'>
              {d.label ? <label className='fw-bold'>{d.label}</label> : null}
              <MarkdownRenderer
                markdown={d.value}
              />
            </div>
          }
          return <div
            className='mt-2'
            key={index.toFixed()}
          >
            {d.label ? <label className='fw-bold me-2'>{d.label}:</label> : null}
            <span>{d.value}</span>
          </div>

        })}


        <div className="d-flex flex-wrap">
          <DialogBtn
            type="button"
            className="mt-2 me-2"
            color="primary"
            label={props.dialogTexts.closeBtn}
            onClick={props.onClose}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default ReportDetailDialog;
