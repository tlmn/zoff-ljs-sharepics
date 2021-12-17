import React from "react";
import MobileInputMenu from "../../../components/mobileInputMenu";
import MenuItem from "../../../components/menuItem";
import FieldSet from "../../../components/fieldSet";
import Input from "../../../components/inputs/input";
import Textarea from "../../../components/inputs/textarea";
import TextScale from "../../../components/inputs/textScale";
import DownloadButton from "../../../components/inputs/downloadButton";
import ColorThemesSelect from "../../../components/inputs/colorThemesSelect";

const ControlsMobile = () => {
  const currentSlide = 1;
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
            rows={5}
            cols={60}
          />
          <TextScale
            propertyPath={`slides[[${currentSlide}].data.body.scale`}
          />
        </FieldSet>

        <FieldSet name={`slides[${currentSlide}].data.author`}>
          <Input
            label="Autor:in"
            propertyPath={`slides[${currentSlide}].data.author.content`}
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
          legend={`Text`}
          iconType={`text`}
          targetFieldset={`slides[${currentSlide}].data.body`}
        />
        <MenuItem
          legend={`Autor:in`}
          iconType={`person`}
          targetFieldset={`slides[${currentSlide}].data.author`}
        />
      </MobileInputMenu>
    </div>
  );
};

export default ControlsMobile;