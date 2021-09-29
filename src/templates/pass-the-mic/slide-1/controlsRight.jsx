import BgImage from "../../../components/inputs/bgImage";
import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";

const ControlsRight = () => {
  const currentSlide = 1;
  return (
    <>
      <BgImage currentSlide={currentSlide} />

      <Input
        label="Unterzeile"
        propertyPath={`slides[${currentSlide}].data.author.content`}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.author.content`}
      />
    </>
  );
};

export default ControlsRight;
