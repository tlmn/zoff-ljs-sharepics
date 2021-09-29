import DownloadButton from "../../../components/inputs/downloadButton";
import Input from "../../../components/inputs/input";
import React from "react";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <Input propertyPath="slides[0].data.category.content" label="Headline" />

      <Textarea
        propertyPath="slides[0].data.body.content"
        label="Text"
        rows={6}
        cols={30}
      />

      <TextScale propertyPath="slides[0].data.body.scale" />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.statement.content`}
      />
    </>
  );
};

export default ControlsRight;
