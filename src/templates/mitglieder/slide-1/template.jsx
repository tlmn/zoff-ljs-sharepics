import React, { useContext } from "react";

import TemplateContext from "../../../components/templateContext";
import { getColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const [state] = useContext(TemplateContext);
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={!thumbnail ? state.slides[1].ref : null}
      >
        <div className="p-4 flex flex-col h-full">
          <span
            className="font-headline italic leading-tight text-lg text-left break-word overflow-hidden"
            style={{
              color: getColor(state, 1),
              fontSize: `${state.slides[1].data.body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.slides[1].data.body.content.replace(
                /\n/gi,
                "<br/>"
              ),
            }}
          />
          <span
            className="flex-1 mt-3 // font-headline italic uppercase text-lg text-left"
            style={{ color: getColor(state, 1) }}
            dangerouslySetInnerHTML={{
              __html: state.slides[1].data.author.content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
