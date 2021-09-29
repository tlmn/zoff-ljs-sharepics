import React, { useContext } from "react";
import { formatEmojis, getColor } from "../../../lib/lib";

import LogoText from "../../../assets/svg/logo-text";
import TemplateContext from "../../../components/templateContext";

const Template = ({ thumbnail = false }) => {
  const [state] = useContext(TemplateContext);
  return (
    <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
      <div
        className={`p-4 // flex flex-col absolute // border-1 // template ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{ backgroundColor: getColor(state, 1) }}
        ref={!thumbnail ? state.slides[2].ref : null}
      >
        <div className="flex h-full">
          <span
            className="block flex-1 // w-full // self-start // text-left font-bold font-headline leading-tight break-word overflow-hidden"
            style={{
              fontSize: `${state.slides[2].data.body.scale.value}px`,
              color: getColor(state, 0),
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[2].data.body.content.replace(/\n/gi, `<br/>`)
              ),
            }}
          />
        </div>
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
  );
};

export default Template;
