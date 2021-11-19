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
  markdown: `
<pageinfo>Page Info</pageinfo>

Lorem ipsum, dolor sit amet consectetur adipisicing elit.
<img src="http://localhost:6006"/>
- item
- item

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum. Nihil corporis alias consectetur reiciendis aliquam laboriosam modi deleniti, maxime dolorum exercitationem tempore ex.`,
  renderers: {
    'pageinfo': (props: any) => {
      return <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" {...props} ></p>
    },
    'p': (props: any) => {
      console.log(props);
      if (props.node.children && props.node.children.length > 0 && props.node.children[0].type === 'element') {
        return <div {...props} />
      }
      return <p {...props} />
    },
  },
  className: "",
}

export const WithIframe = Template.bind({});
WithIframe.args = {
  markdown: `
<pageinfo>Page Info</pageinfo>

Lorem ipsum, dolor sit amet consectetur adipisicing elit.
<img src="http://localhost:6006"/>
- item
- item

<div className="text-center">
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
</div>

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum. Nihil corporis alias consectetur reiciendis aliquam laboriosam modi deleniti, maxime dolorum exercitationem tempore ex.`,
  renderers: {
    'pageinfo': (props: any) => {
      return <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" {...props} ></p>
    },
    'p': (props: any) => {
      console.log(props);
      if (props.node.children && props.node.children.length > 0 && props.node.children[0].type === 'element') {
        return <div {...props} />
      }
      return <p {...props} />
    },
  },
  className: "",
}

export const Custom = Template.bind({});
Custom.args = {
  markdown: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis odit incidunt minima velit eum ratione illum. Nihil corporis alias consectetur reiciendis aliquam laboriosam modi deleniti, maxime dolorum exercitationem tempore ex.",
  renderers: undefined,
  className: "bg-primary text-white m-3 p-3",
}
