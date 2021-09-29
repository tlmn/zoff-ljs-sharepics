import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";
import TextScale from "../../../components/inputs/textScale";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <Input
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
