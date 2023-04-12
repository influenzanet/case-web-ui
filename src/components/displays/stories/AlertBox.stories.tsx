import React from "react";
import AlertBox from "../AlertBox";

import 'localStyles';

export default {
  title: "Displays/Alert Box"
};

const Template = (args) => (
  <AlertBox {...args} />
);

export const Info = Template.bind({});
Info.args = {
  content: "This is an Info Box [open](http://localhost:6006)",
  className: "",
  hide: false,
  type: 'info',
  pxClass: "",
  pyClass: "",
  useIcon: true,
  iconSize: "",
  closable: true,
  onClose: () => null,
}

export const Empty = Template.bind({});
Empty.args = {
  content: undefined,
  className: "",
  hide: false,
  type: 'info',
  pxClass: "",
  pyClass: "",
  useIcon: true,
  iconSize: "",
  closable: true,
  onClose: () => null,
}

export const Danger = Template.bind({});
Danger.args = {
  content: "This is a Danger Box",
  className: "",
  hide: false,
  type: 'danger',
  pxClass: "",
  pyClass: "",
  useIcon: true,
  iconSize: "",
  closable: true,
  onClose: () => null,
}

export const Success = Template.bind({});
Success.args = {
  content: "This is a Success Box",
  className: "",
  hide: false,
  type: 'success',
  pxClass: "",
  pyClass: "",
  useIcon: true,
  iconSize: "",
  closable: true,
  onClose: () => null,
}

export const Warning = Template.bind({});
Warning.args = {
  content: "This is a Warning Box",
  className: "",
  hide: false,
  type: 'warning',
  pxClass: "",
  pyClass: "",
  useIcon: true,
  iconSize: "",
  closable: true,
  onClose: () => null,
}
