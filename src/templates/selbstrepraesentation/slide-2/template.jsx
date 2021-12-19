import React from "react";
import { formatEmojis, getColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";
import LogoText from "../../../assets/svg/logo-text";
import TemplateWrapper from "../../../components/templateWrapper";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();

  return (
    <TemplateWrapper
      isThumbnail={thumbnail}
      bgColor={getColor(state, 1)}
      className="p-4 // flex flex-col absolute // border-1"
    >
      <div className="flex h-full">
        <span
          className="block flex-1 // w-full // self-start // text-left font-bold font-headline leading-tight break-word overflow-hidden"
          style={{
            fontSize: `${state.slides[2].data.body.scale.value}px`,
            color: getColor(state, 0),
          }}
          dangerouslySetInnerHTML={{
            __html: formatEmojis(
              state.slides[2].data.body.content.replace(/\n/gi, `<br/>`)
            ),
          }}
        />
      </div>
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
              state.slides[2].data.localBranch.content === ""
                ? "\u00a0"
                : state.slides[2].data.localBranch.content.replace(
                    /\n/gi,
                    `<br/>`
                  ),
          }}
        />
      </div>
    </TemplateWrapper>
  );
};

export default Template;
