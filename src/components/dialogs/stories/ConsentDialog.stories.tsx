import React, { useState } from "react";
import Dialog from '../Dialog';
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

export const WithDifferentXPadding = Template.bind({});
WithDifferentXPadding.args = {
  open: true,
  title: 'Title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta distinctio voluptate totam, odit assumenda tempore ipsum sequi provident eveniet rerum, non dolorum accusantium ullam sapiente eaque quaerat ipsa laborum.',
  cancelBtn: 'Cancel',
  acceptBtn: 'Accept',
  onConfirmed: () => { },
  onCancelled: () => { },
  dialogPaddingXClass: 'px-2'
}

export const StackedDialogs = () => {
  const [showPrimary, setShowPrimary] = useState(false);
  const [showSecondary, setShowSecondary] = useState(false);

  return <div>
    <button onClick={() => setShowPrimary(true)}>open</button>
    <Dialog
      title="Test"
      ariaLabelledBy="test"
      open={showPrimary}
      onClose={() => setShowPrimary(false)}
      //size='sm'
      children={<React.Fragment>
        <div className="p-2" style={{ minHeight: 300 }}>
          <button onClick={() => setShowSecondary(true)}>open</button>
        </div>
      </React.Fragment>
      }
    />
    <ConsentDialog
      title="Test"
      open={showSecondary}
      onCancelled={() => setShowSecondary(false)}
      onConfirmed={() => setShowSecondary(false)}
      acceptBtn='ok'
      cancelBtn='cancel'
      content='Content'
    />
  </div>
}
