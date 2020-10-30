import React from "react";
import { getColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => (
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
          className="flex-1 font-headline italic leading-tight text-lg text-left"
          style={{
            color: getColor(state, 1),
            fontSize: `${
              (state.slides[1].data.body.scale / 100) * 140
            }px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.slides[1].data.body.content,
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
