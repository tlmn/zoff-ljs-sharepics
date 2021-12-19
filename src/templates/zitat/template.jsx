import React from "react";
import TemplateWrapper from "../../components/templateWrapper";
import { formatEmojis, getColor } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const Template = () => {
  const { state } = useDataContext();
  const {
    data: { body, author },
  } = state.slides[0];

  return (
    <TemplateWrapper className="p-4">
      <div className="flex">
        <span
          className="block // w-full // self-center // text-left italic font-bold font-headline leading-none break-word overflow-hidden"
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
        className="mt-3 flex-1 text-left // font-headline text-lg italic font-bold uppercase break-word overflow-hidden"
        dangerouslySetInnerHTML={{
          __html: author.content === "" ? "\u00a0" : author.content,
        }}
        style={{
          color: getColor(state, 1),
        }}
      />
    </TemplateWrapper>
  );
};

export default Template;
