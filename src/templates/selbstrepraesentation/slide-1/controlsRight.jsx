import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";

const ControlsRight = () => {
  const currentSlide = 1;
  return (
    <>
      <BgImage currentSlide={currentSlide} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
