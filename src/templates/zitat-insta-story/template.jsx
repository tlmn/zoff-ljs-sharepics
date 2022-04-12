import React from "react";
import TemplateWrapper from "../../components/templateWrapper";
import { formatEmojis, getColor } from "../../lib/lib";
import LogoText from "../../assets/svg/logo-text";

import useDataContext from "../../lib/useDataContext";

const Template = () => {
  const { state } = useDataContext();
  const {
    data: { body, author, localGroup },
  } = state.slides[0];

  return (
    <TemplateWrapper className="p-4">
      <div className="flex">
        <span
          className="block w-full self-center text-left italic font-bold font-headline leading-none break-word overflow-hidden mt-[12rem]"
          style={{
            fontSize: `${body.scale.value}px`,
            color: getColor(state, 1),
          }}
          dangerouslySetInnerHTML={{
            __html: formatEmojis(body.content.replace(/\n/gi, `<br/>`)),
          }}
        />
      </div>
      <div
        className="mt-3 flex-1 text-left font-headline text-lg italic font-bold uppercase break-word overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: author.content === "" ? "\u00a0" : author.content,
        }}
        style={{
          color: getColor(state, 1),
        }}
      />
      <div className="flex flex-col justify-center w-full mt-[12rem]">
        <div className="w-full flex justify-center">
          <LogoText fillColor={getColor(state, 1)} />
        </div>
        <div
          className="uppercase font-headline text-center text-md leading-none mt-2"
          style={{
            color: getColor(state, 1),
            transform: "rotate(-6deg)",
          }}
          dangerouslySetInnerHTML={{
            __html:
              localGroup.content === ""
                ? "\u00a0"
                : localGroup.content.replace(/\n/gi, `<br/>`),
          }}
        />
      </div>
    </TemplateWrapper>
  );
};

export default Template;
