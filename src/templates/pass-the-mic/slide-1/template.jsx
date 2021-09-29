import React, { useContext } from "react";

import DraggableBg from "../../../components/inputs/draggableBg";
import TemplateContext from "../../../components/templateContext";
import { getPrimaryColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const [state] = useContext(TemplateContext);
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        ref={!thumbnail ? state.slides[1].ref : null}
      >
        <DraggableBg propertyPath="slides[1].data.image.position" />

        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.slides[1].data.image.url !== null
                ? state.slides[1].data.image.url
                : "/assets/images/defaultImages/pass-the-mic-1.jpg"
            })`,
            height: "100%",
            filter: "grayscale(100%)",
            backgroundPositionX: `${state.slides[1].data.image.position.x}px`,
            backgroundPositionY: `${state.slides[1].data.image.position.y}px`,
            backgroundSize: `${state.slides[1].data.image.scale * 10 + 100}%`,
          }}
        />
        <span
          className="w-full block absolute z-20 bottom-0 py-2 font-body text-lg text-center text-darkGray uppercase"
          style={{ backgroundColor: getPrimaryColor(state) }}
          dangerouslySetInnerHTML={{
            __html: state.slides[1].data.author.content,
          }}
        />
      </div>
    </div>
  );
};

export default Template;
