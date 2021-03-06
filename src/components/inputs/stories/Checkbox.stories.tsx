import React from "react";
import Checkbox from '../Checkbox';

import 'localStyles';

export default {
  title: "Inputs/Checkbox"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2"
><Checkbox {...args} checked={false} />
  <Checkbox {...args} /></div>;

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: 'id',
  className: 'my-3',
  name: 'name',
  checked: true,
  label: 'Checkbox',
  onChange: (value: boolean) => { },
  onClick: () => { }
}
