import React from "react";

import DraggableBg from "../../../components/inputs/draggableBg";
import useDataContext from "../../../lib/useDataContext";
import { getColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { image, statement },
  } = state.slides[0];

  return (
    <TemplateWrapper isThumbnail={thumbnail}>
      <div className="p-4 flex flex-col items-center h-full justify-end">
        {!thumbnail && (
          <DraggableBg propertyPath="slides[0].data.image.position" />
        )}
        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              image.url !== null
                ? image.url
                : "/assets/images/defaultImages/mitglieder-0.jpg"
            })`,
            height: "100%",
            filter: "grayscale(100%)",
            backgroundPositionX: `${image.position.x}px`,
            backgroundPositionY: `${image.position.y}px`,
            backgroundSize: `${image.scale * 10 + 100}%`,
          }}
        />
        <div
          className="stripeContainer z-40 mb-3"
          style={{
            transform: "rotate(-6deg)",
          }}
        >
          <span
            className="stripeText text-center text-xl font-bold font-headline uppercase"
            style={{
              color: getColor(state, 1),
            }}
            dangerouslySetInnerHTML={{
              __html: statement.content === "" ? "\u00a0" : statement.content,
            }}
          />
          <div
            className="stripeElement"
            style={{ backgroundColor: getColor(state, 0) }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
