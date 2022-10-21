import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";
import { nl, nlBE, fr, de, it } from 'date-fns/locale';

import 'localStyles';

export default {
  title: "Survey Item Types/TextInput"
};

const dateLocales = [
  { code: 'nl', locale: nl, format: 'dd-MM-yyyy' },
  { code: 'nl-be', locale: nlBE, format: 'dd.MM.yyyy' },
  { code: 'fr-be', locale: fr, format: 'dd.MM.yyyy' },
  { code: 'de-be', locale: de, format: 'dd.MM.yyyy' },
  { code: 'it', locale: it, format: 'dd/MM/yyyy' },
];

const invalidWarning = "Please check your response";

export const TextInput = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'TextInput Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'input', disabled: undefined, content: [], description: []
            }
          ]
        }
      ]
    },
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
  dateLocales={dateLocales}
/>

export const TextInputWithTransformCase = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'TextInput Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'input', disabled: undefined, content: [], description: [], style: [{
                key: 'transformCase', value: 'upper'
              }]
            }
          ]
        }
      ]
    },
  }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
  dateLocales={dateLocales}
/>
