import clsx from 'clsx';
import React from 'react';
import { MarkdownRenderer } from '../displays';
import styles from './SurveyCard.module.scss';

interface ReportCardProps {
  cardInfos: {
    reportName: string;
    studyName?: string;
    cardIcon?: string;
    subtitle: string;
    summary?: string;
  }
  bgClassNameOverride?: string;
}

const ReportCard: React.FC<ReportCardProps> = (props) => {
  return (
    <div
      className={clsx("p-2 my-2 d-flex align-items-center",
        styles.card,
        props.bgClassNameOverride !== undefined ? props.bgClassNameOverride : 'bg-secondary',
      )}
      onClick={() => {

      }}
    >
      {props.cardInfos.cardIcon ? <img src={props.cardInfos.cardIcon} alt="report card icon" style={{
        objectFit: 'cover',
        maxWidth: '20%',
        height: 75,
        marginRight: 10,
      }} /> : null}

      <div>
        <h5 className='mb-0'>
          <span className='fw-bold'>
            {props.cardInfos.reportName}
          </span>
          {props.cardInfos.studyName ?
            <span className="fw-bold text-grey-5">
              {' - '}{props.cardInfos.studyName}
            </span> : null}
        </h5>
        <h6 className='text-grey-6'>
          {props.cardInfos.subtitle}
        </h6>
        <div>
          {props.cardInfos.summary ? <MarkdownRenderer
            markdown={props.cardInfos.summary}
          /> : null}
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
