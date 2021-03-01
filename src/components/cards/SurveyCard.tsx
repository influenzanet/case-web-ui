import clsx from 'clsx';
import React from 'react';
import { SurveyInfo } from '../../api/types/studyAPI';
import { Profile } from '../../api/types/user';
import { AvatarConfig } from '../../types/avatars';
import { getLocalizedString } from '../../utils/localize';
import SurveyCardBtn from '../buttons/SurveyCardBtn';
import styles from './SurveyCard.module.scss';

export interface SurveyCardProps {
  surveyKey: string;
  studyKey: string;
  category: string;
  validUntil?: number;
  profiles: Profile[];
  surveyInfos?: SurveyInfo;
  selectedLanguage: string;
  avatars: Array<AvatarConfig>;
  onClick?: (studyKey: string, surveyKey: string, profileId: string) => void;
}

const SurveyCard: React.FC<SurveyCardProps> = (props) => {
  const surveyCard = () => <div
    className={clsx("p-2 my-2",
      styles.card,
      {
        "bg-primary text-white": props.category === 'prio',
        "bg-secondary text-body": ['normal', 'optional'].includes(props.category),
        //"text-white": props.category === 'prio',
        //[styles.optional]: props.category === 'optional',
      }
    )}
    onClick={() => {
      if (props.onClick) {
        props.onClick(props.studyKey, props.surveyKey, props.profiles[0].id)
      }
    }}
  >
    <h6 className="fw-bold">
      <span className="fs-btn">
        {getLocalizedString(props.surveyInfos?.name, props.selectedLanguage)}
      </span>
      <span className={
        clsx("ms-1 fw-light", {
          "text-primary": props.category === 'normal',
          "text-secondary": props.category === 'prio',
          "text-grey-7": props.category === 'optional',
        })
      }>
        {getLocalizedString(props.surveyInfos?.typicalDuration, props.selectedLanguage)}
      </span>
    </h6>
    <p className="fst-italic">
      {getLocalizedString(props.surveyInfos?.description, props.selectedLanguage)}
    </p>
    <div className="d-flex justify-content-end">

      {props.profiles.map(p =>
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
      )}
    </div>
  </div>

  return (
    <React.Fragment>
      {!props.surveyInfos ? null : surveyCard()}
    </React.Fragment>
  );
};

export default SurveyCard;
