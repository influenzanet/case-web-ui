import React from "react";
import LoadingPlaceholder from "../LoadingPlaceholder";

import 'localStyles';

export default {
  title: "Displays/Loading Placeholder"
};

const Template = (args) => (
  <LoadingPlaceholder {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  minHeight: 100,
  color: 'primary',
  iconSize: '',
  iconBorderWidth: ''
}

export const Secondary = Template.bind({});
Secondary.args = {
  minHeight: 100,
  color: 'secondary',
  iconSize: '',
  iconBorderWidth: ''
}

export const Large = Template.bind({});
Large.args = {
  minHeight: 500,
  color: 'primary',
  iconSize: '10rem',
  iconBorderWidth: ''
}

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  minHeight: 'vh-100',
  color: 'white',
  iconSize: '6rem',
  iconBorderWidth: '.1rem'
}


