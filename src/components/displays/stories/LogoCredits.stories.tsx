import React from "react";
import LogoCredits from "../LogoCredits";

import 'localStyles';

export default {
  title: "Displays/Logo Credits"
};

const Template = (args) => (
  <LogoCredits {...args} />
);

export const Default = Template.bind({});
Default.args = {
  itemkey: "123",
  useTitle: false,
  images: [{ key: "123", url: "/images/placeholder_image.png", altkey: "456", height: undefined, width: undefined, className: "" }],
  title: "Default",
  className: "",
  containerClassName: ""
}

export const Title = Template.bind({});
Title.args = {
  itemkey: "123",
  useTitle: true,
  images: [{ key: "123", url: "/images/placeholder_image.png", altkey: "456", height: undefined, width: undefined, className: "" }],
  title: "Logo Credit Title",
  className: "",
  containerClassName: ""
}

export const Custom = Template.bind({});
Custom.args = {
  itemkey: "123",
  useTitle: true,
  images: [{ key: "123", url: "/images/placeholder_image.png", altkey: "456", height: 100, width: 100, className: "" }],
  title: "Logo Credit Custom",
  className: "",
  containerClassName: "p-2"
}
