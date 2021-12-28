import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/mitglieder/controlsLeft";
import ControlsRight from "../../../templates/mitglieder/controlsRight";
import ControlsMobile from "../../../templates/mitglieder/controlsMobile";
import Template from "../../../templates/mitglieder/template";
import Template0 from "../../../templates/mitglieder/slide-0/template";
import Template1 from "../../../templates/mitglieder/slide-1/template";
import Template2 from "../../../templates/mitglieder/slide-2/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";
import ThumbnailButton from "../../../components/thumbnailButton";

const PageMitglieder = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          statement: { content: "Ich bin bei Linksjugend ['solid] weil" },
          image: { url: null, position: { x: 0, y: 0 }, scale: 0 },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Eine vom Patriarchat befreite Gesellschaft? Viele sprechen davon aber wenige setzen es in die Praxis um.",
            scale: { value: 60, range: [50, 70] },
          },
          author: { content: "Anna Westner" },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content: "Man muss doch alles selber machen!",
            scale: { value: 100, range: [60, 150] },
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

export default PageMitglieder;
