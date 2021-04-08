import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Slider"
};

const invalidWarning = "Please check your response";

export const Numeric = () => <SurveySingleItemView
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
              key: 'numeric1', role: 'sliderNumeric',
              content: [{ code: 'en', resolvedText: 'Numeric Slider 0 to 100:' }],
              description: [{ code: 'en', resolvedText: 'please move the slider' }],
              properties: {
                min: 0,
                max: 100,
                stepSize: 5,
              }
            },
            {
              key: 'numeric2', role: 'sliderNumeric',
              content: [{ code: 'en', resolvedText: 'Numeric Slider -50 to 50:' }],
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

export const NumericRange = () => <SurveySingleItemView
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
              key: 'numericRange1', role: 'sliderNumericRange',
              content: [{ code: 'en', resolvedText: 'Range Slider 0 to 100:' }],
              description: [{ code: 'en', resolvedText: 'please move the slider' }],
              properties: {
                min: 0,
                max: 100,
                stepSize: 5,
              }
            },
            {
              key: 'numericRange2', role: 'sliderNumericRange',
              content: [{ code: 'en', resolvedText: 'Range Slider -50 to 50:' }],
              properties: {
                min: -50,
                max: 50,
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
