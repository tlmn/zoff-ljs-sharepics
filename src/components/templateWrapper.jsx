import React, { useRef, useEffect } from "react";
import useWindowResize from "../lib/useWindowResize";
import useDataContext from "../lib/useDataContext";
import { getColor, getPrimaryColor } from "../lib/lib";
import clsx from "clsx";

const TemplateWrapper = ({
  children,
  className,
  isThumbnail = false,
  bgColor = 0,
}) => {
  const {
    state: { currentSlide, scaleFactor, templateScale, primaryColor },
    state,
    setState,
  } = useDataContext();
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
        className={clsx(
          "flex flex-col absolute border-1 template origin-top-left",
          templateScale ? "" : "relative",
          className
        )}
        style={{
          backgroundColor:
            primaryColor === ""
              ? getColor(state, bgColor)
              : getPrimaryColor(state),
          transformOrigin: "0 0",
          transform:
            templateScale && !isThumbnail ? `scale(${scaleFactor})` : ``,
        }}
        ref={!isThumbnail ? state.slides[currentSlide].ref : null}
      >
        {children}
      </div>
    </div>
  );
};

export default TemplateWrapper;
