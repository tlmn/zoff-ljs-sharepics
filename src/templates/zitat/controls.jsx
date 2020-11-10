import ColorThemesSelect from "../../components/inputs/colorThemesSelect";
import React from "react";
import { html2image } from "../../lib/lib";

export default ({ state, setState }) => {
  switch (state.currentSlide) {
    default:
      return (
        <div className="p-1 bg-turquoise">
          <ColorThemesSelect state={state} setState={setState} />

          <textarea
            onChange={(e) =>
              setState({
                ...state,
                ...state.slides.splice(state.currentSlide, 1, {
                  ...state.slides[state.currentSlide],
                  data: {
                    ...state.slides[state.currentSlide].data,
                    body: {
                      ...state.slides[state.currentSlide].data.body,
                      content: e.target.value,
                    },
                  },
                }),
              })
            }
            value={state.slides[state.currentSlide].data.body.content}
            className="border-1"
            rows={6}
            cols={30}
          />
          <input
            type="range"
            id="bodyTextScale"
            name="bodyTextScale"
            min={state.slides[state.currentSlide].data.body.scaleRange[0]}
            max={state.slides[state.currentSlide].data.body.scaleRange[1]}
            value={state.slides[state.currentSlide].data.body.scale}
            onChange={(e) =>
              setState({
                ...state,
                ...state.slides.splice(state.currentSlide, 1, {
                  ...state.slides[state.currentSlide],
                  data: {
                    ...state.slides[state.currentSlide].data,
                    body: {
                      ...state.slides[state.currentSlide].data.body,
                      scale: e.target.value,
                    },
                  },
                }),
              })
            }
          />
          <input
            onChange={(e) =>
              setState({
                ...state,
                ...state.slides.splice(state.currentSlide, 1, {
                  ...state.slides[state.currentSlide],
                  data: {
                    ...state.slides[state.currentSlide].data,
                    author: {
                      content: e.target.value,
                    },
                  },
                }),
              })
            }
            value={state.slides[state.currentSlide].data.author.content}
          />
          <button
            className="btn btn-download"
            onClick={() =>
              html2image(
                {
                  state,
                  setState,
                },
                `zitat-${state.slides[0].data.body.content}`
              )
            }
          >
            Download
          </button>
        </div>
      );
  }
};
