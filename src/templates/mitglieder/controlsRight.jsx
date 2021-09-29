import React, { useContext } from "react";

import Controls0 from "./slide-0/controlsRight";
import Controls1 from "./slide-1/controlsRight";
import Controls2 from "./slide-2/controlsRight";
import TemplateContext from "../../components/templateContext";

const ControlsRight = () => {
  const [state] = useContext(TemplateContext);
  switch (state.currentSlide) {
    case 0:
      return <Controls0 />;
    case 1:
      return <Controls1 />;
    case 2:
      return <Controls2 />;
    default:
      return <Controls0 />;
  }
};

export default ControlsRight;
