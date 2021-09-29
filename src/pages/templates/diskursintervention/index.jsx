import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention/controlsRight";
import Template from "../../../templates/diskursintervention/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

const PageDiskursintervention = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "So komplex und doch so einfach" },
          body: {
            content: "Das Problem heißt {Rassismus!}",
            scale: { value: 100, range: [60, 150] },
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "turquoise_darkGray",
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

export default PageDiskursintervention;
