import clsx from "clsx";
import React from "react";
import { updateProperty } from "../lib/lib";
import useDataContext from "../lib/useDataContext";
import CloseIcon from "../assets/svg/inputIcons/close";

const FieldSet = ({ children, legend, name }) => {
  const {
    state: { activeFieldset },
    setState,
  } = useDataContext();

  return (
    <fieldset
      className={clsx(
        "relative m-1 bg-lightGray p-2 rounded-lg mx-1 md:m-0 md:bg-transparent md:p-0 md:rounded-none max-w-lg sm:mx-auto",
        activeFieldset === name ? "block" : "hidden md:block"
      )}
    >
      {legend && <legend dangerouslySetInnerHTML={{ __html: legend }} />}
      {children}
      <button
        className="absolute top-0 right-0"
        style={{ transform: "translateX(10%) translateY(-10%)" }}
        onClick={() => setState((prev) => ({ ...prev, activeFieldset: "" }))}
      >
        <CloseIcon />
      </button>
    </fieldset>
  );
};

export default FieldSet;