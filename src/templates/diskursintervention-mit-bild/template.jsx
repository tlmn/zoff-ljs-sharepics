import React from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import DraggableBg from "../../components/inputs/draggableBg";
import LogoArrow from "../../assets/svg/logo-arrow";
import useDataContext from "../../lib/useDataContext";
import TemplateWrapper from "../../components/templateWrapper";

const Template = () => {
  const { state } = useDataContext();

  return (
    <TemplateWrapper>
      <div
        className="relative h-full"
        style={{
          backgroundColor: getColor(state, 0),
        }}
        ref={state.slides[state.currentSlide].ref}
      >
        <DraggableBg propertyPath="slides[0].data.image.position" />

        <div
          className="absolute top-0 left-0 right-0 z-20 w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(196, 196, 196, 0) 69.27%)",
            mixBlendMode: "multiply",
            transform: "rotate(180deg)",
          }}
        />
        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.slides[0].data.image.url !== null
                ? state.slides[0].data.image.url
                : "/assets/images/defaultImages/diskursintervention-mit-bild-1.jpg"
            })`,
            height: "100%",
            filter: "grayscale(100%)",
            backgroundPositionX: `${state.slides[0].data.image.position.x}px`,
            backgroundPositionY: `${state.slides[0].data.image.position.y}px`,
            backgroundSize: `${state.slides[0].data.image.scale * 10 + 100}%`,
          }}
        />
        <div className="p-4 // relative // h-full w-full // flex flex-col break-all  // border-1 // z-20 ">
          <div className="flex-1 flex">
            <div
              className={`h-full w-full flex items-${state.slides[0].data.body.textPosition} justify-start`}
            >
              <div
                className="stripeContainer mb-4"
                style={{ transform: "rotate(-6deg)" }}
              >
                <span
                  className="self-center // text-center font-bold italic font-headline leading-none // stripeText"
                  style={{
                    fontSize: `${
                      state.slides[state.currentSlide].data.body.scale.value
                    }px`,
                    color: getColor(state, 1),
                    backgroundColor: getColor(state, 0),
                    display: "initial",
                    lineHeight: 1.5,
                    padding: "0 1rem",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: formatEmojis(
                      state.slides[
                        state.currentSlide
                      ].data.body.content.replace(/\n/gi, `<br/>`)
                    ),
                  }}
                />
              </div>
            </div>
          </div>
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
