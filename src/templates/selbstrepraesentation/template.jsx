import React, { useContext } from "react";

import Template0 from "./slide-0/template";
import Template1 from "./slide-1/template";
import Template2 from "./slide-2/template";
import TemplateContext from "../../components/templateContext";

const Template = () => {
  const [state] = useContext(TemplateContext);
  switch (state.currentSlide) {
    case 0:
      return <Template0 />;
    case 1:
      return <Template1 />;
    case 2:
      return <Template2 />;
    default:
      return <Template0 />;
  }
};

export default Template;
