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
        label="Kategorie"
        propertyPath={`slides[${currentSlide}].data.type.content`}
      />

      <Textarea
        label="Titel"
        propertyPath={`slides[${currentSlide}].data.event.content`}
        rows={6}
        cols={30}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.event.scale`} />

      <Input
        label="Referent:in"
        propertyPath={`slides[${currentSlide}].data.speaker.content`}
      />

      <Input
        label="Ort"
        propertyPath={`slides[${currentSlide}].data.location.content`}
      />

      <Input
        label="Datum / Zeit"
        propertyPath={`slides[${currentSlide}].data.date.content`}
      />

      <Textarea
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.event.content`}
      />
    </>
  );
};

export default ControlsRight;
