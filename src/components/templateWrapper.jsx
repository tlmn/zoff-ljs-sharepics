import React, { useRef, useEffect } from "react";
import useWindowResize from "../lib/useWindowResize";
import useDataContext from "../lib/useDataContext";
import { getColor } from "../lib/lib";
import clsx from "clsx";

const TemplateWrapper = ({
  children,
  className,
  isThumbnail = false,
  colorThemeColorOrder = 0,
  bgColor = "#fff",
}) => {
  const {
    state: { ref, scaleFactor, templateScale, colorTheme },
    state,
    setState,
  } = useDataContext();
  const templateRef = useRef(null);
  const { width } = useWindowResize();

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      scaleFactor: templateRef?.current?.clientWidth / 1080,
    }));
  }, [templateRef, width, setState]);

  return (
    <div className="relative" ref={templateRef}>
      <div
        className={clsx(
          "flex flex-col absolute border-1 template origin-top-left",
          templateScale ? "" : "relative",
          className
        )}
        style={{
          backgroundColor:
            typeof colorTheme !== "undefined"
              ? getColor(state, colorThemeColorOrder)
              : bgColor,
          transformOrigin: "0 0",
          transform:
            templateScale && !isThumbnail ? `scale(${scaleFactor})` : ``,
        }}
        ref={!isThumbnail ? ref : null}
      >
        {children}
      </div>
    </div>
  );
};

export default TemplateWrapper;
