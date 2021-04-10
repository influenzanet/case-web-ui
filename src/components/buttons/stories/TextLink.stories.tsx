import React from "react";
import TextLink from '../TextLink';

import 'localStyles';

export default {
  title: "Buttons/Text Link"
};

export const Default = () => <TextLink
  href=""
  className=""
  style={undefined}
>Default</TextLink>

export const Custom = () => <TextLink
  href=""
  className="bg-primary text-white p-2"
  style={undefined}
>Custom</TextLink>

