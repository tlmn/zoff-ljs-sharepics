import React, { useRef } from "react";

import Draggable from "react-draggable";
import { getColor } from "../../../lib/lib";

export default ({ state, setState, thumbnail = false }) => {
  const draggableRef = useRef(null);
  switch (state.currentSlide) {
    default:
      return (
        <div className={`${!thumbnail ? `col-span-6` : ``} relative`}>
          <div
            className={`template ${
              state.templateScale && !thumbnail ? `template-scale` : `relative`
            }`}
            style={{ backgroundColor: getColor(state, 0) }}
            ref={!thumbnail ? state.slides[1].ref : null}
          >
            <Draggable
              onDrag={(e, data) => {
                setState({
                  ...state,
                  ...state.slides.splice(1, 1, {
                    ...state.slides[1],
                    data: {
                      ...state.slides[1].data,
                      image: {
                        ...state.slides[1].data.image,
                        position: { x: data.x, y: data.y },
                      },
                    },
                  }),
                });
              }}
              onStop={(e, data) => {
                draggableRef.current.style.transform = "translate(0px, 0px)";
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 w-full h-full z-0 cursor-pointer"
                draggable
                ref={draggableRef}
              />
            </Draggable>
            <div
              className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
              style={{
                backgroundImage: `url(${
                  state.slides[1].data.image.url !== null
                    ? state.slides[1].data.image.url
                    : "/assets/images/olaf-scholz.jpg"
                })`,
                height: "100%",
                backgroundPositionX: `${state.slides[1].data.image.position.x}px`,
                backgroundPositionY: `${state.slides[1].data.image.position.y}px`,
                backgroundSize: `${
                  state.slides[1].data.image.scale * 10 + 100
                }%`,
              }}
            />
          </div>
        </div>
      );
  }
};