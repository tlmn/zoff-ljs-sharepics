import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import Input from "../../../components/inputs/input";
import TextScale from "../../../components/inputs/textScale";
import DownloadButton from "../../../components/inputs/downloadButton";
import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";

const ControlsMobile = () => {
  const currentSlide = 0;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorThemesSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.body`}>
          <Input
            label="Titel"
            propertyPath={`slides[${currentSlide}].data.body.content`}
          />
          <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />
        </FieldSet>
      </div>

      <MobileInputMenu>
        <MenuItem
          legend={`Farbe`}
          iconType={`color`}
          targetFieldset={`colorTheme`}
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
