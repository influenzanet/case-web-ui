import React from "react";
import Footer from './Footer';

import 'localStyles';

export default {
  title: "Footer"
};


const Template = (args) => (
  <Footer {...args} />
);


export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  content: undefined,
  onChangeLanguage: (code: string) => console.log(code),
  onNavigate: (url: string, external?: boolean) => console.log(url, external),
  onOpenDialog: (dialog: string) => console.log(dialog)
}

export const WithContent = Template.bind({});
WithContent.args = {
  loading: false,
  content: {
    columns: [
      {
        columnKey: '1',
        title: 'External Links',
        items: [
          {
            type: 'external',
            itemKey: '1',
            itemText: 'Link 1',
            value: '1',
          }
        ]
      },
      {
        columnKey: '2',
        title: 'Internal Links and Dialogs',
        items: [
          {
            type: 'internal',
            itemKey: '1',
            itemText: 'Go to Home',
            value: 'home',
          },
          {
            type: 'dialog',
            itemKey: '2',
            itemText: 'Login',
            value: 'login',
          },
        ]
      },
      {
        columnKey: '3',
        title: 'Languages',
        items: [
          {
            type: 'language',
            itemKey: '1',
            itemText: 'English',
            value: 'en',
          },
          {
            type: 'language',
            itemKey: '2',
            itemText: 'Dutch',
            value: 'nl',
          },
        ]
      }
    ]
  },
  onChangeLanguage: (code: string) => console.log(code),
  onNavigate: (url: string, external?: boolean) => console.log(url, external),
  onOpenDialog: (dialog: string) => console.log(dialog)
}




