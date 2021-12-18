import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import BgImage from "../../../components/inputs/bgImage";
import Input from "../../../components/inputs/input";
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

        <FieldSet name={`slides[${currentSlide}].data.image`}>
          <BgImage currentSlide={currentSlide} />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.statement`}>
          <Input
            label="Titel"
            propertyPath={`slides[${currentSlide}].data.statement.content`}
          />
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
          legend={`Titel`}
          iconType={`title`}
          targetFieldset={`slides[${currentSlide}].data.statement`}
        />
        <MenuItem
          legend={`Bild`}
          iconType={`image`}
          targetFieldset={`slides[${currentSlide}].data.image`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;
