import React from 'react';
import { AlertBox } from '../..';
import { AvatarConfig } from '../../types/avatars';
import SurveyCard, { SurveyCardDetails } from '../cards/SurveyCard';

interface RequiredSurveysProps {
  title: string;
  successMessage: string;
  info: string;
  surveys: Array<SurveyCardDetails>;
  selectedLanguage: string;
  avatars: Array<AvatarConfig>;
  openSurvey: (studyKey: string, surveyKey: string, profileId: string) => void;
}

const RequiredSurveys: React.FC<RequiredSurveysProps> = (props) => {
  const surveyCards = () => props.surveys.map((s, index) => <SurveyCard
    key={s.studyKey + s.surveyKey + s.profiles[0].id + index.toFixed()}
    details={{ ...s }}
    avatars={props.avatars}
    selectedLanguage={props.selectedLanguage}
    onClick={props.openSurvey}
  />)

  const successCase = () => <AlertBox
    type="success"
    useIcon={true}
    content={props.successMessage}
  />

  const hasSurveys = props.surveys.length > 0;
  return (
    <React.Fragment>
      <div className="border-primary border-top-2 pt-2 mb-2">
        <h2 className="m-0">
          {props.title + ':'}
          <span className="text-primary ms-1">{props.surveys.length}</span>
        </h2>
      </div>
      {props.info ? <p>{props.info}</p> : null}
      {hasSurveys ? surveyCards() : successCase()}
    </React.Fragment>
  );
};

export default RequiredSurveys;
