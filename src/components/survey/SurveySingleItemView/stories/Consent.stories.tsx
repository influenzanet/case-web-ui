import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";
import { nl, nlBE, fr, de, it } from 'date-fns/locale';

import 'localStyles';

export default {
  title: "Survey Item Types/Consent"
};

const dateLocales = [
  { code: 'nl', locale: nl, format: 'dd-MM-yyyy' },
  { code: 'nl-be', locale: nlBE, format: 'dd.MM.yyyy' },
  { code: 'fr-be', locale: fr, format: 'dd.MM.yyyy' },
  { code: 'de-be', locale: de, format: 'dd.MM.yyyy' },
  { code: 'it', locale: it, format: 'dd/MM/yyyy' },
];

const invalidWarning = "Please check your response";

export const Consent = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    version: 1,
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Consent Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'consent',
              items: [
                {
                  key: 'a', role: 'label',
                  content: [{ code: 'en', resolvedText: 'I have read and agree with the conditions.' }],
                },
                {
                  key: 'a', role: 'content',
                  content: [{ code: 'en', resolvedText: '## Markdown content\n\n With some text explaining stuff' }],
                },
                {
                  key: 'a', role: 'title',
                  content: [{ code: 'en', resolvedText: 'Consent for new study' }],
                },
                {
                  key: 'a', role: 'acceptBtn',
                  content: [{ code: 'en', resolvedText: 'ACCEPT' }],
                },
                {
                  key: 'a', role: 'rejectBtn',
                  content: [{ code: 'en', resolvedText: 'REJECT' }],
                }
              ]
            },
            {
              key: 'lg2', role: 'consent',
              style: [{ key: 'className', value: 'mt-2 pt-2 border-top border-1 border-grey-2' }],
              items: [
                {
                  key: 'a', role: 'label',
                  content: [{ code: 'en', resolvedText: 'I have read and agree with the conditions.' }],
                },
                {
                  key: 'a', role: 'content',
                  content: [{ code: 'en', resolvedText: '## Markdown content\n\n With some text explaining stuff' }],
                },
                {
                  key: 'a', role: 'title',
                  content: [{ code: 'en', resolvedText: 'Consent for new study' }],
                },
                {
                  key: 'a', role: 'acceptBtn',
                  content: [{ code: 'en', resolvedText: 'ACCEPT' }],
                },
                {
                  key: 'a', role: 'rejectBtn',
                  content: [{ code: 'en', resolvedText: 'REJECT' }],
                }
              ]
            }
          ]
        }
      ]
    },
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="en"
  invalidWarning={invalidWarning}
  dateLocales={dateLocales}
/>
