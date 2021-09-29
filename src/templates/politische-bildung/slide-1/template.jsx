import React from "react";

import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const currentSlide = 1;
  const { state } = useDataContext();
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{
          backgroundColor: getPrimaryColor(state),
        }}
        ref={!thumbnail ? state.slides[currentSlide].ref : null}
      >
        <div className="p-4 flex flex-col h-full">
          <span
            className="flex-1 font-body font-semibold text-left text-black break-word overflow-hidden"
            style={{
              fontSize: `${state.slides[currentSlide].data.body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.slides[currentSlide].data.body.content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
