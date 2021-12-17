import React from "react";

import ControlsMobile0 from "./slide-0/controlsMobile";
import ControlsMobile1 from "./slide-1/controlsMobile";
import useDataContext from "../../lib/useDataContext";

const ControlsMobile = () => {
  const {
    state: { currentSlide },
  } = useDataContext();
  switch (currentSlide) {
    case 0:
      return <ControlsMobile0 />;
    case 1:
      return <ControlsMobile1 />;
    default:
      return <ControlsMobile0 />;
  }
};

export default ControlsMobile;
