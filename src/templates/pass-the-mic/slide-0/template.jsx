import { formatEmojis, getPrimaryColor } from "../../../lib/lib";

import React from "react";

export default ({ state, thumbnail = false }) => (
  <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
    <div
      className={`bg-white template ${
        state.templateScale && !thumbnail ? `template-scale` : `relative`
      }`}
      ref={!thumbnail ? state.slides[0].ref : null}
    >
      <div className="p-4 flex flex-col">
        <span
          className="mb-3 text-center text-xl font-bold font-headline uppercase"
          dangerouslySetInnerHTML={{
            __html:
              state.slides[0].data.category.content === ""
                ? "\u00a0"
                : state.slides[0].data.category.content,
          }}
        />
        <div className="flex-1 flex">
          <span
            className="block // w-full // self-center // text-left text-black font-bold font-headline uppercase leading-none"
            style={{
              fontSize: `${(state.slides[0].data.body.scale / 100) * 140}px`,
            }}
            dangerouslySetInnerHTML={{
              __html: formatEmojis(
                state.slides[0].data.body.content
                  .replace(
                    /\{/gi,
                    `<div class="stripeContainer"><div class="stripeText">`
                  )
                  .replace(
                    /\}/gi,
                    `</div><div class="stripeElement" style="background-color: ${getPrimaryColor(
                      state,
                      1
                    )}; transform:rotate(${
                      Math.random() * 3 - 1.5
                    }deg);"></div></div>`
                  )
                  .replace(/\n/gi, `<br/>`)
              ),
            }}
          />
        </div>
      </div>
    </div>
  </div>
);
