import clsx from 'clsx';
import React from 'react';
import { LocalizedString } from 'survey-engine/lib/data_types';
import { AvatarConfig } from '../../types/avatars';
import { Profile } from '../../types/profile';
import { getLocalizedString } from '../../utils/localize';
import { Avatar, MarkdownRenderer } from '../displays';
import styles from './StudyCard.module.scss';

interface StudyCardProps {
  studyKey: string;
  studyName: LocalizedString[];
  studyDescription: LocalizedString[];
  profiles?: Profile[];
  selectedLanguage: string;
  actionText?: string;
  notJoinedText: string;
  avatars: Array<AvatarConfig>;
  onClick?: (studyKey: string) => void;
}

const StudyCard: React.FC<StudyCardProps> = (props) => {
  const studyDescription = getLocalizedString(props.studyDescription, props.selectedLanguage);
  return (
    <div
      className={clsx("p-2 my-2",
        {
          [styles.card]: props.onClick,
        },
        'bg-secondary',
      )}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.studyKey);
        }
      }}
    >
      <h5 className="fw-bold">
        {getLocalizedString(props.studyName, props.selectedLanguage)}
      </h5>
      {studyDescription ? <MarkdownRenderer
        markdown={studyDescription}
      /> : null}

      <div className="d-flex flex-wrap mt-n1">
        {!props.profiles || props.profiles.length < 1 ?
          <div className="bg-grey-2 mt-1 px-2 py-1 text-grey-6 fw-bold fs-small">
            {props.notJoinedText}
          </div>
          :
          props.profiles.map(p => <div
            key={p.id}
            className="d-flex align-items-center bg-primary px-2 py-1 text-white mt-1 me-1"
          >
            <Avatar
              className="me-1"
              size="20px"
              avatarId={p.avatarId}
              avatars={props.avatars}
            />
            <span
              className="text-truncate fs-small"
              style={{ maxWidth: 200 }}
            >
              {p.alias}
            </span>
          </div>)
        }

      </div>
      <div className="text-end pt-1a">
        {props.actionText ? <button className="btn btn-link text-body p-0">
          {props.actionText}
          <i className="fas fa-arrow-right ms-1"></i>
        </button>
          : null}

      </div>
    </div>
  );
};

export default StudyCard;

/*{
          <SurveyCardBtn
            key={p.id}
            category={props.category}
            profile={p}
            avatars={props.avatars}
            onClick={() => {
              if (props.onClick) {
                props.onClick(props.studyKey, props.surveyKey, p.id)
              }
            }}

          />
        )}*/
