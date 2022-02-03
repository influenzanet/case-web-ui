import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Multiple Choice"
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
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Multiple Choice Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'mcg', role: 'multipleChoiceGroup',
              items: [
                { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                {
                  key: '1a', role: 'option',
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled components' }], style: [{ key: 'className', value: 'fw-bold text-danger' },] },
                    { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' with styled components ' }], style: [{ key: 'className', value: 'text-decoration-underline' },] },
                  ]
                },
                { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                { key: 't1', role: 'text', content: [{ code: 'en', resolvedText: 'Subtitle' }], style: [{ key: 'className', value: 'mb-1 pt-1 fw-bold border-top' }] },
                { key: '4', role: 'option', content: [{ code: 'en', resolvedText: 'Option 4' }] },
                { key: '5', role: 'option', content: [{ code: 'en', resolvedText: 'Option 5' }] },
                { key: '5b', role: 'timeInput', content: [{ code: 'en', resolvedText: 'Option 5' }] },
                { key: 't2', role: 'text', content: [{ code: 'en', resolvedText: 'Subtitle 2' }], style: [{ key: 'className', value: 'mb-1 pt-1 fw-bold border-top' }] },
                { key: '6', role: 'option', content: [{ code: 'en', resolvedText: 'Option 6' }] },
                { key: '7', role: 'option', content: [{ code: 'en', resolvedText: 'Option 7' }] },
                { key: 't3', role: 'text', content: [{ code: 'en', resolvedText: 'With Number Inputs' }], style: [{ key: 'className', value: 'mb-1 pt-1 fw-bold border-top' }] },
                { key: '8', role: 'numberInput', style: [{ key: 'inputMaxWidth', value: '80px' }], content: [{ code: 'en', resolvedText: 'Healthcare provider name' }], properties: { min: 1, max: 20 } },
                { key: '9', role: 'numberInput', content: [{ code: 'en', resolvedText: 'Alternative Healthcare Provider Name' }] },
                { key: '10', role: 'input', content: [{ code: 'en', resolvedText: 'Other: ' }], description: [{ code: 'en', resolvedText: 'use comma to separate multiple entries' }] },
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
