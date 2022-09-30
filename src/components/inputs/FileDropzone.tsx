import clsx from 'clsx';
import React from 'react';
import { DropEvent, FileRejection, useDropzone, Accept } from 'react-dropzone'

interface FileDropzoneProps {
  placeholderText: string;
  accept?: { [key: string]: string[] };
  files?: File[];
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

  const files = (props.files ? props.files : acceptedFiles).map(file => (
    <span key={file.name}>
      {file.name}
    </span>
  ));

  const shouldUsePlaceholder = () => {
    if (props.files !== undefined) {
      if (props.files.length < 1) {
        return true;
      }
      return false;
    }
    return acceptedFiles.length < 1;
  }

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
        {(!shouldUsePlaceholder()) ? <React.Fragment>{files}</React.Fragment> :
          <span className="text-grey-4">{props.placeholderText}</span>
        }
      </div>
      <span className="material-icons ms-1a" style={{ fontSize: '1.25rem' }}>cloud_upload</span>
    </div >
  );
};

export default FileDropzone;
