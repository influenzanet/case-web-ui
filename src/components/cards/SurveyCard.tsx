import clsx from 'clsx';
import React from 'react';
import { SurveyInfo } from '../../types/studyAPI';
import { Profile } from '../../types/profile';
import { AvatarConfig } from '../../types/avatars';
import { getLocalizedString } from '../../utils/localize';
import SurveyCardBtn from '../buttons/SurveyCardBtn';
import styles from './SurveyCard.module.scss';
import { LocalizedString } from 'survey-engine/data_types';

export interface SurveyCardDetails {
  studyName?: LocalizedString[];
  surveyKey: string;
  studyKey: string;
  category: string;
  validUntil?: number;
  profiles: Profile[];
  surveyInfos?: SurveyInfo;
}

interface SurveyCardProps {
  details: SurveyCardDetails;
  selectedLanguage?: string;
  avatars: Array<AvatarConfig>;
  onClick?: (studyKey: string, surveyKey: string, profileId: string) => void;
}

const SurveyCard: React.FC<SurveyCardProps> = (props) => {
  const selectedLanguage = props.selectedLanguage ? props.selectedLanguage : 'en';

  const surveyCard = () => <div
    className={clsx("p-2 my-2",
      styles.card,
      {
        "bg-primary text-white": ['prio', 'immediate'].includes(props.details.category),
        "bg-secondary text-body": ['normal'].includes(props.details.category),
        "bg-grey-1": props.details.category === 'optional',
      }
    )}
    onClick={() => {
      if (props.onClick) {
        props.onClick(props.details.studyKey, props.details.surveyKey, props.details.profiles[0].id)
      }
    }}
  >
    <h5 className="fw-bold">
      {props.details.studyName ?
        <span className={clsx({
          'text-secondary': ['prio', 'immediate'].includes(props.details.category),
          'text-grey-6': ['optional', 'normal'].includes(props.details.category),
        })}>
          {getLocalizedString(props.details.studyName, selectedLanguage)}
          {' - '}
        </span> : null}
      <span className="">
        {getLocalizedString(props.details.surveyInfos?.name, selectedLanguage)}
      </span>
      <span className={
        clsx("ms-1 fs-6 fw-light", {
          "text-primary": props.details.category === 'normal',
          "text-secondary": ['prio', 'immediate'].includes(props.details.category),
          "text-grey-7": props.details.category === 'optional',
        })
      }>
        {getLocalizedString(props.details.surveyInfos?.typicalDuration, selectedLanguage)}
      </span>
    </h5>
    <p className="fst-italic">
      {getLocalizedString(props.details.surveyInfos?.description, selectedLanguage)}
    </p>
    <div className="d-flex justify-content-end">

      {props.details.profiles.map(p =>
        <SurveyCardBtn
          key={p.id}
          category={props.details.category}
          profile={p}
          avatars={props.avatars}
          onClick={() => {
            if (props.onClick) {
              props.onClick(props.details.studyKey, props.details.surveyKey, p.id)
            }
          }}

        />
      )}
    </div>
  </div>

  return (
    <React.Fragment>
      {!props.details.surveyInfos ? null : surveyCard()}
    </React.Fragment>
  );
};

export default SurveyCard;
