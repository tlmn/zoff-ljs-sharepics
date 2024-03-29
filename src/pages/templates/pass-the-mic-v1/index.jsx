import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/pass-the-mic-v1/controlsLeft";
import ControlsRight from "../../../templates/pass-the-mic-v1/controlsRight";
import ControlsMobile from "../../../templates/pass-the-mic-v1/controlsMobile";
import Template from "../../../templates/pass-the-mic-v1/template";
import Template0 from "../../../templates/pass-the-mic-v1/slide-0/template";
import Template1 from "../../../templates/pass-the-mic-v1/slide-1/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";
import ThumbnailButton from "../../../components/thumbnailButton";

const PagePassTheMicv2 = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
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
    format: { width: 1080, height: 1080 },
  });

  return (
    <DataContextProvider value={{ state, setState }}>
      <TemplateLayout>
        <div className="col-span-12 flex justify-center">
          {state.slides.map((slide, i) => {
            switch (i) {
              case 0:
                return (
                  <ThumbnailButton currentSlide={i}>
                    <Template0 thumbnail={true} />
                  </ThumbnailButton>
                );
              case 1:
                return (
                  <ThumbnailButton currentSlide={i}>
                    <Template1 thumbnail={true} />
                  </ThumbnailButton>
                );
              default:
                return null;
            }
          })}
        </div>

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
