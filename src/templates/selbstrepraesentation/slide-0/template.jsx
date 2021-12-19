import React from "react";
import TemplateWrapper from "../../../components/templateWrapper";
import { formatEmojis, getColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();

  return (
    <TemplateWrapper
      isThumbnail={thumbnail}
      className="p-4 flex justify-center items-center"
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
    </TemplateWrapper>
  );
};

export default Template;
