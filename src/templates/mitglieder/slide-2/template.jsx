import React from "react";

import LogoText from "../../../assets/svg/logo-text";
import useDataContext from "../../../lib/useDataContext";
import { getColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { body, localGroup },
  } = state.slides[2];

  return (
    <TemplateWrapper isThumbnail={thumbnail} colorThemeColorOrder={1}>
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 text-left font-headline uppercase italic leading-tight break-word overflow-hidden"
          style={{
            color: getColor(state, 0),
            fontSize: `${body.scale.value}px`,
          }}
          dangerouslySetInnerHTML={{
            __html: body.content.replace(/\n/gi, `<br />`),
          }}
        />
        <div className="flex flex-col justify-center w-full">
          <div className="w-full flex justify-center">
            <LogoText fillColor={getColor(state, 0)} />
          </div>
          <div
            className="uppercase font-headline text-center text-md leading-none mt-2"
            style={{
              color: getColor(state, 0),
              transform: "rotate(-6deg)",
            }}
            dangerouslySetInnerHTML={{
              __html:
                localGroup.content === ""
                  ? "\u00a0"
                  : localGroup.content.replace(/\n/gi, `<br />`),
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
