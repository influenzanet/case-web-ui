import React from 'react';
import ReactMarkdown from "react-markdown";
import TextLink from '../buttons/TextLink';
import rehypeRaw from 'rehype-raw';
import gfm from 'remark-gfm';


interface MarkdownRendererProps {
  markdown: string;
  renderers?: { [nodeType: string]: React.ElementType<any>; };
  className?: string;
  disablePlugins?: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = (props) => {
  return (
    <ReactMarkdown
      className={props.className}
      children={props.markdown}
      components={
        {
          a: TextLink,
          ...props.renderers
        }
      }
      remarkPlugins={!props.disablePlugins ? [gfm] : undefined}
      rehypePlugins={!props.disablePlugins ? [rehypeRaw] : undefined}
    />
  );
};

export default MarkdownRenderer;
