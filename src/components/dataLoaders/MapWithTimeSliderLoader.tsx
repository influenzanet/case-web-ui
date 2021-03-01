import React, { useEffect, useState } from 'react';
import { getExternalOrLocalContentURL } from '../../utils/routeUtils';
import MapWithTimeSlider, { MapSeriesConfig } from '../charts/MapWithTimeSlider';
import LoadingPlaceholder from '../displays/LoadingPlaceholder';

interface MapWithTimeSliderLoaderProps {
  mapUrl: string;
  dataUrl: string;
}

const MapWithTimeSliderLoader: React.FC<MapWithTimeSliderLoaderProps> = (props) => {
  const [geoData, setGeoData] = useState<any | undefined>();
  const [seriesData, setSeriesData] = useState<MapSeriesConfig | undefined>();

  useEffect(() => {
    fetch(getExternalOrLocalContentURL(props.dataUrl))
      .then(res => res.json())
      .then(json => {
        setSeriesData(json);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataUrl]);

  useEffect(() => {
    fetch(getExternalOrLocalContentURL(props.mapUrl))
      .then(res => res.json())
      .then(json => {
        setGeoData(json);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.mapUrl]);

  const loadingContent = () => <LoadingPlaceholder color="secondary" minHeight={400} />

  if (!geoData || !seriesData) {
    return loadingContent();
  }

  return (
    <MapWithTimeSlider
      geoData={geoData}
      seriesData={seriesData}
      language={'be-nl'}
    />
  );
};

export default MapWithTimeSliderLoader;
