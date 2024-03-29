import React, { useRef, useState } from "react";

import ControlsLeft from "../../../templates/politische-bildung/controlsLeft";
import ControlsRight from "../../../templates/politische-bildung/controlsRight";
import ControlsMobile from "../../../templates/politische-bildung/controlsMobile";
import Template from "../../../templates/politische-bildung/template";
import Template0 from "../../../templates/politische-bildung/slide-0/template";
import Template1 from "../../../templates/politische-bildung/slide-1/template";
import Template2 from "../../../templates/politische-bildung/slide-2/template";
import { Provider as DataContextProvider } from "../../../lib/useDataContext";
import TemplateLayout from "../../../components/templateLayout";
import ThumbnailButton from "../../../components/thumbnailButton";

const PagePolitischeBildung = () => {
  const [state, setState] = useState({
    currentSlide: 0,
    slides: [
      {
        data: {
          category: { content: "Mal im Ernst" },
          body: {
            content: "Was ist {kritische}\n {Männlich-}\n{keit?}",
            scale: { value: 120, range: [90, 150] },
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Diese Männlichkeitsbilder und -anforderungen sind nicht leicht zu beschreiben, da sie sich je nach kultureller Zugehörigkeit, sozialem Umfeld, Zeit und Ort ver-ändern. Diese Anforderungen, also all die Aussagen zusammengenommen „wie Männer nun mal so sind“ bzw. „sein müssen“, haben tatsächliche Auswir-kungen auf das Verhalten von Männern. Männlichkeitsbilder sind im Umbruch und umfassen ein Durcheinander wie z.B. den minnesingenden Ritter oder den erfolgreichen (IT-)Unternehmer.",
            scale: { value: 40, range: [30, 60] },
          },
        },
        ref: useRef(null),
      },
      {
        data: {
          body: {
            content:
              "Die Ereignisse rund um den 4. November gehen als Kieler Matrosenaufstand in die Geschichte ein und bilden den Auftakt zur November Revolution.",
            scale: { value: 40, range: [30, 60] },
          },
          localGroup: { content: "" },
        },
        ref: useRef(null),
      },
    ],
    primaryColor: "green",
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

export default PagePolitischeBildung;
