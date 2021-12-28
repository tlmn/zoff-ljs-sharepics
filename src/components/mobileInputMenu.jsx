import React, { useEffect, useRef, useState } from "react";
import DownloadButton from "../components/inputs/downloadButton";
import ArrowIcon from "../assets/svg/inputIcons/arrow";
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
              width: "25px",
              background: "linear-gradient(to left, #000, rgba(0, 0, 0, 0))",
              opacity: mapToRange(scrollRight, 40, 0, 1, 0),
            }}
          />
          <div
            className="absolute top-0 bottom-0 max-w-min max-h-max right-[0.25rem] flex items-center rotate-180 shadow-sm"
            style={{
              opacity: mapToRange(scrollRight, 40, 0, 0.7, 0),
            }}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileInputMenu;
