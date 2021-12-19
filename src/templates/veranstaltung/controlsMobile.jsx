import React from "react";
import MobileInputMenu from "../../components/mobileInputMenu";
import MenuItem from "../../components/menuItem";
import FieldSet from "../../components/fieldSet";
import Input from "../../components/inputs/input";
import Textarea from "../../components/inputs/textarea";
import TextScale from "../../components/inputs/textScale";

import ColorThemesSelect from "../../components/inputs/colorThemesSelect";

const ControlsMobile = () => {
  const currentSlide = 0;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorThemesSelect />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.type`}>
          <Input
            label="Kategorie"
            propertyPath={`slides[${currentSlide}].data.type.content`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.event`}>
          <Textarea
            label="Titel"
            propertyPath={`slides[${currentSlide}].data.event.content`}
            rows={6}
            cols={30}
          />
          <TextScale
            propertyPath={`slides[${currentSlide}].data.event.scale`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.speaker`}>
          <Input
            label="Referent:in"
            propertyPath={`slides[${currentSlide}].data.speaker.content`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.location`}>
          <Input
            label="Ort"
            propertyPath={`slides[${currentSlide}].data.location.content`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.date`}>
          <Input
            label="Datum / Zeit"
            propertyPath={`slides[${currentSlide}].data.date.content`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.localBranch`}>
          <Textarea
            label="Lokalgruppe (optional)"
            propertyPath={`slides[${currentSlide}].data.localBranch.content`}
            rows={2}
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
          legend={`Titel`}
          iconType={`title`}
          targetFieldset={`slides[${currentSlide}].data.type`}
        />
        <MenuItem
          legend={`Text`}
          iconType={`text`}
          targetFieldset={`slides[${currentSlide}].data.event`}
        />
        <MenuItem
          legend={`Referent:in`}
          iconType={`person`}
          targetFieldset={`slides[${currentSlide}].data.speaker`}
        />
        <MenuItem
          legend={`Ort`}
          iconType={`location`}
          targetFieldset={`slides[${currentSlide}].data.location`}
        />
        <MenuItem
          legend={`Zeit`}
          iconType={`date`}
          targetFieldset={`slides[${currentSlide}].data.date`}
        />
        <MenuItem
          legend={`Lokal&shy;gruppe`}
          iconType={`localGroup`}
          targetFieldset={`slides[${currentSlide}].data.localBranch`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;
