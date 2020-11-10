import BgImage from "../../../components/inputs/bgImage";
import React from "react";
import { html2image } from "../../../lib/lib";

export default ({ state, setState }) => (
  <>
    <BgImage state={state} setState={setState} currentSlide={1} />
    <label>Unterzeile</label>
    <input
      onChange={(e) =>
        setState({
          ...state,
          ...state.slides.splice(1, 1, {
            ...state.slides[1],
            data: {
              ...state.slides[1].data,
              author: { content: e.target.value },
            },
          }),
        })
      }
      value={state.slides[1].data.author.content}
    />
    <button
      className="btn btn-download"
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          `pass-the-mic-2-${state.slides[0].data.body.content}`
        )
      }
    >
      Download
    </button>
  </>
);
