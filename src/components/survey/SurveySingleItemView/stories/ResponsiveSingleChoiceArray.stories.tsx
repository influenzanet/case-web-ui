import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Responsive Single Choice Array"
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
              key: 'lg', role: 'responsiveSingleChoiceArray',
              style: [
                {
                  key: 'defaultMode', value: 'vertical'
                },
                {
                  key: 'smMode', value: 'table'
                },
                { key: 'className', value: 'table-responsive' },
                { key: 'tableModeClassName', value: 'table-borderless' },
                { key: 'tableModeLayout', value: 'fixed' },
                // { key: 'tableModeFirstColWidth', value: '33%' }
              ],
              items: [
                {
                  key: 'header', role: 'options',
                  items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Very Low' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Low' }] },
                    { key: '3', role: 'option', content: [{ code: 'en', resolvedText: 'Medium - With Longer label' }] },
                    { key: '4', role: 'option', content: [{ code: 'en', resolvedText: 'High' }] },
                    { key: '5', role: 'option', content: [{ code: 'en', resolvedText: 'Very High' }] },
                  ],
                  style: [
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ]
                },
                {
                  key: 'row1', role: 'row',
                  style: [
                    { key: 'verticalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'horizontalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Here is some text ' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: 'with formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
                  ]
                },
                {
                  key: 'row2', role: 'row',
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
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
              key: 'rsca', role: 'responsiveSingleChoiceArray',
              style: [
                {
                  key: 'defaultMode', value: 'vertical'
                },
                { key: 'smMode', value: 'horizontal' },
                { key: 'lgMode', value: 'table' },
                { key: 'className', value: 'table-responsive' },
                { key: 'tableModeClassName', value: 'table-borderless' },
                { key: 'tableModeLayout', value: 'fixed' },
                { key: 'tableModeFirstColWidth', value: '33%' },
                // { key: 'verticalModeReverseOrder', value: 'true' },
              ],
              items: [
                {
                  key: 'header', role: 'options',
                  items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Very Low' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Low' }] },
                    {
                      key: '3', role: 'option', items: [
                        { key: 't1', role: 'text', content: [{ code: 'en', resolvedText: 'Medium - ' }] },
                        { key: 't2', role: 'text', content: [{ code: 'en', resolvedText: 'With Longer label to test what happens' }], style: [{ key: 'className', value: 'fst-italic' }] },
                      ]
                    },
                    { key: '4', role: 'option', content: [{ code: 'en', resolvedText: 'High' }] },
                    { key: '5', role: 'option', content: [{ code: 'en', resolvedText: 'Very High' }] },
                  ],
                  style: [
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ]
                },
                {
                  key: 'row1', role: 'row',
                  style: [
                    { key: 'verticalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'horizontalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  items: [
                    { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Here is some text ' }] },
                    { key: '2', role: 'text', content: [{ code: 'en', resolvedText: 'with formatting' }], style: [{ key: 'className', value: 'text-primary' }] },
                  ]
                },
                {
                  key: 'row2', role: 'row',
                  style: [
                    { key: 'verticalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'horizontalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                },
                {
                  key: 'row3', role: 'row',
                  style: [
                    { key: 'horizontalModeLabelPlacement', value: 'none' },
                    { key: 'verticalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'horizontalModeClassName', value: 'border-bottom border-grey-2' },
                    { key: 'tableModeClassName', value: 'border-bottom border-grey-2' },
                  ],
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
                },
                {
                  key: 'row4', role: 'row',
                  // style: [{ key: 'horizontalModeLabelPlacement', value: 'none' }],
                  content: [{ code: 'en', resolvedText: 'Here is some text ' }],
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
