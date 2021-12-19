import React from "react";

import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { body },
  } = state.slides[1];

  return (
    <TemplateWrapper bgColor={getPrimaryColor(state)} isThumbnail={thumbnail}>
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 font-body font-semibold text-left text-black break-word overflow-hidden"
          style={{
            fontSize: `${body.scale.value}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: body.content,
          }}
        />
      </div>
    </TemplateWrapper>
  );
};

export default Template;
