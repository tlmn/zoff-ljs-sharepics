import React, { useRef, useEffect } from "react";

import DraggableBg from "../../../components/inputs/draggableBg";
import useDataContext from "../../../lib/useDataContext";
import useWindowResize from "../../../lib/useWindowResize";

import { getColor } from "../../../lib/lib";

const Template = ({ thumbnail = false }) => {
  const { state, setState } = useDataContext();
  const { scaleFactor } = state;
  const ref = useRef(null);
  const { width } = useWindowResize();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      scaleFactor: ref?.current?.clientWidth / 1080,
    }));
  }, [ref, width, setState]);
  return (
    <div className="relative" ref={ref}>
      <div
        className={`template origin-top-left ${
          state.templateScale && !thumbnail ? `template-scale` : `relative`
        }`}
        style={{
          backgroundColor: getColor(state, 0),
          transform:
            state.templateScale && !thumbnail ? `scale(${scaleFactor})` : ``,
        }}
        ref={!thumbnail ? state.slides[1].ref : null}
      >
        {!thumbnail && (
          <DraggableBg propertyPath="slides[1].data.image.position" />
        )}

        <div
          className="absolute // top-0 left-0 right-0 // z-10 // w-full h-full"
          style={{
            backgroundImage: `url(${
              state.slides[1].data.image.url !== null
                ? state.slides[1].data.image.url
                : "/assets/images/defaultImages/selbstrepraesentation-1.jpg"
            })`,
            height: "100%",
            filter: "grayscale(100%)",
            backgroundPositionX: `${state.slides[1].data.image.position.x}px`,
            backgroundPositionY: `${state.slides[1].data.image.position.y}px`,
            backgroundSize: `${state.slides[1].data.image.scale * 10 + 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Template;
