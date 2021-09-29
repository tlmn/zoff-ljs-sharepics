import React from "react";

import LogoText from "../../../assets/svg/logo-text";
import useDataContext from "../../../lib/useDataContext";
import { getColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const { state } = useDataContext();
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 1) }}
        ref={!thumbnail ? state.slides[2].ref : null}
      >
        <div className="p-4 flex flex-col h-full">
          <span
            className="flex-1 text-left font-headline uppercase italic leading-tight break-word overflow-hidden"
            style={{
              color: getColor(state, 0),
              fontSize: `${state.slides[2].data.body.scale.value}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: state.slides[2].data.body.content,
            }}
          />
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
        </div>
      </div>
    </div>
  );
};

export default Template;
