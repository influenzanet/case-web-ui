import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Slider"
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
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Slider Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'slider', role: 'sliderNumeric',
              content: [{ code: 'en', resolvedText: 'your selection:' }],
              description: [{ code: 'en', resolvedText: 'please move the slider' }],
              properties: {
                min: 0,
                max: 100,
                stepSize: 5,
              }
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

export const Example2 = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Slider Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'slider', role: 'sliderNumeric',
              content: [{ code: 'en', resolvedText: 'your selection:' }],
              properties: {
                min: -50,
                max: 50,
                //stepSize: 5,
              }
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
