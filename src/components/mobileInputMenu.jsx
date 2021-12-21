import React, { useEffect, useRef, useState } from "react";
import DownloadButton from "../components/inputs/downloadButton";
import { getScrollRight, mapToRange } from "../lib/lib";

const MobileInputMenu = ({ children }) => {
  const ref = useRef(null);
  const [scrollRight, setScrollRight] = useState(0);

  return (
    <>
      <div className="bg-black flex justify-center relative">
        <div
          className="mx-auto flex overflow-x-scroll gap-1 px-1"
          ref={ref}
          onScroll={() => setScrollRight(getScrollRight(ref))}
        >
          <div
            className="absolute top-0 left-0 h-full"
            style={{
              width: "15px",
              background: "linear-gradient(to right, #000, rgba(0, 0, 0, 0))",
              opacity: mapToRange(ref?.current?.scrollLeft, 0, 40, 0, 0.7),
            }}
          />
          <DownloadButton className="m-1" />
          {children}
          <div
            className="absolute top-0 right-0 h-full"
            style={{
              width: "15px",
              background: "linear-gradient(to left, #000, rgba(0, 0, 0, 0))",
              opacity: mapToRange(scrollRight, 40, 0, 0.7, 0),
            }}
          />
        </div>
      </div>
    </>
  );
};
export default MobileInputMenu;
