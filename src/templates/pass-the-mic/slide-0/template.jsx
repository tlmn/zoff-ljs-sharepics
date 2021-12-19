import React from "react";
import { formatEmojis, getPrimaryColor } from "../../../lib/lib";
import TemplateWrapper from "../../../components/templateWrapper";

import useDataContext from "../../../lib/useDataContext";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  const {
    data: { category, body },
  } = state.slides[0];

  return (
    <TemplateWrapper isThumbnail={thumbnail} bgColor="#fff">
      <div className="p-4 flex flex-col">
        <span
          className="mb-3 text-center text-xl font-bold font-headline uppercase"
          dangerouslySetInnerHTML={{
            __html: category.content === "" ? "\u00a0" : category.content,
          }}
        />
        <div className="flex-1 flex">
          <span
            className="block // w-full // self-center // text-left text-black font-bold italic font-headline leading-none"
            style={{
              fontSize: `${body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                body.content
                  .replace(
                    /\{/gi,
                    `<div class="stripeContainer"><div class="stripeText">`
                  )
                  .replace(
                    /\}/gi,
                    () =>
                      `</div><div class="stripeElement" style="background-color: ${getPrimaryColor(
                        state,
                        1
                      )}; transform:rotate(${
                        Math.random() * 8 - 1.5
                      }deg);"></div></div>`
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
