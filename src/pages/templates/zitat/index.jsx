import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/zitat/controlsLeft";
import ControlsRight from "../../../templates/zitat/controlsRight";
import ControlsMobile from "../../../templates/zitat/controlsMobile";
import Template from "../../../templates/zitat/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PageZitat = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
    slides: [
      {
        data: {
          author: { content: "Rosa Luxemburg" },
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scale: { value: 80, range: [50, 120] },
          },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
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

export default PageZitat;
