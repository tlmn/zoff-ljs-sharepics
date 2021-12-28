import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/diskursintervention-mit-bild/controlsLeft";
import ControlsRight from "../../../templates/diskursintervention-mit-bild/controlsRight";
import ControlsMobile from "../../../templates/diskursintervention-mit-bild/controlsMobile";
import Template from "../../../templates/diskursintervention-mit-bild/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PageDiskursinterventionMitBild = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
    slides: [
      {
        data: {
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          body: {
            content: "SPD: Oops, I did it again!",
            scale: { value: 100, range: [60, 150] },
            textPosition: "end",
          },
          localGroup: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
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

export default PageDiskursinterventionMitBild;
