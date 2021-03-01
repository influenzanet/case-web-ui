import React, { useEffect, useState } from 'react';
import { getExternalOrLocalContentURL } from '../../utils/routeUtils';
import ComposedLineAndScatterChart, { ChartConfig } from '../charts/ComposedLineAndScatterChart';
import LoadingPlaceholder from '../displays/LoadingPlaceholder';


interface ComposedLineAndScatterChartLoaderProps {
  dataUrl: string;
  language: string;
}

const ComposedLineAndScatterChartLoader: React.FC<ComposedLineAndScatterChartLoaderProps> = (props) => {
  const [data, setData] = useState<ChartConfig | undefined>();

  useEffect(() => {
    fetch(getExternalOrLocalContentURL(props.dataUrl))
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        const chartData: ChartConfig = json;
        setData(chartData);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataUrl]);


  const loadingContent = () => <LoadingPlaceholder color="secondary" minHeight={400} />

  if (!data) {
    return loadingContent();
  }

  return (
    <ComposedLineAndScatterChart
      chart={data}
      locale={props.language}
    />
  );
};

export default ComposedLineAndScatterChartLoader;
