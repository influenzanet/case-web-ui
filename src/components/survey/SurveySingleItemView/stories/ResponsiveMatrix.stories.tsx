import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Responsive Matrix"
};

const invalidWarning = "Please check your response";

export const ExampleMatrix = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Responsive Matrix' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'rm', role: 'responsiveMatrix',
              style: [
                { key: 'responseType', value: 'dropdown' }, // input | dropdown | numberInput
                { key: 'breakpoint', value: 'sm' }
              ],
              items: [
                {
                  key: 'dropdownOptions', role: 'dropdownOptions',
                  content: [{ code: 'en', resolvedText: 'Select an option' }],
                  items: [
                    { key: '1', role: 'option', content: [{ code: 'en', resolvedText: '0' }] },
                    { key: '2', role: 'option', content: [{ code: 'en', resolvedText: '1' }] },
                    { key: '3', role: 'option', content: [{ code: 'en', resolvedText: '2' }] },
                    { key: '4', role: 'option', content: [{ code: 'en', resolvedText: '3-4' }] },
                    { key: '5', role: 'option', content: [{ code: 'en', resolvedText: '5-9' }] },
                    { key: '6', role: 'option', content: [{ code: 'en', resolvedText: '9+' }] },
                  ]
                },
                {
                  key: 'cols', role: 'columns', items: [
                    { key: 'i', role: 'category', content: [{ code: 'en', resolvedText: 'Indoor' }] },
                    { key: 'o', role: 'category', content: [{ code: 'en', resolvedText: 'Outdoor' }] },
                  ]
                },
                {
                  key: 'rows', role: 'rows', items: [
                    {
                      key: 'r1', role: 'category',
                      content: [{ code: 'en', resolvedText: '0 - 3' }],
                      style: [
                        { key: 'className', value: 'text-nowrap' }
                      ]
                    },
                    { key: 'r1m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r1f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r2', role: 'category', content: [{ code: 'en', resolvedText: '3 - 6' }], },
                    { key: 'r2m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r2f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r3', role: 'category', content: [{ code: 'en', resolvedText: '7 - 12' }], },
                    { key: 'r3m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r3f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r4', role: 'category', content: [{ code: 'en', resolvedText: '13 - 18' }], },
                    { key: 'r4m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r4f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r5', role: 'category', content: [{ code: 'en', resolvedText: '19 - 29' }], },
                    { key: 'r5m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r5f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r6', role: 'category', content: [{ code: 'en', resolvedText: '30 - 39' }], },
                    { key: 'r6m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r6f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r7', role: 'category', content: [{ code: 'en', resolvedText: '40 - 49' }], },
                    { key: 'r7m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r7f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r8', role: 'category', content: [{ code: 'en', resolvedText: '50 - 59' }], },
                    { key: 'r8m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r8f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r9', role: 'category', content: [{ code: 'en', resolvedText: '60 - 69' }], },
                    { key: 'r9m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r9f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r10', role: 'category', content: [{ code: 'en', resolvedText: '70 - 79' }], },
                    { key: 'r10m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r10f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r11', role: 'category', content: [{ code: 'en', resolvedText: '80 - 89' }], },
                    { key: 'r11m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r11f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },

                    { key: 'r12', role: 'category', content: [{ code: 'en', resolvedText: '90+' }], },
                    { key: 'r12m', role: 'row', content: [{ code: 'en', resolvedText: 'M' }] },
                    { key: 'r12f', role: 'row', content: [{ code: 'en', resolvedText: 'F' }] },
                  ]
                }
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
      {
        key: 'rm',
        items: [{
          key: 'r1m-o',
          value: '3'
        }]
      }
    ]
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
/>

export const ExampleAllResponsive = () => <div>
  <SurveySingleItemView
    renderItem={{
      key: 'test.q1',
      version: 1,
      components: {
        key: 'root',
        role: 'root',
        items: [
          { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Responsive Matrix' }] },
          {
            key: 'rg', role: 'responseGroup', items: [
              {
                key: 'lg', role: 'responsiveMatrix',
                style: [
                  { key: 'responseType', value: 'dropdown' }, // input | dropdown | numberInput
                  { key: 'breakpoint', value: 'sm' }
                ],
                items: [
                  {
                    key: 'dropdownOptions', role: 'dropdownOptions',
                    content: [{ code: 'en', resolvedText: 'Select an option' }],
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: '0' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: '1' }] },
                      { key: '3', role: 'option', content: [{ code: 'en', resolvedText: '2' }] },
                      { key: '4', role: 'option', content: [{ code: 'en', resolvedText: '3-4' }] },
                      { key: '5', role: 'option', content: [{ code: 'en', resolvedText: '5-9' }] },
                      { key: '6', role: 'option', content: [{ code: 'en', resolvedText: '9+' }] },
                    ]
                  },
                  {
                    key: 'cols', role: 'columns', items: [
                      { key: 'i', role: 'category', content: [{ code: 'en', resolvedText: 'Indoor' }] },
                      { key: 'o', role: 'category', content: [{ code: 'en', resolvedText: 'Outdoor' }] },
                    ]
                  },
                  {
                    key: 'rows', role: 'rows', items: [
                      {
                        key: 'r1', role: 'row',
                        content: [{ code: 'en', resolvedText: '0 - 3' }],
                        style: [
                          { key: 'className', value: 'text-nowrap' }
                        ]
                      },
                      { key: 'r2', role: 'row', content: [{ code: 'en', resolvedText: '3 - 6' }], },

                      { key: 'r3', role: 'row', content: [{ code: 'en', resolvedText: '7 - 12' }], },

                      { key: 'r4', role: 'row', content: [{ code: 'en', resolvedText: '13 - 18' }], },

                      { key: 'r5', role: 'row', content: [{ code: 'en', resolvedText: '19 - 29' }], },

                      { key: 'r6', role: 'row', content: [{ code: 'en', resolvedText: '30 - 39' }], },

                      { key: 'r7', role: 'row', content: [{ code: 'en', resolvedText: '40 - 49' }], },

                      { key: 'r8', role: 'row', content: [{ code: 'en', resolvedText: '50 - 59' }], },

                      { key: 'r9', role: 'row', content: [{ code: 'en', resolvedText: '60 - 69' }], },

                      { key: 'r10', role: 'row', content: [{ code: 'en', resolvedText: '70 - 79' }], },

                      { key: 'r11', role: 'row', content: [{ code: 'en', resolvedText: '80 - 89' }], },

                      { key: 'r12', role: 'row', content: [{ code: 'en', resolvedText: '90+' }], },
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
  <div className="p-2"></div>
  <SurveySingleItemView
    renderItem={{
      key: 'test.q2',
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


</div>
