import React from "react";
import SimpleCard from '../SimpleCard';

import 'localStyles';

export default {
  title: "Cards/Simple Card"
};


const Template = (args) => (
  <div style={{
    maxWidth: 500
  }}>
    <SimpleCard {...args} />
  </div>
);


export const Simple = Template.bind({});
Simple.args = {
  className: undefined,
  title: "Card title",
  content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor mollitia temporibus qui animi corporis, maxime veritatis tempora possimus excepturi repellendus nesciunt non voluptas veniam laboriosam nihil dolorem nisi! Voluptatem',
  variant: 'h2',
}

export const EmptyContent = Template.bind({});
EmptyContent.args = {
  className: undefined,
  title: "Card title",
  content: '',
  variant: 'h2',
}

export const EmptyTitle = Template.bind({});
EmptyTitle.args = {
  className: undefined,
  title: undefined,
  content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor mollitia temporibus qui animi corporis, maxime veritatis tempora possimus excepturi repellendus nesciunt non voluptas veniam laboriosam nihil dolorem nisi! Voluptatem',
  variant: 'h2',
}


