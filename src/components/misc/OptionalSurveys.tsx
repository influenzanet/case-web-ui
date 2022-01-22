import clsx from 'clsx';
import React, { useState } from 'react';
import { AvatarConfig } from '../../types/avatars';
import SurveyCard, { SurveyCardDetails } from '../cards/SurveyCard';
import { ChevronDown, ChevronUp } from '../icons';

interface OptionalSurveysProps {
  title: string;
  hideBtn: string;
  showBtn: string;
  info: string;
  surveys: Array<SurveyCardDetails>;
  hideTopBorder?: boolean;
  selectedLanguage: string;
  avatars: Array<AvatarConfig>;
  openSurvey: (studyKey: string, surveyKey: string, profileId: string) => void;
}

const OptionalSurveys: React.FC<OptionalSurveysProps> = (props) => {
  const [showOptional, setShowOptional] = useState(false);

  const surveyCards = () => props.surveys.map(s => <SurveyCard
    key={s.studyKey + s.surveyKey + s.profiles[0].id}
    details={{ ...s }}
    avatars={props.avatars}
    selectedLanguage={props.selectedLanguage}
    onClick={props.openSurvey}
  />)


  return (
    <React.Fragment>
      {props.surveys.length > 0 ?
        <div className={clsx(
          "mt-3",
          {
            "border-top-2 border-primary pt-2": !props.hideTopBorder
          }
        )}>

          <button
            className="btn btn-secondary text-primary d-flex align-items-center text-start"
            onClick={() => setShowOptional(prev => !prev)}
          >
            {showOptional ? props.hideBtn : props.showBtn + ` (${props.surveys.length})`}
            <span className="ms-1 d-flex align-items-center">
              {showOptional ? <ChevronUp /> : <ChevronDown />}
            </span>
          </button>

        </div> : null}
      {
        showOptional ? <div>
          <div className="pt-2 mb-2">
            <h2 className="m-0">
              {props.title + ':'}
              <span className="text-dark ms-1">{props.surveys.length}</span>
            </h2>
          </div>
          {props.info ? <p>{props.info}</p> : null}
          {surveyCards()}
        </div> : null
      }
    </React.Fragment >
  );
};

export default OptionalSurveys;
