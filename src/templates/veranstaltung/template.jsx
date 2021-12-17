import React from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import BreakerLine from "../../assets/svg/breakerline";
import LogoArrow from "../../assets/svg/logo-arrow";
import useDataContext from "../../lib/useDataContext";
import TemplateWrapper from "../../components/templateWrapper";

const Template = () => {
  const { state } = useDataContext();

  return (
    <TemplateWrapper>
      <div className="flex flex-col h-full">
        <div className="flex flex-col flex-1 px-4 pt-4">
          <span
            className="mb-3 text-center text-xl font-bold font-headline uppercase w-full block"
            dangerouslySetInnerHTML={{
              __html:
                state.slides[state.currentSlide].data.type.content === ""
                  ? "\u00a0"
                  : state.slides[state.currentSlide].data.type.content,
            }}
            style={{
              color: getColor(state, 1),
            }}
          />
          <span
            className="block // w-full // self-center // text-left font-bold font-headline leading-none"
            style={{
              fontSize: `${
                state.slides[state.currentSlide].data.event.scale.value
              }px`,
              color: getColor(state, 1),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[state.currentSlide].data.event.content.replace(
                  /\n/gi,
                  `<br/>`
                )
              ),
            }}
          />
          <div
            className="mt-3 flex-1 text-left // font-headline text-lg font-bold uppercase break-word overflow-hidden"
            dangerouslySetInnerHTML={{
              __html:
                state.slides[state.currentSlide].data.speaker.content === ""
                  ? "\u00a0"
                  : state.slides[state.currentSlide].data.speaker.content,
            }}
            style={{
              color: getColor(state, 1),
            }}
          />
        </div>

        <BreakerLine
          fillColor={getColor(state, 1)}
          className="absolute bottom-0 left-0 z-10"
        />
        <div className="flex flex-col p-4 relative">
          <span
            className="w-full z-20 // text-left text-lg font-bold font-headline uppercase leading-normal break-word overflow-hidden"
            style={{
              color: getColor(state, 0),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[state.currentSlide].data.location.content.replace(
                  /\n/gi,
                  `<br/>`
                )
              ),
            }}
          />
          <span
            className="w-full z-20 // text-left text-lg font-bold font-headline uppercase leading-normal"
            style={{
              color: getColor(state, 0),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[state.currentSlide].data.date.content.replace(
                  /\n/gi,
                  `<br/>`
                )
              ),
            }}
          />
          <div className="absolute right-0 bottom-0 mb-4 mr-4 z-20">
            <div className="flex items-center flex-col">
              <LogoArrow fillColor={getColor(state, 0)} />
              <div
                className="uppercase font-headline text-center text-md leading-none mt-2 ml-2"
                style={{
                  color: getColor(state, 0),
                  transform: "rotate(-6deg)",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    state.slides[0].data.localBranch.content === ""
                      ? "\u00a0"
                      : state.slides[0].data.localBranch.content.replace(
                          /\n/gi,
                          `<br/>`
                        ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </TemplateWrapper>
  );
};

export default Template;
