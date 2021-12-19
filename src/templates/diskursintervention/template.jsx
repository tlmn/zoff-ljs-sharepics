import React from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import LogoText from "../../assets/svg/logo-text";
import useDataContext from "../../lib/useDataContext";
import TemplateWrapper from "../../components/templateWrapper";

const Template = () => {
  const { state } = useDataContext();
  const { currentSlide } = state;
  const {
    data: { category, body, localGroup },
  } = state.slides[currentSlide];

  return (
    <TemplateWrapper className="p-4">
      <span
        className="mb-3 text-center text-xl font-bold font-headline italic"
        dangerouslySetInnerHTML={{
          __html: category.content === "" ? "\u00a0" : category.content,
        }}
        style={{
          color: getColor(state, 1),
        }}
      />
      <div className="mb-3 flex-1 flex">
        <span
          className="block // w-full // self-center // text-center break-all font-bold font-headline leading-none"
          style={{
            fontSize: `${body.scale.value}px`,
            color: getColor(state, 1),
          }}
          dangerouslySetInnerHTML={{
            __html: formatEmojis(
              body.content
                .replace(
                  /\{/gi,
                  `<div class="stripeContainer"><div class="stripeText" style="color: ${getColor(
                    state,
                    0
                  )}">`
                )
                .replace(
                  /\}/gi,
                  `</div><div class="stripeElement" style="transform:rotate(${
                    Math.random() * 5 - 2.5
                  }deg); background-color: ${getColor(state, 1)}"></div></div>`
                )
                .replace(/\n/gi, `<br/>`)
            ),
          }}
        />
      </div>
      <LogoText className="self-center" fillColor={getColor(state, 1)} />
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
              : state.slides[
                  state.currentSlide
                ].data.localGroup.content.replace(/\n/gi, `<br/>`),
        }}
      />
    </TemplateWrapper>
  );
};

export default Template;
