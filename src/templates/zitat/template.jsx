import React, { useEffect, useRef } from "react";
import { formatEmojis, getColor } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";
import useWindowResize from "../../lib/useWindowResize";

const Template = () => {
  const { state, setState } = useDataContext();
  const ref = useRef(null);
  const { width } = useWindowResize();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      scaleFactor: ref?.current?.clientWidth / 1080,
    }));
  }, [ref, width]);

  const { scaleFactor } = state;
  return (
    <div className="relative" ref={ref}>
      <div
        className={`p-4 // flex flex-col absolute // border-1 // template ${
          state.templateScale ? `` : `relative`
        }`}
        style={{
          backgroundColor: getColor(state, 0),
          transformOrigin: "0 0",
          transform: state.templateScale ? `scale(${scaleFactor})` : ``,
        }}
        ref={state.slides[state.currentSlide].ref}
      >
        <div className="flex">
          <span
            className="block // w-full // self-center // text-left italic font-bold font-headline leading-none break-word overflow-hidden"
            style={{
              fontSize: `${
                state.slides[state.currentSlide].data.body.scale.value
              }px`,
              color: getColor(state, 1),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[state.currentSlide].data.body.content.replace(
                  /\n/gi,
                  `<br/>`
                )
              ),
            }}
          />
        </div>
        <div
          className="mt-3 flex-1 text-left // font-headline text-lg italic font-bold uppercase break-word overflow-hidden"
          dangerouslySetInnerHTML={{
            __html:
              state.slides[state.currentSlide].data.author.content === ""
                ? "\u00a0"
                : state.slides[state.currentSlide].data.author.content,
          }}
          style={{
            color: getColor(state, 1),
          }}
        />
      </div>
    </div>
  );
};

export default Template;
