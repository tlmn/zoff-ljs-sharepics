import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/selbstrepraesentation/controlsLeft";
import ControlsRight from "../../../templates/selbstrepraesentation/controlsRight";
import ControlsMobile from "../../../templates/selbstrepraesentation/controlsMobile";
import Template from "../../../templates/selbstrepraesentation/template";
import Template0 from "../../../templates/selbstrepraesentation/slide-0/template";
import Template1 from "../../../templates/selbstrepraesentation/slide-1/template";
import Template2 from "../../../templates/selbstrepraesentation/slide-2/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";
import ThumbnailButton from "../../../components/thumbnailButton";

const PageSelbstrepraesentation = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    activeFieldset: "",
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
          localGroup: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    colorTheme: "darkGray_green",
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
              case 2:
                return (
                  <ThumbnailButton currentSlide={i}>
                    <Template2 thumbnail={true} />
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

export default PageSelbstrepraesentation;
