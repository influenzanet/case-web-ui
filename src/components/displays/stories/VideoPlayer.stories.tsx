import React from "react";
import VideoPlayer from "../VideoPlayer";

import 'localStyles';

export default {
  title: "Displays/Video Player"
};

const Template = (args) => (
  <VideoPlayer {...args} />
);


export const LongCOVID = Template.bind({});
LongCOVID.args = {
  className: 'w-100',
  minHeight: 100,
  posterUrl: 'https://www.rovid.nl/rivm/aco/2021/rivm-aco-20210512-idumh3qvn-still-middel.jpg',
  fallbackText: 'Custom error message',
  sources: [
    {
      src: 'https://www.rovid.nl/rivm/aco/2021/rivm-aco-20210512-idumh3qvn-web-hd.mp4',
      type: 'video/mp4'
    }, {
      src: 'https://www.rovid.nl/rivm/aco/2021/rivm-aco-20210512-idumh3qvn-bron.mxf',
      type: 'video/mxf'
    }, {
      src: 'https://www.rovid.nl/rivm/aco/2021/rivm-aco-20210512-idumh3qvn-web.webm',
      type: 'video/webm'
    }
  ],
  tracks: [{
    src: 'http://localhost:6006/static-content/rivm-aco-20210512-idumh3qvn-ondertiteling.vtt',
    // src: 'https://www.rovid.nl/rivm/aco/2021/rivm-aco-20210512-idumh3qvn-ondertiteling.vtt',
    label: 'Nederlands',
    srcLang: 'nl',
    kind: 'subtitles',
    default: true
  }]
}
