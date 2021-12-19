import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import Textarea from "../../../components/inputs/textarea";
import TextScale from "../../../components/inputs/textScale";
import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";

const ControlsMobile = () => {
  const currentSlide = 2;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorThemesSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.body`}>
          <Textarea
            rows={6}
            label="text"
            propertyPath={`slides[${currentSlide}].data.body.content`}
          />
          <TextScale propertyPath={`slides[${currentSlide}].data.body.scale`} />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.localGroup`}>
          <Textarea
            rows={2}
            label="Lokalgruppe (optional)"
            propertyPath={`slides[${currentSlide}].data.localGroup.content`}
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
