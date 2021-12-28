import DownloadButton from "../../components/inputs/downloadButton";
import Input from "../../components/inputs/input";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";
import CustomSelect from "../../components/inputs/customSelect";
import { textPositions } from "../../config/vars";
import BGImage from "../../components/inputs/bgImage";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <BGImage currentSlide={currentSlide} />

      <Input propertyPath="slides[0].data.author.content" label="Autor:in" />

      <Input propertyPath="slides[0].data.category.content" label="Headline" />

      <Textarea
        propertyPath="slides[0].data.body.content"
        label="Text"
        rows={6}
        cols={30}
      />

      <TextScale propertyPath="slides[0].data.body.scale" />

      <CustomSelect
        label="Textposition"
        propertyPath={`slides[${currentSlide}].data.body.textPosition`}
        availableValues={textPositions}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
