import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention/controlsRight";
import ControlsMobile from "../../../templates/diskursintervention/controlsMobile";
import Template from "../../../templates/diskursintervention/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PageDiskursintervention = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
    slides: [
      {
        data: {
          category: { content: "So komplex und doch so einfach" },
          body: {
            content: "Das Problem heißt {Rassismus!}",
            scale: { value: 100, range: [60, 150] },
          },
          localGroup: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "green_darkGray",
    templateScale: true,
    scaleFactor: 1,
    format: { width: 1080, height: 1080 },
  });

  return (
    <DataContextProvider value={{ state, setState }}>
      <TemplateLayout>
        <div className="col-span-3 hidden md:block">
          <ControlsLeft />
        </div>
        <div className="col-span-full md:col-span-6 mx-2 md:p-0">
          <Template />
        </div>
        <div className="col-span-3 hidden md:block">
          <ControlsRight />
        </div>
        <ControlsMobile />
      </TemplateLayout>
    </DataContextProvider>
  );
};

export default PageDiskursintervention;
