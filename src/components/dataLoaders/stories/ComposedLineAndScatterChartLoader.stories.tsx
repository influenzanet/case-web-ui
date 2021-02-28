import React from "react";
import ComposedLineAndScatterChartLoader from '../ComposedLineAndScatterChartLoader';

import 'localStyles';

export default {
  title: "Data Loaders/ComposedLineAndScatterChartLoader"
};


const Template = (args) => (
  <div className="my-3">
    <ComposedLineAndScatterChartLoader {...args} />
  </div>
);


export const ScatterAndLine = Template.bind({});
ScatterAndLine.args = {
  language: 'nl',
  dataUrl: '/charts/20210126_0801_percentage_klachten_over_tijd.json',
}

