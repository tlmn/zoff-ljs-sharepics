import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/zitat/controlsLeft";
import ControlsRight from "../../../templates/zitat/controlsRight";
import Template from "../../../templates/zitat/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
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
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout state={state}>
        <div className="col-span-3">
          <ControlsLeft state={state} setState={setState} />
        </div>
        <div className="col-span-6">
          <Template state={state} />
        </div>
        <div className="col-span-3">
          <ControlsRight state={state} setState={setState} />
        </div>
      </TemplateLayout>
    </TemplateContext.Provider>
  );
};
