import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Single Choice"
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
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Single Choice Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'scg', role: 'singleChoiceGroup',
              items: [
                { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }], style: [{ key: 'className', value: 'mb-1 pt-1 fw-bold border-top' }] },
                { key: '8', role: 'numberInput', style: [{ key: 'inputMaxWidth', value: '80px' }], content: [{ code: 'en', resolvedText: 'Healthcare provider name' }], properties: { min: 1, max: 20 } },
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
  showKeys={true}
/>

export const ExampleWithMissingOptions = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Single Choice Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'scg', role: 'singleChoiceGroup'
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
  showKeys={true}
/>
