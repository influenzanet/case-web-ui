import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Text Displays"
};

const invalidWarning = "Please check your response";

export const AtRootLevel = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Markdown Example' }] },
        {
          key: '2', role: 'markdown', content: [{
            code: 'en', resolvedText: `# This is a title\n\nBullet list:\n- item 1\n- item 2\n- item 3\n\n*Bold* or **Italic**`
          },],
        },
        {
          key: '3', role: 'markdown', content: [{
            code: 'en', resolvedText: `# Styled\n\nBullet list:\n- item 1\n- item 2\n- item 3\n\n*Bold* or **Italic**`
          },],
          style: [{
            key: 'className', value: 'mx-n2 mx-sm-n3 bg-grey-2 p-2'
          }]
        },
      ]
    },
  }}
  responsePrefill={undefined}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
/>

export const InResponseGroup = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Markdown Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: '2', role: 'markdown', content: [{
                code: 'en', resolvedText: `# This is a title\n\nBullet list:\n- item 1\n- item 2\n- item 3\n\n*Bold* or **Italic**`
              },],
            },
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
