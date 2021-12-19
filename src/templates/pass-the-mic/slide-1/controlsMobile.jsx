import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import BgImage from "../../../components/inputs/bgImage";
import Input from "../../../components/inputs/input";
import DownloadButton from "../../../components/inputs/downloadButton";
import ColorSelect from "../../../components/inputs/colorSelect";

const ControlsMobile = () => {
  const currentSlide = 1;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.image`}>
          <BgImage currentSlide={currentSlide} />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.author`}>
          <Input
            label="Titel"
            propertyPath={`slides[${currentSlide}].data.author.content`}
          />
        </FieldSet>
      </div>

      <MobileInputMenu>
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
          legend={`Person`}
          iconType={`person`}
          targetFieldset={`slides[${currentSlide}].data.author`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;
