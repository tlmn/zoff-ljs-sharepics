import React from "react";
import TemplateWrapper from "../../../components/templateWrapper";
import { formatEmojis, getPrimaryColor } from "../../../lib/lib";

import useDataContext from "../../../lib/useDataContext";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { category, body },
  } = state.slides[0];

  return (
    <TemplateWrapper bgColor="#fff" isThumbnail={thumbnail}>
      <div className="p-4 flex flex-col">
        <span
          className="mb-3 text-center text-xl font-bold font-headline uppercase text-black"
          dangerouslySetInnerHTML={{
            __html: category.content === "" ? "\u00a0" : category.content,
          }}
        />
        <div className="flex-1 flex">
          <span
            className="block // w-full // self-center // text-left text-black font-bold font-headline uppercase italic leading-none"
            style={{
              fontSize: `${body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                body.content
                  .replace(
                    /\{/gi,
                    `<div class="stripeContainer"><div class="stripeText text-black">`
                  )
                  .replace(
                    /\}/gi,
                    `</div><div class="stripeElement stripeElement--skewed" style="background-color: ${getPrimaryColor(
                      state,
                      0
                    )}"></div></div>`
                  )
                  .replace(/\n/gi, `<br/>`)
              ),
            }}
          />
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
