import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/TimeInput"
};

const invalidWarning = "Please check your response";

export const TimeInput = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Time Input Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 't', role: 'timeInput', disabled: undefined, content: [], description: [], properties: { dateInputMode: "" }
            }
          ]
        }
      ]
    },
  }}
  responsePrefill={{ key: 'rg', items: [{ key: 't', value: "7260" }] }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
/>
