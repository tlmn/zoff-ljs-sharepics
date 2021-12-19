import React from "react";

import DraggableBg from "../../../components/inputs/draggableBg";
import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { image, author },
  } = state.slides[1];

  return (
    <TemplateWrapper isThumbnail={thumbnail}>
      {!thumbnail && (
        <DraggableBg propertyPath="slides[1].data.image.position" />
      )}

      <div
        className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
        style={{
          backgroundImage: `url(${
            image.url !== null
              ? image.url
              : "/assets/images/defaultImages/pass-the-mic-1.jpg"
          })`,
          height: "100%",
          filter: "grayscale(100%)",
          backgroundPositionX: `${image.position.x}px`,
          backgroundPositionY: `${image.position.y}px`,
          backgroundSize: `${image.scale * 10 + 100}%`,
        }}
      />
      <span
        className="w-full block absolute z-20 bottom-0 py-2 font-body text-lg text-center text-darkGray uppercase"
        style={{ backgroundColor: getPrimaryColor(state) }}
        dangerouslySetInnerHTML={{
          __html: author.content,
        }}
      />
    </TemplateWrapper>
  );
};

export default Template;
