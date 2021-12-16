import clsx from "clsx";
import React from "react";
import { getProperty, html2image } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const DownloadButton = ({
  fileNamePath,
  buttonText = "Download",
  className,
}) => {
  const { state, setState } = useDataContext();
  return (
    <button
      className={clsx("btn btn-download", className)}
      onClick={() =>
        html2image(
          {
            state,
            setState,
          },
          getProperty({ state }, fileNamePath)
        )
      }
    >
      {buttonText}
    </button>
  );
};

export default DownloadButton;
