import React from "react";
import TimeInput, { preprocessTimeInputValue } from '../TimeInput';

import 'localStyles';

export default {
  title: "Inputs/TimeInput"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2"><TimeInput {...args} /></div>;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Input label',
  step: 2,
  onChange: (event) => {
    const v = preprocessTimeInputValue(event);
    console.log(v);
  }
}

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {

}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Input label',
  disabled: true
}

export const Error = Template.bind({});
Error.args = {
  label: 'Input label',
  hasError: true
}

export const ErrorMsg = Template.bind({});
ErrorMsg.args = {
  label: 'Input label',
  hasError: true,
  errorMsg: 'Error message'

}
