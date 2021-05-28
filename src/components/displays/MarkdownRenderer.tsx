import React from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import TextLink from '../buttons/TextLink';
import gfm from 'remark-gfm';


interface MarkdownRendererProps {
  markdown: string;
  renderers?: { [nodeType: number]: React.ElementType<any>; };
  className?: string;
  plugins: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = (props) => {
  return (
    <ReactMarkdown
      className={props.className}
      children={props.markdown}
      components={
        {
          link: TextLink,
          ...props.renderers
        }

      }
      remarkPlugins={props.plugins ? [gfm] : undefined}
      rehypePlugins={props.plugins ? [rehypeRaw] : undefined}
    />
  );
};

export default MarkdownRenderer;
