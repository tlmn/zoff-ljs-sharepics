import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <Textarea
        label="Zitattext"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={3}
        cols={30}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />

      <Input
        label="Autor:in"
        propertyPath={`slides[${currentSlide}].data.author.content`}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
