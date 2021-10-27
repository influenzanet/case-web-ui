import clsx from 'clsx';
import React from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone'

interface FileDropzoneProps {
  placeholderText: string;
  accept?: string | string[];
  maxFiles?: number;
  maxSize?: number;
  onDrop?: (<T extends File>(acceptedFiles: T[], fileRejections: FileRejection[], event: DropEvent) => void) | undefined
}

const FileDropzone: React.FC<FileDropzoneProps> = (props) => {
  const { acceptedFiles, isDragActive, getRootProps, getInputProps } = useDropzone({
    //onDropAccepted:
    onDrop: props.onDrop,
    maxFiles: props.maxFiles,
    maxSize: props.maxSize,
    accept: props.accept,
  });

  const files = acceptedFiles.map(file => (
    <span key={file.name}>
      {file.name}
    </span>
  ));

  return (

    <div {...getRootProps({
      className: clsx(
        'dropzone d-flex align-items-center',
        {
          'active': isDragActive
        }
      )

    })}>
      <div
        className="flex-grow-1"
      >
        <input {...getInputProps()} />
        {acceptedFiles.length > 0 ? <React.Fragment>{files}</React.Fragment> :
          <span className="text-grey-4">{props.placeholderText}</span>
        }

      </div>
      <span className="material-icons ms-1a" style={{ fontSize: '1.25rem' }}>cloud_upload</span>
    </div >
  );
};

export default FileDropzone;
