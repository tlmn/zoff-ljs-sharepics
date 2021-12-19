import React from "react";

import LogoText from "../../../assets/svg/logo-text";
import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { body, localBranch },
  } = state.slides[2];

  return (
    <TemplateWrapper bgColor={getPrimaryColor(state)} isThumbnail={thumbnail}>
      <div className="p-4 flex flex-col h-full">
        <span
          className="flex-1 text-left font-body font-semibold text-black break-word overflow-hidden"
          dangerouslySetInnerHTML={{
            __html: body.content,
          }}
          style={{
            fontSize: `${body.scale.value}px`,
          }}
        />
        <div className="flex flex-col justify-center w-full">
          <div className="w-full flex justify-center">
            <LogoText fillColor="#000" />
          </div>
          <div
            className="uppercase font-headline text-center text-md leading-none mt-2 text-black"
            style={{
              transform: "rotate(-6deg)",
            }}
            dangerouslySetInnerHTML={{
              __html:
                localBranch.content === ""
                  ? "\u00a0"
                  : localBranch.content.replace(/\n/gi, `<br/>`),
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
