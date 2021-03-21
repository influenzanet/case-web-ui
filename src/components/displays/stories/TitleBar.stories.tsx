import React from "react";
import TitleBar from "../TitleBar";

import 'localStyles';

export default {
  title: "Displays/Title Bar"
};

const Template = (args) => (
  <TitleBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content: "This is a Titlebar",
  showAlways: true,
}

export const LargeContent = Template.bind({});
LargeContent.args = {
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum.",
  showAlways: true,
}
