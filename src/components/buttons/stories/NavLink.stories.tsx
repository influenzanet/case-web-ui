import React from "react";

import 'localStyles';

export default {
  title: "Buttons/Navlink"
};

export const Example = () => <div className="bg-primary">
  <a
    className="nav-link"
    type="button"
  >Link 1</a>
  <a
    className="text-body nav-link active"
    type="button"
  >Link 2</a>
  <a
    className="nav-link"
    type="button"
  >Link 3</a>

</div>
