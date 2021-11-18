import React from "react";

import 'localStyles';

export default {
  title: "Buttons/Navlink"
};

export const Example = () => <div className="bg-primary">
  <a
    className="nav-link"
  >Link 1</a>
  <a
    className="text-body nav-link active"
  >Link 2</a>
  <a
    className="nav-link"
  >Link 3</a>

</div>
