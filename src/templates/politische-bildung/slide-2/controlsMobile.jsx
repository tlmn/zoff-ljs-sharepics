import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import DownloadButton from "../../../components/inputs/downloadButton";
import TextScale from "../../../components/inputs/textScale";
import Textarea from "../../../components/inputs/textarea";
import ColorSelect from "../../../components/inputs/colorSelect";

const ControlsMobile = () => {
  const currentSlide = 2;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.body`}>
          <Textarea
            label="Text"
            propertyPath={`slides[${currentSlide}].data.body.content`}
            rows={5}
          />

          <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.localGroup`}>
          <Textarea
            label="Lokalgruppe (optional)"
            propertyPath={`slides[${currentSlide}].data.localGroup.content`}
            rows={2}
            cols={30}
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
          legend={`Text`}
          iconType={`text`}
          targetFieldset={`slides[${currentSlide}].data.body`}
        />

        <MenuItem
          legend={`Lokal&shy;gruppe`}
          iconType={`localGroup`}
          targetFieldset={`slides[${currentSlide}].data.localGroup`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;
