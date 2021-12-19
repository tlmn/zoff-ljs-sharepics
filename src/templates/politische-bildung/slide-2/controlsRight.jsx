import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

const ControlsRight = () => {
  const currentSlide = 2;
  return (
    <>
      <Textarea
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={6}
        cols={30}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />

      <Textarea
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localGroup.content`}
        rows={2}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
