import clsx from 'clsx';
import React from 'react';
import { AvatarConfig } from '../../types/avatars';
import { Profile } from '../../types/profile';
import { Avatar, MarkdownRenderer } from '../displays';
import styles from './SurveyCard.module.scss';

interface ReportCardProps {
  reportID: string;
  cardInfos: {
    reportName: string;
    studyName?: string;
    cardIcon?: string;
    subtitle: string;
    summary?: string;
    profile?: Profile;
    actionBtnText?: string;
  }
  avatars: Array<AvatarConfig>;
  bgClassNameOverride?: string;
  onClick: (reportID: string) => void;
}

const ReportCard: React.FC<ReportCardProps> = (props) => {
  return (
    <div
      className={clsx("p-2 my-2 d-flex align-items-center",
        styles.card,
        props.bgClassNameOverride !== undefined ? props.bgClassNameOverride : 'bg-secondary',
      )}
      onClick={() => props.onClick(props.reportID)}
    >
      {props.cardInfos.cardIcon ? <img src={props.cardInfos.cardIcon} alt="report card icon" style={{
        objectFit: 'cover',
        maxWidth: '20%',
        height: 75,
        marginRight: 10,
      }} /> : null}

      <div className='w-100'>
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
        <div className="d-flex mt-1 align-items-center">
          {props.cardInfos.profile ?
            <div className='bg-grey-2 px-2 py-1 d-flex align-items-center'>
              <Avatar
                className="me-1"
                size="24px"
                avatarId={props.cardInfos.profile.avatarId}
                avatars={props.avatars}
              />
              <span
                className="d-inline-block text-truncate"
                style={{ maxWidth: 200 }}
              >
                {props.cardInfos.profile.alias}
              </span>
            </div> : null
          }
          <div className='d-flex flex-grow-1 justify-content-end'>
            {props.cardInfos.actionBtnText ? <button className={clsx(
              "btn btn-link p-0 text-body text-decoration-none",
            )}>
              {props.cardInfos.actionBtnText}
              <i className="fs-btn">
                <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                </svg>
              </i>
            </button>
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
