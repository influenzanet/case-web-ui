import React from "react";
import SurveyView from "./SurveyView";
import ExampleWeekly from '../../../../exampleContent/surveys/example_weekly.json';
import ExampleIntake from '../../../../exampleContent/surveys/example_intake.json';
import RTRPre from '../../../../exampleContent/surveys/rtr-pre.json';
import TBflow_Adults from '../../../../exampleContent/surveys/TBflow_Adults.json';
import Standardflow_Adults from '../../../../exampleContent/surveys/Standardflow_Adults.json';
import WeeklyTB from '../../../../exampleContent/surveys/WeeklyTB.json';

import { Survey } from "survey-engine/data_types";
import { nl, nlBE, fr, de, it } from 'date-fns/locale';
const dateLocales = [
  { code: 'nl', locale: nl, format: 'dd-MM-yyyy' },
  { code: 'nl-be', locale: nlBE, format: 'dd.MM.yyyy' },
  { code: 'fr-be', locale: fr, format: 'dd.MM.yyyy' },
  { code: 'de-be', locale: de, format: 'dd.MM.yyyy' },
  { code: 'it', locale: it, format: 'dd/MM/yyyy' },
];

import 'localStyles';

export default {
  title: "Survey View"
};


export const WeeklySurvey = () => <div className="container">
  <SurveyView
    languageCode='nl'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={ExampleWeekly.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
  />
</div>

export const IntakeSurvey = () => <div className="container">
  <SurveyView
    languageCode='en'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={ExampleIntake.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
  />
</div>

export const RTRPreSurvey = () => <div className="container">
  <SurveyView
    languageCode='en'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={RTRPre.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
  />
</div>

export const TBflow_AdultsSurvey = () => <div className="container">
  <SurveyView
    languageCode='nl'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={TBflow_Adults.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
    dateLocales={dateLocales}
    showEngineDebugMsg={false}
  />
</div>

export const Standardflow_AdultsSurvey = () => <div className="container">
  <SurveyView
    languageCode='nl'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={Standardflow_Adults.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
    dateLocales={dateLocales}
    showEngineDebugMsg={false}
  />
</div>

export const WeeklyTBSurvey = () => <div className="container">
  <SurveyView
    languageCode='nl'
    nextBtnText='Next'
    backBtnText='Back'
    submitBtnText='Submit'
    invalidResponseText='Invalid Response'
    survey={WeeklyTB.survey as Survey}
    onSubmit={(resp) => console.log(resp)}
    dateLocales={dateLocales}
    showEngineDebugMsg={false}
  />
</div>
