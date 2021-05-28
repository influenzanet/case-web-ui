import React from 'react';
import { containerClassName } from '../../constants';
import { useFetchTextFile } from '../../hooks/useFetchTextFile';
import LoadingPlaceholder from '../displays/LoadingPlaceholder';
import MarkdownRenderer from '../displays/MarkdownRenderer';
import ComposedLineAndScatterChartLoader from './ComposedLineAndScatterChartLoader';
import MapWithTimeSliderLoader from './MapWithTimeSliderLoader';

/**
 * @param markdownUrl: string: URL absolute or relative path (from the content URL) with filename extension
 * @param languageCode: optional string, to define locale code for time series (composed line and scatter chart) date formatter
 * @param className: optional string, to add CSS classes for the markdown's wrapper
 * @param flavor: optional string, select what extra renderer to attach to the markdown. Currently supported: 'chart-renderer' and default.
 */
interface MarkdownLoaderProps {
  markdownUrl: string;
  className?: string;
  languageCode?: string;
  flavor?: string;
}

const customFlavorRenderers = (language?: string) => {
  return {
    default: {
      'pageinfo': (props: any) => {
        return <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" {...props} ></p>
      },
      'p': (props: any) => {
        if (props.node.children && props.node.children.length > 0 && props.node.children[0].type === 'element') {
          return <div {...props} />
        }
        return <p {...props} />
      },
    },
    chartRenderer: {
      'p': (props: any) => {
        if (props.node.children && props.node.children.length > 0 && props.node.children[0].type === 'element') {
          return <div {...props} />
        }
        return <p {...props} />
      },
      'pageinfo': (props: any) => {
        return <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" {...props} ></p>
      },
      'mapchart': (props: any) => {
        return <MapWithTimeSliderLoader
          mapUrl={props['map-url']}
          dataUrl={props['data-url']}
        />
      },
      'lineandscatterchart': (props: any) =>
        <ComposedLineAndScatterChartLoader
          language={language ? language : 'en'}
          dataUrl={props['data-url']}
        />
      ,
    }
  }
}

const MarkdownLoader: React.FC<MarkdownLoaderProps> = (props) => {
  const { content, loading } = useFetchTextFile(props.markdownUrl);

  if (loading) {
    return <div className={containerClassName}>
      <LoadingPlaceholder color="secondary" minHeight={300} />
    </div>
  }
  if (!content) {
    return null;
  }

  let renderers = customFlavorRenderers(props.languageCode).default;
  switch (props.flavor) {
    case 'chart-renderer':
      renderers = customFlavorRenderers(props.languageCode).chartRenderer;
  }

  return <MarkdownRenderer
    className={props.className}
    markdown={content}
    renderers={renderers}
  />
};

export default MarkdownLoader;
