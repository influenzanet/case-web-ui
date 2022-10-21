import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";
import { nl, nlBE, fr, de, it } from 'date-fns/locale';

import 'localStyles';

export default {
  title: "Survey Item Types/DateInput"
};

const dateLocales = [
  { code: 'nl', locale: nl, format: 'dd-MM-yyyy' },
  { code: 'nl-be', locale: nlBE, format: 'dd.MM.yyyy' },
  { code: 'fr-be', locale: fr, format: 'dd.MM.yyyy' },
  { code: 'de-be', locale: de, format: 'dd.MM.yyyy' },
  { code: 'it', locale: it, format: 'dd/MM/yyyy' },
];

const invalidWarning = "Please check your response";

export const Datepicker = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Datepicker Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'dateInput', disabled: undefined, content: [], description: [], properties: { dateInputMode: "" }
            }
          ]
        }
      ]
    },
  }}
  responsePrefill={{ key: 'rg', items: [{ key: 'lg', value: "1506662626" }] }}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
  dateLocales={dateLocales}
/>

export const YearSelector = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Year Selector Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'dateInput', disabled: false, content: [], description: [], properties: { dateInputMode: "Y" }
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
  dateLocales={dateLocales}
/>

export const YearMonthSelector = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',

    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'YearMonth Selector Example' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              key: 'lg', role: 'dateInput', disabled: false, content: [], description: [], properties: { dateInputMode: "YM" }
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
  dateLocales={dateLocales}
/>
