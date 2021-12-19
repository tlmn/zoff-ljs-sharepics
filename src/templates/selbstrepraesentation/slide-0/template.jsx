import React from "react";
import TemplateWrapper from "../../../components/templateWrapper";
import { formatEmojis, getColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { body },
  } = state.slides[0];

  return (
    <TemplateWrapper
      isThumbnail={thumbnail}
      className="p-4 flex justify-center items-center"
    >
      <div className="stripeContainer">
        <div className="stripeText" style={{ color: getColor(state, 0) }}>
          <div
            className="text-left // font-headline italic font-bold"
            dangerouslySetInnerHTML={{
              __html:
                body.content === "" ? "\u00a0" : formatEmojis(body.content),
            }}
            style={{
              color: getColor(state, 0),
              fontSize: `${body.scale.value}px`,
              transform: "rotate(-6deg)",
            }}
          />
        </div>
        <div
          className="stripeElement"
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
