import React from "react";
import LanguageDropdown from '../LanguageDropdown';

import 'localStyles';

export default {
  title: "Header/LanguageDropdown"
};


const Template = (args) => (
  <LanguageDropdown {...args} />
);


export const Example = Template.bind({});
Example.args = {
  selectedLanguage: 'en',
  languages: [{ label: 'EN', code: 'en' }, { label: 'NL', code: 'nl' }],
  onLanguageChanged: (code: string) => console.log(code),
}

