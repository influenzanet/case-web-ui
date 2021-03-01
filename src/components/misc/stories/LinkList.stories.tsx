import React from "react";
import LinkList from '../LinkList';

import 'localStyles';

export default {
  title: "Misc/LinkList"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <LinkList {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Link List Example',
  className: undefined,
  items: [
    { label: 'Navigate Internally', value: 'toUrl', type: 'internal' },
    { label: 'Navigate to External', value: 'toUrl', type: 'external' },
    { label: 'Language Switch', value: 'en', type: 'language' },
    { label: 'Open Dialog', value: 'login', type: 'dialog' },
  ],
  onChangeLanguage: (code: string) => { console.log(code) },
  onOpenExternalPage: (url: string) => console.log(url),
  onNavigate: (url: string) => console.log(url),
  onOpenDialog: (dialog: string) => console.log(dialog)
}
