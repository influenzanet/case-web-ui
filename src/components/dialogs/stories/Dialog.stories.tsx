import React from "react";
import Dialog from '../Dialog';

import 'localStyles';

export default {
  title: "Dialogs/Simple dialog"
};


const Template = (args) => (
  <Dialog {...args} />
);


export const Primary = Template.bind({});
Primary.args = {
  open: true,
  title: "Dialog title",
  color: 'primary',
  preferredWidth: undefined,
  onClose: () => { },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div style={{ minHeight: 300 }}></div>
  </React.Fragment>
}

export const Width = Template.bind({});
Width.args = {
  open: true,
  title: "Dialog title",
  color: 'primary',
  preferredWidth: 600,
  onClose: () => { },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div style={{ minHeight: 300 }}></div>
  </React.Fragment>
}

export const Warning = Template.bind({});
Warning.args = {
  open: true,
  title: "Dialog title",
  color: 'warning',
  preferredWidth: undefined,
  onClose: () => { },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div style={{ minHeight: 300 }}></div>
  </React.Fragment>
}

export const Error = Template.bind({});
Error.args = {
  open: true,
  title: "Dialog title",
  color: 'danger',
  preferredWidth: undefined,
  onClose: () => { },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div style={{ minHeight: 300 }}></div>
  </React.Fragment>
}

export const Success = Template.bind({});
Success.args = {
  open: true,
  title: "Dialog title",
  color: 'success',
  preferredWidth: undefined,
  onClose: () => { },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div style={{ minHeight: 300 }}></div>
  </React.Fragment>
}
