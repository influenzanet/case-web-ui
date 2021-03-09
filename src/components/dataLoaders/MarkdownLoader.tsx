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
      'inlineCode': (node: any) => <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" >{node.children}</p>,
      'paragraph': (node: any) => node.children[0].type.name === "image" || node.children[0].type.name === "inlineCode" ? (
        <div {...node} />
      ) : (
          <p {...node} />
        )
      ,
    },
    chartRenderer: {
      'inlineCode': (node: any) => <p className="mb-1a border-primary border-top-2 border-bottom-2 text-grey-6" >{node.children}</p>,
      'paragraph': (node: any) => node.children[0].type.name === "image" || node.children[0].type.name === "inlineCode" ? (
        <div {...node} />
      ) : (
          <p {...node} />
        )
      ,
      'definition': (value: any) => {
        const id = value.identifier.split(':')[0];
        switch (id) {
          case 'mapchart':
            const mapUrl = value.identifier.substring(value.identifier.indexOf(':') + 1);
            return <MapWithTimeSliderLoader
              mapUrl={mapUrl}
              dataUrl={value.url}
            />;
          case 'line-and-scatter-chart':
            return <ComposedLineAndScatterChartLoader
              language={language ? language : 'en'}
              dataUrl={value.url}
            />
          default:
            return <p>{'unknown: ' + value.identifier}</p>
        }
      },
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
