import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";

import 'localStyles';

export default {
  title: "Displays/Markdown Renderer"
};

const Template = (args) => (
  <MarkdownRenderer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  markdown: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum. Nihil corporis alias consectetur reiciendis aliquam laboriosam modi deleniti, maxime dolorum exercitationem tempore ex.",
  renderers: undefined,
  className: "",
}

export const Custom = Template.bind({});
Custom.args = {
  markdown: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum. Nihil corporis alias consectetur reiciendis aliquam laboriosam modi deleniti, maxime dolorum exercitationem tempore ex.",
  renderers: undefined,
  className: "bg-primary text-white m-3 p-3",
}
