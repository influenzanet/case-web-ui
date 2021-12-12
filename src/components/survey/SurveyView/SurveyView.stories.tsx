import React from "react";
import SurveyView from "./SurveyView";
import ExampleWeekly from '../../../../exampleContent/surveys/example_weekly.json';
import ExampleIntake from '../../../../exampleContent/surveys/example_intake.json';
import RTRPre from '../../../../exampleContent/surveys/rtr-pre.json';
import { Survey } from "survey-engine/data_types";

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
