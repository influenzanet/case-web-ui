import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Cloze question"
};

const invalidWarning = "Please check your response";

export const ExampleClozeQuestion = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Cloze Question' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'cloze', role: 'cloze',
              items: [
                {
                  key: '1', role: 'text',
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                  style: [
                    { key: 'variant', value: 'span' },
                    { key: 'className', value: 'me-1' }
                  ]
                },
                {
                  key: '1a', role: 'text',
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled ' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                    { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' components ' }], style: [{ key: 'className', value: '' },] },
                  ]
                },
                {
                  key: '2', role: 'input', description: [{ code: 'en', resolvedText: 'Placeholder 1' }],
                  style: [{ key: 'maxLength', value: '6' }]
                },
                {
                  key: '3', role: 'text',
                  content: [{ code: 'en', resolvedText: ' also in between ' }],
                  style: [
                    { key: 'variant', value: 'span' },
                    { key: 'className', value: 'mx-1' }
                  ]
                },
                {
                  key: '4', role: 'input', description: [{ code: 'en', resolvedText: 'Placeholder 2' }], style: [{ key: 'inputMaxWidth', value: '120px' }, { key: 'className', value: '' }]
                },
                {
                  key: '5', role: 'text',
                  content: [{ code: 'en', resolvedText: ' and a dropdown: ' }],
                  style: [
                    { key: 'variant', value: 'span' },
                    { key: 'className', value: 'mx-1' }
                  ]
                },
                {
                  key: '6', role: 'dropDownGroup', items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] }
                  ]
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
    items: [{
      key: 'cloze',
      items: [
        {
          key: '2',
          value: 'Prefilled'
        },
      ]
    }]
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
/>

export const Example2ClozeQuestion = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Cloze Question' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'cloze', role: 'cloze',
              items: [
                {
                  key: '1', role: 'text',
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                  style: [
                    { key: 'variant', value: 'span' },
                    { key: 'className', value: 'me-1' }
                  ]
                },
                {
                  key: '1a', role: 'text',
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled ' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                    { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' components ' }], style: [{ key: 'className', value: '' },] },
                  ]
                },
                {
                  key: '2', role: 'numberInput',
                  style: [{ key: 'inputMaxWidth', value: '120px' },]
                },
                {
                  key: 'br', role: 'lineBreak',
                },
                {
                  key: '3', role: 'text',
                  content: [{ code: 'en', resolvedText: 'also in between ' }],
                  style: [
                    { key: 'variant', value: 'span' },
                    { key: 'className', value: 'me-1' }
                  ]
                },
                {
                  key: '4', role: 'dateInput',
                  properties: { dateInputMode: "YM" },
                  style: [
                    { key: 'className', value: 'm-1' }
                  ]
                },
                {
                  key: '5', role: 'timeInput',
                  style: [
                    { key: 'className', value: 'm-1' }
                  ]
                },
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

export const ExampleClozeInSingleChoice = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Single choice with cloze' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'scg', role: 'singleChoiceGroup',
              items: [
                {
                  key: '1', role: 'option',
                  content: [{ code: 'en', resolvedText: 'Normal option' }],
                },
                {
                  key: 'cloze', role: 'cloze',
                  items: [
                    {
                      key: '1', role: 'text',
                      content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'me-1' }
                      ]
                    },
                    {
                      key: '1a', role: 'text',
                      items: [
                        { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                        { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled ' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                        { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' components ' }], style: [{ key: 'className', value: '' },] },
                      ]
                    },
                    {
                      key: '2', role: 'numberInput',
                      style: [{ key: 'inputMaxWidth', value: '120px' },]
                    },
                    {
                      key: '3', role: 'text',
                      content: [{ code: 'en', resolvedText: ' also in between ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'mx-1' }
                      ]
                    },
                    {
                      key: '4', role: 'dateInput',
                      properties: { dateInputMode: "YM" },
                      style: [
                        { key: 'className', value: 'm-1' }
                      ]
                    },
                  ]
                }
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

export const ExampleClozeInMultipleChoice = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Multiple Choice with Cloze' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'mcg', role: 'multipleChoiceGroup',
              items: [
                {
                  key: '1', role: 'option',
                  content: [{ code: 'en', resolvedText: 'Normal option' }],
                },
                {
                  key: '2', role: 'cloze',
                  items: [
                    {
                      key: '1', role: 'text',
                      content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'me-1' }
                      ]
                    },
                    {
                      key: '1a', role: 'text',
                      items: [
                        { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                        { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled ' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                        { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' components ' }], style: [{ key: 'className', value: '' },] },
                      ]
                    },
                    {
                      key: '2', role: 'numberInput',
                      style: [{ key: 'inputMaxWidth', value: '120px' },]
                    },
                    {
                      key: '3', role: 'text',
                      content: [{ code: 'en', resolvedText: ' also in between ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'mx-1' }
                      ]
                    },
                    {
                      key: '4', role: 'dateInput',
                      properties: { dateInputMode: "YM" },
                      style: [
                        { key: 'className', value: 'm-1' }
                      ]
                    },
                  ]
                },
                {
                  key: '3', role: 'cloze',
                  items: [
                    {
                      key: '1', role: 'text',
                      content: [{ code: 'en', resolvedText: 'Other option ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'me-1' }
                      ]
                    },
                    {
                      key: '1a', role: 'text',
                      items: [
                        { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                        { key: '2', role: 'text', content: [{ code: 'en', resolvedText: ' with styled ' }], style: [{ key: 'className', value: 'fw-bold text-decoration-underline' },] },
                        { key: '3', role: 'text', content: [{ code: 'en', resolvedText: ' components ' }], style: [{ key: 'className', value: '' },] },
                      ]
                    },
                    {
                      key: '2', role: 'numberInput',
                      style: [{ key: 'inputMaxWidth', value: '120px' },]
                    },
                    {
                      key: '3', role: 'text',
                      content: [{ code: 'en', resolvedText: ' also in between ' }],
                      style: [
                        { key: 'variant', value: 'span' },
                        { key: 'className', value: 'mx-1' }
                      ]
                    },
                    {
                      key: '4', role: 'dateInput',
                      properties: { dateInputMode: "YM" },
                      style: [
                        { key: 'className', value: 'm-1' }
                      ]
                    },
                  ]
                }
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
