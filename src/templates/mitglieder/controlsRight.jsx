import React from "react";

import Controls0 from "./slide-0/controlsRight";
import Controls1 from "./slide-1/controlsRight";
import Controls2 from "./slide-2/controlsRight";
import useDataContext from "../../lib/useDataContext";

const ControlsRight = () => {
  const { state } = useDataContext();
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
