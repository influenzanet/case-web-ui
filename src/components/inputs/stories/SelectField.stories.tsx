import React from "react";
import SelectField from '../SelectField';

import 'localStyles';

export default {
  title: "Inputs/SelectField"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2"><SelectField {...args} /></div>;

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: '2',
  values: [{ code: '1', label: 'option 1' }, { code: '2', label: 'option 2' }],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => { },
  id: 'id1',
  name: 'inputname',
  label: 'Select',
  hasError: false,
}


export const WithError = Template.bind({});
WithError.args = {
  value: '2',
  values: [{ code: '1', label: 'option 1' }, { code: '2', label: 'option 2' }],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => { },
  id: 'id1',
  name: 'inputname',
  label: 'Select',
  hasError: true,
}



