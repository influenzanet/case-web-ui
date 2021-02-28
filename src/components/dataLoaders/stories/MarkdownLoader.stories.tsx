import React from "react";
import MarkdownLoader from '../MarkdownLoader';

import 'localStyles';

export default {
  title: "Data Loaders/MarkdownLoader"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <div className="my-3">
    <MarkdownLoader {...args} />
  </div>
);

export const SimpleMarkdown = Template.bind({});
SimpleMarkdown.args = {
  className: undefined,
  markdownUrl: '/markdowns/sample-markdown.md',
  languageCode: 'en',
  flavor: undefined,
}

export const WithClassname = Template.bind({});
WithClassname.args = {
  className: 'bg-secondary p-2',
  markdownUrl: '/markdowns/sample-markdown.md',
  languageCode: 'en',
  flavor: undefined,
}

export const ChartRendererFlavor = Template.bind({});
ChartRendererFlavor.args = {
  className: 'p-2',
  markdownUrl: '/markdowns/with-charts.md',
  languageCode: 'en',
  flavor: 'chart-renderer',
}
