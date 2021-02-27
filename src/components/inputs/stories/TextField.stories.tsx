import React from "react";
import TextField from '../TextField';

import 'localStyles';

export default {
  title: "Inputs/TextField"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2"><TextField {...args} /></div>;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Input label'
}

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Input label',
  placeholder: "Enter text here"
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input label',
  placeholder: "Enter text here",
  disabled: true
}

export const Error = Template.bind({});
Error.args = {
  label: 'Input label',
  placeholder: "Enter text here",
  hasError: true
}

export const ErrorMsg = Template.bind({});
ErrorMsg.args = {
  label: 'Input label',
  placeholder: "Enter text here",
  hasError: true,
  errorMsg: 'Error message'

}
