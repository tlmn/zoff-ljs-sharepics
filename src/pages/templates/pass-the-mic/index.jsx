import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/pass-the-mic/controlsLeft";
import ControlsRight from "../../../templates/pass-the-mic/controlsRight";
import Template from "../../../templates/pass-the-mic/template";
import Template0 from "../../../templates/pass-the-mic/slide-0/template";
import Template1 from "../../../templates/pass-the-mic/slide-1/template";
import TemplateContext from "../../../components/templateContext";
import TemplateLayout from "../../../components/templateLayout";

const PagePassTheMic = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "Voll unsere Meinung" },
          body: {
            content: "{Don't let}\n{people}\n{drown.}",
            scale: { value: 160, range: [90, 210] },
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
          author: {
            content: "Pia Klemp",
          },
        },
        ref: useRef(null),
      },
    ],
    primaryColor: "violet",
    templateScale: true,
  });

  return (
    <TemplateContext.Provider value={[state, setState]}>
      <TemplateLayout>
        <div className="col-span-12 flex justify-center py-2">
          {state.slides.map((slide, i) => {
            switch (i) {
              case 0:
                return (
                  <button
                    onClick={() =>
                      setState((prev) => ({ ...prev, currentSlide: i }))
                    }
                    className="is-thumbnail hover:opacity-75"
                  >
                    <Template0 thumbnail={true} />
                  </button>
                );
              case 1:
                return (
                  <button
                    onClick={() =>
                      setState((prev) => ({ ...prev, currentSlide: i }))
                    }
                    className="is-thumbnail hover:opacity-75"
                  >
                    <Template1 thumbnail={true} />
                  </button>
                );
              default:
                return null;
            }
          })}
        </div>

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

export default PagePassTheMic;
