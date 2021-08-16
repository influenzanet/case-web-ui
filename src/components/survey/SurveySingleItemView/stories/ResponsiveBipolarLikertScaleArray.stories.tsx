import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Bipolar Likert Scale Array"
};

const invalidWarning = "Please check your response";

export const ExampleTableAndVertical = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Responsive Single Choice Array' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'rblsca', role: 'responsiveBipolarLikertScaleArray',
              style: [
                {
                  key: 'defaultMode', value: 'vertical'
                },
                { key: 'smMode', value: 'table' },
                { key: 'className', value: 'table-responsive' },
                { key: 'tableModeClassName', value: 'table-borderless' },
                // { key: 'tableModeLayout', value: 'fixed' },
                // { key: 'tableModeLabelColWidth', value: '20%' },
                { key: 'labelRowPosition', value: 'top' },
                // { key: 'verticalModeReverseOrder', value: 'true' },
              ],
              items: [
                {
                  key: 'o', role: 'options',
                  items: [
                    { key: '-2', role: 'option', },
                    { key: '-1', role: 'option', },
                    { key: '0', role: 'option', },
                    { key: '+1', role: 'option', },
                    { key: '+2', role: 'option', },
                  ],
                },
                {
                  key: 'row1', role: 'row',
                  style: [
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  items: [
                    { key: '1', role: 'start', content: [{ code: 'en', resolvedText: 'Here is some text ' }] },
                    { key: '2', role: 'end', content: [{ code: 'en', resolvedText: 'with formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
                  ]
                },
                {
                  key: 'row2', role: 'row',
                  items: [
                    { key: '1', role: 'start', content: [{ code: 'en', resolvedText: 'Here is some text ' }] },
                    { key: '2', role: 'end', content: [{ code: 'en', resolvedText: 'with formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
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

export const ExampleAllResponsive = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Responsive Single Choice Array' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'rblsca', role: 'responsiveBipolarLikertScaleArray',
              style: [
                {
                  key: 'defaultMode', value: 'vertical'
                },
                { key: 'smMode', value: 'withLabelRow' },
                { key: 'lgMode', value: 'table' },
                { key: 'className', value: 'table-responsive' },
                { key: 'tableModeClassName', value: 'table-borderless' },
                { key: 'tableModeLayout', value: 'fixed' },
                { key: 'tableModeLabelColWidth', value: '20%' },
                { key: 'labelRowPosition', value: 'top' },
              ],
              items: [
                {
                  key: 'o', role: 'options',
                  items: [
                    { key: '-2', role: 'option', },
                    { key: '-1', role: 'option', },
                    { key: '0', role: 'option', },
                    { key: '+1', role: 'option', },
                    { key: '+2', role: 'option', },
                  ],
                },
                {
                  key: 'row1', role: 'row',
                  style: [
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  items: [
                    { key: '1', role: 'start', content: [{ code: 'en', resolvedText: 'Here is some text ' }] },
                    { key: '2', role: 'end', content: [{ code: 'en', resolvedText: 'End label without formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
                  ]
                },
                {
                  key: 'row2', role: 'row',
                  items: [
                    {
                      key: '1', role: 'start',
                      items: [
                        { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Start label with ' }] },
                        { key: '2', role: 'text', content: [{ code: 'en', resolvedText: 'formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
                      ]
                    },
                    { key: '2', role: 'end', content: [{ code: 'en', resolvedText: 'End label without formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
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
