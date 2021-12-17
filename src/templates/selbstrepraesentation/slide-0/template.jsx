import React, { useRef, useEffect } from "react";
import { formatEmojis, getColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";
import useWindowResize from "../../../lib/useWindowResize";

const Template = ({ thumbnail = false }) => {
  const { state, setState } = useDataContext();
  const ref = useRef(null);
  const { width } = useWindowResize();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      scaleFactor: ref?.current?.clientWidth / 1080,
    }));
  }, [ref, width]);

  const { scaleFactor } = state;
  return (
    <div className="relative" ref={ref}>
      <div
        className={`p-4 // flex justify-center items-center absolute // border-1 // template origin-top-left ${
          state.templateScale && !thumbnail ? `` : `relative`
        }`}
        style={{
          backgroundColor: getColor(state, 0),
          transform:
            state.templateScale && !thumbnail ? `scale(${scaleFactor})` : ``,
        }}
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
