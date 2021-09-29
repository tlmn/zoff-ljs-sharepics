import React, { useContext } from "react";

import ControlsRight0 from "./slide-0/controlsRight";
import ControlsRight1 from "./slide-1/controlsRight";
import ControlsRight2 from "./slide-2/controlsRight";
import TemplateContext from "../../components/templateContext";

const ControlsRight = () => {
  const [state] = useContext(TemplateContext);
  switch (state.currentSlide) {
    case 0:
      return <ControlsRight0 />;
    case 1:
      return <ControlsRight1 />;
    case 2:
      return <ControlsRight2 />;
    default:
      return <ControlsRight0 />;
  }
};

export default ControlsRight;
