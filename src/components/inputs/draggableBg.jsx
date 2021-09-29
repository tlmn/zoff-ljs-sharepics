import React, { useRef } from "react";

import Draggable from "react-draggable";
import useDataContext from "../../lib/useDataContext";
import { updateProperty } from "../../lib/lib";

const DraggableBG = ({ propertyPath }) => {
  const { setState } = useDataContext();
  const refDraggable = useRef(null);
  return (
    <Draggable
      onStart={(e, data) => {
        updateProperty({ setState }, propertyPath, {
          x: data.x,
          y: data.y,
        });
      }}
      onDrag={(e, data) => {
        updateProperty({ setState }, propertyPath, {
          x: data.x,
          y: data.y,
        });
      }}
      onStop={() => {
        refDraggable.current.style.transform = "translate(0px, 0px)";
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 w-full h-full z-50 cursor-move"
        ref={refDraggable}
      />
    </Draggable>
  );
};

export default DraggableBG;
