import React from "react";

import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const currentSlide = 1;
  const { state } = useDataContext();
  return (
    <TemplateWrapper bgColor={getPrimaryColor(state)} isThumbnail={thumbnail}>
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
    </TemplateWrapper>
  );
};

export default Template;
