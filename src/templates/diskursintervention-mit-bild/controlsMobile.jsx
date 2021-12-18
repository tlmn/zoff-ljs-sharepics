import React from "react";
import MobileInputMenu from "../../components/mobileInputMenu";
import MenuItem from "../../components/menuItem";
import FieldSet from "../../components/fieldSet";
import CustomSelect from "../../components/inputs/customSelect";
import BgImage from "../../components/inputs/bgImage";
import Textarea from "../../components/inputs/textarea";
import TextScale from "../../components/inputs/textScale";
import DownloadButton from "../../components/inputs/downloadButton";
import ColorThemesSelect from "../../components/inputs/colorThemesSelect";
import { textPositions } from "../../config/vars";

const ControlsMobile = () => {
  const currentSlide = 0;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorThemesSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.body`}>
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
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.image`}>
          <BgImage currentSlide={currentSlide} />
        </FieldSet>
      </div>

      <MobileInputMenu>
        <DownloadButton className="m-1" />
        <MenuItem
          legend={`Farbe`}
          iconType={`color`}
          targetFieldset={`colorTheme`}
        />
        <MenuItem
          legend={`Bild`}
          iconType={`image`}
          targetFieldset={`slides[${currentSlide}].data.image`}
        />
        <MenuItem
          legend={`Text`}
          iconType={`text`}
          targetFieldset={`slides[${currentSlide}].data.body`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;
