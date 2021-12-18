import React from "react";

import useDataContext from "../../../lib/useDataContext";
import { getColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  return (
    <TemplateWrapper isThumbnail={thumbnail}>
      <div className="p-4 flex flex-col h-full">
        <span
          className="font-headline italic leading-tight text-lg text-left break-word overflow-hidden"
          style={{
            color: getColor(state, 1),
            fontSize: `${state.slides[1].data.body.scale.value}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: state.slides[1].data.body.content.replace(/\n/gi, "<br/>"),
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
    </TemplateWrapper>
  );
};

export default Template;
