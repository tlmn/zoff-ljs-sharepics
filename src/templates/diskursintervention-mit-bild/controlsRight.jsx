import BgImage from "../../components/inputs/bgImage";
import CustomSelect from "../../components/inputs/customSelect";
import DownloadButton from "../../components/inputs/downloadButton";
import React from "react";
import TextScale from "../../components/inputs/textScale";
import Textarea from "../../components/inputs/textarea";
import { textPositions } from "../../config/vars";

const ControlsRight = () => {
  const currentSlide = 0;
  return (
    <>
      <BgImage currentSlide={currentSlide} />

      <Textarea
        label="Text"
        propertyPath={`slides[${currentSlide}].data.body.content`}
        rows={3}
      />

      <CustomSelect
        label="Textposition"
        propertyPath={`slides[${currentSlide}].data.body.textPosition`}
        availableValues={textPositions}
      />

      <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />

      <Textarea
        label="Lokalgruppe (optional)"
        propertyPath={`slides[${currentSlide}].data.localBranch.content`}
        rows={2}
      />

      <DownloadButton
        fileNamePath={`slides[${currentSlide}].data.body.content`}
      />
    </>
  );
};

export default ControlsRight;
