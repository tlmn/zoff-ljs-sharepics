import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

const ControlsRight = () => {
  const currentSlide = 2;
  return (
    <>
      <Textarea
        rows={6}
        label="text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
      />

      <TextScale
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        rows={2}
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
