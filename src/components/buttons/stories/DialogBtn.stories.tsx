import React from "react";
import DialogBtn from '../DialogBtn';

import 'localStyles';

export default {
  title: "Buttons/Dialog Button"
};

export const Primary = () => <DialogBtn
  color="primary"
  label="primary"
  loading={false}
  loadingLabel=""
/>

export const Danger = () => <DialogBtn
  color="danger"
  label="danger"
  loading={false}
  loadingLabel=""
/>

export const warning = () => <DialogBtn
  color="warning"
  label="warning"
  loading={false}
  loadingLabel=""
/>

export const Loading = () => <DialogBtn
  color="primary"
  label="primary"
  loading={true}
  loadingLabel="loading..."
/>
