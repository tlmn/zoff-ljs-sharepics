import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention-mit-bild/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention-mit-bild/controlsRight";
import Template from "../../../templates/diskursintervention-mit-bild/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

const PageDiskursinterventionMitBild = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          body: {
            content: "SPD: Oops, I did it again!",
            scale: { value: 100, range: [60, 150] },
            textPosition: "end",
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout>
        <div className="col-span-3">
          <ControlsLeft />
        </div>
        <div className="col-span-6">
          <Template />
        </div>
        <div className="col-span-3">
          <ControlsRight />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  );
};

export default PageDiskursinterventionMitBild;
