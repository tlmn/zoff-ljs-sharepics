import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/veranstaltung/controlsLeft";
import ControlsRight from "../../../templates/veranstaltung/controlsRight";
import Template from "../../../templates/veranstaltung/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PageVeranstaltung = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          type: { content: "Vortrag" },
          event: {
            content: "Auf der Fury Road in den Feminismus!",
            scale: { range: [100, 180], value: 140 },
          },
          speaker: { content: "Veronika Kracher" },
          location: { content: "Ort" },
          date: { content: "Datum" },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "darkGray_turquoise",
    templateScale: true,
  });

  return (
    <DataContextProvider value={{ state, setState }}>
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
    </DataContextProvider>
  );
};

export default PageVeranstaltung;
