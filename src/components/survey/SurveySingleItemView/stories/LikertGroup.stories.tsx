import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Likert Group"
};

const invalidWarning = "Please check your response";

export const Example = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', parts: ['Likert Scale Example'] }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'likertGroup', items: [
                { key: 't1', role: 'text', content: [{ code: 'en', parts: ['Example 1'] }] }
              ]
            }
          ]
        }
      ]
    },
  }}
  responsePrefill={undefined}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
/>
