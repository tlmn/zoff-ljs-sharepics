import React from "react";
import { formatEmojis, getColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  return (
    <div className={`${!thumbnail ? `col-span-6` : `col-span-4`} relative`}>
      <div
        className={`p-4 // flex justify-center items-center absolute // border-1 // template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 0) }}
        ref={!thumbnail ? state.slides[0].ref : null}
      >
        <div class="stripeContainer">
          <div class="stripeText" style={{ color: getColor(state, 0) }}>
            <div
              className="text-left // font-headline italic font-bold"
              dangerouslySetInnerHTML={{
                __html:
                  state.slides[0].data.body.content === ""
                    ? "\u00a0"
                    : formatEmojis(state.slides[0].data.body.content),
              }}
              style={{
                color: getColor(state, 0),
                fontSize: `${state.slides[0].data.body.scale.value}px`,
                transform: "rotate(-6deg)",
              }}
            />
          </div>
          <div
            class="stripeElement"
            style={{
              transform: "rotate(-6deg)",
              backgroundColor: getColor(state, 1),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
