import React from "react";
import useDataContext from "../lib/useDataContext";

const ThumbnailButton = ({ children, currentSlide }) => {
  const { setState } = useDataContext();
  return (
    <button
      onClick={() =>
        setState((prev) => ({ ...prev, currentSlide: currentSlide }))
      }
      className="is-thumbnail hover:opacity-75"
      key={currentSlide}
    >
      {children}
    </button>
  );
};

export default ThumbnailButton;
