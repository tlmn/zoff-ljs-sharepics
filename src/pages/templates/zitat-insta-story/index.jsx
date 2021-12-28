import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/zitat-insta-story/controlsLeft";
import ControlsRight from "../../../templates/zitat-insta-story/controlsRight";
import ControlsMobile from "../../../templates/zitat-insta-story/controlsMobile";
import Template from "../../../templates/zitat-insta-story/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PageZitatInsta = () => {
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
          localGroup: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "red_violet",
    templateScale: true,
    format: { width: 1080, height: 1920 },
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

export default PageZitatInsta;
