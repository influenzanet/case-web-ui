import React from "react";
import TeaserImage from "../TeaserImage";

import 'localStyles';

export default {
  title: "Displays/Teaser Image"
};

const Template = (args) => (
  <TeaserImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: {
    url: "/images/placeholder_image.png",
    height: undefined,
    className: "",
    backgroundPosition: "",
  },
  textbox: {
    className: "",
    title: "test",
    content: "content",
  }
}
