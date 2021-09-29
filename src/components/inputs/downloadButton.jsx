import React from "react";
import { getProperty, html2image } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const DownloadButton = ({ fileNamePath, buttonText = "Download" }) => {
  const { state, setState } = useDataContext();
  return (
    <button
      className="btn btn-download"
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
