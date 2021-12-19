import React from "react";
import DraggableBg from "../../../components/inputs/draggableBg";
import useDataContext from "../../../lib/useDataContext";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { image },
  } = state.slides[1];

  return (
    <TemplateWrapper isThumbnail={thumbnail} colorThemeColorOrder={0}>
      {!thumbnail && (
        <DraggableBg propertyPath="slides[1].data.image.position" />
      )}

      <div
        className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
        style={{
          backgroundImage: `url(${
            image.url !== null
              ? image.url
              : "/assets/images/defaultImages/selbstrepraesentation-1.jpg"
          })`,
          height: "100%",
          filter: "grayscale(100%)",
          backgroundPositionX: `${image.position.x}px`,
          backgroundPositionY: `${image.position.y}px`,
          backgroundSize: `${image.scale * 10 + 100}%`,
        }}
      />
    </TemplateWrapper>
  );
};

export default Template;
