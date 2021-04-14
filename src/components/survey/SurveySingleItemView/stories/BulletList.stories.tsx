import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Bullet List"
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
        {items:[
        { key: 't1', role: '', content: [{ code: 'en', resolvedText: 'Bullet Entry 1' }], style: [{key:"variant",value:"li"}] },
        { key: 't2', role: '', content: [{ code: 'en', resolvedText: 'Bullet Entry 2' }], style: [{key:"variant",value:"li"}] },
        { key: 't3', role: '', content: [{ code: 'en', resolvedText: 'Bullet Entry 3' }], style: [{key:"variant",value:"li"}] },
        ],role:"bullets",key:"bullet",}
      ]
    },
  }}
  responsePrefill={undefined}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
/>
