import React from "react";
import SurveyProgress from "./SurveyProgress";

import 'localStyles';

export default {
  title: "Survey Item Types/Progess Indicator"
};

export const Examples = () => <div className="container p-2">
  <h2>2 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={2}
      currentIndex={0}
    />
  </div>
  <h2>4 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={4}
      currentIndex={2}
    />
  </div>
  <h2>6 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={6}
      currentIndex={2}
    />
  </div>
  <h2>12 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={12}
      currentIndex={4}
    />
  </div>
  <h2>20 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={20}
      currentIndex={12}
    />
  </div>
  <div className="my-3">
    <SurveyProgress
      totalCount={20}
      currentIndex={12}
    />
  </div>

  <h2>50 pages</h2>
  <div className="my-3">
    <SurveyProgress
      totalCount={50}
      currentIndex={0}
    />
  </div>
  <div className="my-3">
    <SurveyProgress
      totalCount={50}
      currentIndex={22}
    />
  </div>
  <div className="my-3">
    <SurveyProgress
      totalCount={50}
      currentIndex={35}
    />
  </div>

</div>

