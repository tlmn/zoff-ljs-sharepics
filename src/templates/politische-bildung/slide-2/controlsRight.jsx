import DownloadButton from "../../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

export default () => {
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
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
        cols={30}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};
