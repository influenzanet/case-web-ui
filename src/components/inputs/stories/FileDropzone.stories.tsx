import React from "react";
import FileDropzone from '../FileDropzone';

import 'localStyles';

export default {
  title: "Inputs/File Dropzone"
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <div className="bg-secondary p-2">
  <FileDropzone {...args} checked={false} />
</div>;

export const Example = Template.bind({});
Example.args = {
  //accept: 'json',
  placeholderText: 'Drag and drop a file here, or click this field',
  onDrop: (acceptedFiles, event) => {
    console.log(acceptedFiles)

  }
}
