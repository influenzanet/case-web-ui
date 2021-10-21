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
  </React.Fragment>,
  dialogPaddingXClass: ''
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
  </React.Fragment>,
  dialogPaddingXClass: 'px-2'
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
  </React.Fragment>,
  dialogPaddingXClass: ''
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
  </React.Fragment>,
  dialogPaddingXClass: ''
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
  </React.Fragment>,
  dialogPaddingXClass: ''
}

export const LargeContent = Template.bind({});
LargeContent.args = {
  open: true,
  title: "Dialog title",
  color: 'primary',
  preferredWidth: undefined,
  onClose: () => { console.log("Exit clicked") },
  ariaLabelledBy: 'Test dialog',
  ariaDescribedBy: undefined,
  children: <React.Fragment>
    <div className="p-2" style={{ minHeight: 300 }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
  </React.Fragment>,
  dialogPaddingXClass: ''
}
