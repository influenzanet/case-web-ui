import React from 'react';
import { OptionalSurveys, RequiredSurveys } from '.';
import { AvatarConfig } from '../../types/avatars';
import { SurveyCardDetails } from '../cards/SurveyCard';

interface SurveyListProps {
  className?: string;
  texts: {
    requiredSurveys: {
      title: string;
      info: string;
      successMsg: string;
    },
    optionalSurveys: {
      title: string;
      info: string;
      hideBtn: string;
      showBtn: string;
    }
  }
  requiredSurveys: Array<SurveyCardDetails>;
  optionalSurveys: Array<SurveyCardDetails>;
  selectedLanguage: string;
  avatars: Array<AvatarConfig>;
  openSurvey: (studyKey: string, surveyKey: string, profileId: string) => void;
}

const SurveyList: React.FC<SurveyListProps> = (props) => {
  return (
    <div className={props.className}>
      <RequiredSurveys
        title={props.texts.requiredSurveys.title}
        info={props.texts.requiredSurveys.info}
        successMessage={props.texts.requiredSurveys.successMsg}
        surveys={props.requiredSurveys}
        openSurvey={props.openSurvey}
        avatars={props.avatars}
        selectedLanguage={props.selectedLanguage}
      />
      <OptionalSurveys
        title={props.texts.optionalSurveys.title}
        info={props.texts.optionalSurveys.info}
        hideBtn={props.texts.optionalSurveys.hideBtn}
        showBtn={props.texts.optionalSurveys.showBtn}
        surveys={props.optionalSurveys}
        openSurvey={props.openSurvey}
        hideTopBorder={true}
        avatars={props.avatars}
        selectedLanguage={props.selectedLanguage}
      />
    </div>
  );
};

export default SurveyList;
