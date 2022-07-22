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
    copyrightNotice: "Copyright",
    copyrightNoticeXAlignment: 'start'
  },
  textBox: {
    className: "w-100",
    title: "test",
    content: "With long content, Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius?",
  }
}

export const WithoutCopyRight = Template.bind({});
WithoutCopyRight.args = {
  image: {
    url: "/images/placeholder_image.png",
    height: undefined,
    className: "",
    backgroundPosition: "",
  },
  textBox: {
    className: "w-100",
    title: "test",
    content: "With long content, Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius?Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum! Rem tenetur, quisquam in sint ducimus ex et neque repudiandae illum, eos reprehenderit debitis, maxime cupiditate fuga consectetur velit eius?",
  }
}


