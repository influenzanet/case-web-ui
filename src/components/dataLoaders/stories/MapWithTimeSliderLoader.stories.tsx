import React from "react";
import MapWithTimeSliderLoader from '../MapWithTimeSliderLoader';

import 'localStyles';

export default {
  title: "Data Loaders/MapWithTimeSliderLoader"
};

const Template = (args) => (
  <div className="my-3">
    <MapWithTimeSliderLoader {...args} />
  </div>
);


export const NL = Template.bind({});
NL.args = {
  mapUrl: '/charts/ggd-map-nl.json',
  dataUrl: '/charts/20210126_0801_kaart_data.json',
}
