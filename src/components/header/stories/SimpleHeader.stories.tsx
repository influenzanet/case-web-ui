import React from "react";
import SimpleHeader from '../SimpleHeader';

import 'localStyles';

export default {
  title: "Header/SimpleHeader"
};


const Template = (args) => (
  <SimpleHeader {...args} />
);


export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  config: undefined,
  selectedLanguage: 'en',
  languages: [{ label: 'EN', code: 'en' }, { label: 'NL', code: 'nl' }],
  onChangeLanguage: (code: string) => console.log(code),
  onOpenExternalPage: (url: string) => console.log(url),
}

export const WithContent = Template.bind({});
WithContent.args = {
  loading: false,
  config: {
    image: {
      altText: 'Alt Text',
      sm: {
        url: '/images/placeholder_image.png',
        className: 'py-2',
        height: 70
        //width?: number;
      },
      lg: {
        url: '/images/placeholder_image.png',
        className: 'py-2',
        height: 90
      }
    },
    className: 'bg-grey-2',
    useLanguageSelector: true
  },
  selectedLanguage: 'en',
  languages: [{ label: 'EN', code: 'en' }, { label: 'NL', code: 'nl' }],
  onChangeLanguage: (code: string) => console.log(code),
  onOpenExternalPage: (url: string) => console.log(url),
}
