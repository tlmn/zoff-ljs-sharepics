import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/pass-the-mic-v2/controlsLeft";
import ControlsRight from "../../../templates/pass-the-mic-v2/controlsRight";
import ControlsMobile from "../../../templates/pass-the-mic-v2/controlsMobile";
import Template from "../../../templates/pass-the-mic-v2/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";

const PagePassTheMicv2 = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
    slides: [
      {
        data: {
          category: { content: "Voll unsere Meinung" },
          body: {
            content:
              "{Erinnerung}\n{Gerechtigkeit}\n{Aufklärung}\n{Konsequenzen}",
            scale: { value: 100, range: [70, 120] },
            textPosition: "end",
          },
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          author: {
            content: "Newroz Duman – Initiative 19. Februar",
          },
        },
        ref: useRef(null),
      },
    ],
    primaryColor: "violet",
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

export default PagePassTheMicv2;
