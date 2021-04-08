import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Dropdown Group"
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
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Dropdown Group Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'dropDownGroup', items: [
                { key: 't1', role: 'text', content: [{ code: 'en', resolvedText: 'Example 1' }], style: [{ key: "className", value: "mb-2 fw-bold" }, { key: "variant", value: "h6" }] },
                { key: 't2', role: 'text', content: [{ code: 'en', resolvedText: 'Example 2' }], style: [{ key: "className", value: "mb-2 fw-bold" }, { key: "variant", value: "h6" }] },
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
