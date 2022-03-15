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
                {
                  key: '1a', role: 'option',
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled components' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                    { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' with styled components ' }], style: [{ key: 'className', value: '' },] },
                    {
                      key: "4", role: 'dateDisplay', content: [{ code: 'en', parts: [1151616515] }], style: [{ key: 'className', value: 'text-primary' }, { key: 'dateFormat', value: 'EEEE (dd.MM.yy)' }]
                    },
                  ]
                },
                { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                { key: '1c', role: 'timeInput', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }] },
                {
                  key: '8', role: 'numberInput', style: [
                    { key: 'className', value: 'pt-2 border-top border-1 border-grey-2' },
                    { key: 'inputMaxWidth', value: '80px' }], content: [{ code: 'en', resolvedText: 'Healthcare provider count' }], properties: { min: 12, max: 24 }
                },
              ]
            }
          ]
        }
      ]
    },
  }}
  responsePrefill={{
    key: 'rg',
    items: [
      { key: 'scg', items: [{ key: 't1' }] }
    ]
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
  showKeys={false}
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

