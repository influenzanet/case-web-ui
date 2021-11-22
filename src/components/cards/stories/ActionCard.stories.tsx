import React from "react";
import ActionCard from '../ActionCard';
import MarkdownRenderer from '../../displays/MarkdownRenderer';

import 'localStyles';

export default {
  title: "Cards/Action Card"
};


const Template = (args) => (
  <div style={{
    maxWidth: 800
  }}>
    <ActionCard {...args} />
  </div>
);


export const WithAction = Template.bind({});
WithAction.args = {
  image: {
    url: '/static-content/images/placeholder_image.png',
    height: 200,
  },
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  footerText: '01.04.2025',
  actionBtnText: 'Do Action',
  children: [<p key="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea molestiae numquam eveniet, dolores voluptas unde quibusdam iure accusamus corporis? Voluptas consequuntur fugit corporis, debitis temporibus hic. Velit, reiciendis? Et.</p>],
  onClick: () => { console.log('clicked') },
  className: undefined,
}

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  image: {
    url: '/static-content/images/placeholder_image.png',
    height: '200px',
  },
  title: 'Card Title',
  footerText: '01.04.2025',
  // actionBtnText: 'Do Action',
  children: [<p key="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea molestiae numquam eveniet, dolores voluptas unde quibusdam iure accusamus corporis? Voluptas consequuntur fugit corporis, debitis temporibus hic. Velit, reiciendis? Et.</p>],
  onClick: () => { console.log('clicked') },
  className: "vh-100",
}

export const WithMarkdownContent = Template.bind({});
WithMarkdownContent.args = {
  image: {
    url: '/static-content/images/placeholder_image.png',
    height: '200px',
  },
  title: 'Card Title',
  footerText: '01.04.2025',
  actionBtnText: 'Do Action',
  children: [<MarkdownRenderer
    key="1"
    markdown={`
Hello **This is a formatted text**

With a bullet list:

- item 1
- item 2

  `} />],
  onClick: () => { console.log('clicked') },
  className: undefined,
}


export const WithLeftImage = Template.bind({});
WithLeftImage.args = {
  image: {
    url: '/static-content/images/placeholder_image.png',
    placement: 'left',
    width: "250px",
    minWidth: "60px",
    className: 'd-none d-sm-inline-block'
  },
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  footerText: '01.04.2025',
  actionBtnText: 'Do Action',
  children: [<p key="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea molestiae numq</p>],
  onClick: () => { console.log('clicked') },
  className: undefined,
}
