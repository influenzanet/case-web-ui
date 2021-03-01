import React from "react";
import ImageCard from '../ImageCard';

import 'localStyles';

export default {
  title: "Cards/Image Card"
};


const Template = (args) => (
  <div style={{
    maxWidth: 400
  }}>
    <ImageCard {...args} />
  </div>
);


export const WithAction = Template.bind({});
WithAction.args = {
  imageSrc: '/images/placeholder_image.png',
  imageAlt: 'Image Alt',
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  openActionText: 'Do Action',
  onClick: () => { console.log('clicked') },
  className: undefined,
}

export const WithoutImg = Template.bind({});
WithoutImg.args = {
  imageSrc: undefined,
  imageAlt: undefined,
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  openActionText: 'Do Action',
  onClick: () => { console.log('clicked') },
  className: undefined,
}

export const WithoutAction = Template.bind({});
WithoutAction.args = {
  imageSrc: '/images/placeholder_image.png',
  imageAlt: 'Image Alt',
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  openActionText: undefined,
  onClick: undefined,
  className: undefined,
}

export const WithClassnameVH100 = Template.bind({});
WithClassnameVH100.args = {
  imageSrc: '/images/placeholder_image.png',
  imageAlt: 'Image Alt',
  title: 'Card Title',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, minus eveniet? Eveniet natus pariatur, nam voluptates voluptas soluta magni dignissimos alias laborum fugit culpa, consequatur modi quas eius provident aperiam.',
  openActionText: undefined,
  onClick: undefined,
  className: 'vh-100',
}



