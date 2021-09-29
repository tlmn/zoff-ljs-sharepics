import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <Input
        label="Titel"
        propertyPath={`slides[${currentSlide}].data.category.content`}
      />

      <Textarea
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={3}
        cols={30}
      />

      <TextScale
        propertyPath={`slides[${currentSlide}].data.body.scale`}
      />

      <Textarea
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={3}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
