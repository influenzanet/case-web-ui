import React from "react";
import ConsentDialog from '../ConsentDialog';

import 'localStyles';

export default {
  title: "Dialogs/Consent form dialog"
};

const Template = (args) => (
  <ConsentDialog {...args} />
);

export const Example = Template.bind({});
Example.args = {
  open: true,
  title: 'Title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum.',
  cancelBtn: 'Cancel',
  acceptBtn: 'Accept',
  onConfirmed: () => { },
  onCancelled: () => { }
}

