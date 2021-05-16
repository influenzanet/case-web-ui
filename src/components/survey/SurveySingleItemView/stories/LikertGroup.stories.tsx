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
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Likert Group Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'likertGroup', items: [
                { key: 't1', role: 'text', content: [{ code: 'en', resolvedText: 'Example 1' }], style: [{ key: "className", value: "mb-2 fw-bold" }, { key: "variant", value: "h6" }] },
                {
                  key: 'l1', role: 'likert', items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: '1' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: '2' }] },
                    { key: '3', role: 'option', content: [{ code: 'en', resolvedText: '3' }] },
                  ]
                },
                { key: 't2', role: 'text', content: [{ code: 'en', resolvedText: 'Example 2' }], style: [{ key: "className", value: "mb-2 fw-bold" }, { key: "variant", value: "h6" }] },
                {
                  key: 'l2', role: 'likert', items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 1' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 2' }] },
                    { key: '3', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 3' }] },
                    { key: '4', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 4' }] },
                    { key: '5', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 5' }] },
                  ]
                },
                {
                  key: 'l3', role: 'likert', style: [{ key: 'labelPlacement', value: 'before' }],
                  items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 1' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 2' }] },
                    { key: '3', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 3' }] },
                    { key: '4', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 4' }] },
                    { key: '5', role: 'option', content: [{ code: 'en', resolvedText: 'with Text 5' }] },
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
