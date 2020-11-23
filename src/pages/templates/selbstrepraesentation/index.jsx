import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/selbstrepraesentation/controlsLeft";
import ControlsRight from "../../../templates/selbstrepraesentation/controlsRight";
import Template from "../../../templates/selbstrepraesentation/template";
import Template0 from "../../../templates/selbstrepraesentation/slide-0/template";
import Template1 from "../../../templates/selbstrepraesentation/slide-1/template";
import Template2 from "../../../templates/selbstrepraesentation/slide-2/template";
import TemplateLayout from "../../../components/templateLayout";
import { downloadZip } from "../../../lib/lib";

export default () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          body: {
            content: "feministisch",
            scale: { value: 120, range: [80, 200] },
          },
        },
        ref: useRef(null),
      },
      {
        data: { image: { url: null, position: { x: 0, y: 0 }, scale: 0 } },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scale: { value: 80, range: [40, 120] },
          },
          localBranch: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "darkGray_turquoise",
    templateScale: true,
  });

  return (
    <TemplateLayout>
      <div className="col-span-12 flex justify-center py-2">
        {state.slides.map((slide, i) => {
          switch (i) {
            case 0:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template0
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            case 1:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template1
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            case 2:
              return (
                <button
                  onClick={() => setState({ ...state, currentSlide: i })}
                  className="is-thumbnail hover:opacity-75"
                >
                  <Template2
                    state={state}
                    setState={setState}
                    thumbnail={true}
                  />
                </button>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className="col-span-12">
        <button
          type="button"
          className="btn btn-download"
          style={{ width: "10rem" }}
          onClick={() => downloadZip({ state, setState })}
        >
          download zip
        </button>
      </div>
      <div className="col-span-3">
        <ControlsLeft state={state} setState={setState} />
      </div>
      <div className="col-span-6">
        <Template state={state} setState={setState} />
      </div>
      <div className="col-span-3">
        <ControlsRight state={state} setState={setState} />
      </div>
    </TemplateLayout>
  );
};
