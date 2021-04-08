import React from "react";
import EditBtn from '../EditBtn';

import 'localStyles';

export default {
  title: "Buttons/Edit Button"
};

export const Default = () => <EditBtn
  autoFocus={false}
  disabled={false}
  form=""
  formAction=""
  formEncType=""
  formMethod=""
  formNoValidate={false}
  formTarget=""
  name=""
  type="button"
  value=""
>Default</EditBtn>

export const Disabled = () => <EditBtn
  autoFocus={false}
  disabled={true}
  form=""
  formAction=""
  formEncType=""
  formMethod=""
  formNoValidate={false}
  formTarget=""
  name=""
  type="button"
  value=""
>Disabled</EditBtn>

export const Focused = () => <EditBtn
  autoFocus={true}
  disabled={false}
  form=""
  formAction=""
  formEncType=""
  formMethod=""
  formNoValidate={false}
  formTarget=""
  name=""
  type="button"
  value=""
>Focused</EditBtn>
