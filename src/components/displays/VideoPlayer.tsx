import React from 'react';

interface VideoPlayerProps {
  className?: string;
  minHeight?: number;
  posterUrl?: string;
  fallbackText?: string;
  sources: Array<{
    src: string;
    type: string;
  }>;
  tracks?: Array<
    {
      src: string;
      default?: boolean;
      srcLang: string;
      label: string;
      kind: string;
    }>
}


const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  return (
    <div
      className={props.className}
      style={{
        minHeight: props.minHeight,
      }}
    >
      <video
        width="100%"
        controls={true}
        poster={props.posterUrl}
        controlsList="nodownload"
      >
        {props.sources.map((src, index) => <source
          key={index.toFixed()}
          src={src.src}
          type={src.type}
        />)}
        {
          props.tracks ?
            props.tracks.map((trackProps, index) => <track
              key={index.toFixed()}
              {...trackProps}
            />)
            : null
        }
        {props.fallbackText ? props.fallbackText : null}
      </video>
    </div>

  );
};

export default VideoPlayer;
