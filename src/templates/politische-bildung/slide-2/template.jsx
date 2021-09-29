import React from "react";

import LogoText from "../../../assets/svg/logo-text";
import useDataContext from "../../../lib/useDataContext";
import { getPrimaryColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const currentSlide = 2;
  const { state } = useDataContext();
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getPrimaryColor(state) }}
        ref={!thumbnail ? state.slides[currentSlide].ref : null}
      >
        <div className="p-4 flex flex-col h-full">
          <span
            className="flex-1 text-left font-body font-semibold text-black break-word overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: state.slides[currentSlide].data.body.content,
            }}
            style={{
              fontSize: `${state.slides[currentSlide].data.body.scale.value}px`,
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
                  state.slides[currentSlide].data.localBranch.content === ""
                    ? "\u00a0"
                    : state.slides[
                        currentSlide
                      ].data.localBranch.content.replace(/\n/gi, `<br/>`),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
