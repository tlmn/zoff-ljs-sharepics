import React from "react";
import MobileInputMenu from "../../components/mobileInputMenu";
import MenuItem from "../../components/menuItem";
import FieldSet from "../../components/fieldSet";
import Input from "../../components/inputs/input";
import Textarea from "../../components/inputs/textarea";
import TextScale from "../../components/inputs/textScale";
import ColorSelect from "../../components/inputs/colorSelect";
import BGImage from "../../components/inputs/bgImage";

const ControlsMobile = () => {
  const currentSlide = 0;
  return (
    <div className="block md:hidden fixed bottom-0 w-full left-0 z-20">
      <div className="flex w-full justify-center">
        <FieldSet name={`colorTheme`}>
          <ColorSelect />
        </FieldSet>

        <FieldSet name="slides[0].data.image">
          <BGImage currentSlide={currentSlide} />
        </FieldSet>

        <FieldSet name="slides[0].data.author">
          <Input
            propertyPath="slides[0].data.author.content"
            label="Autor:in"
          />
        </FieldSet>

        <FieldSet name="slides[0].data.category">
          <Input
            propertyPath="slides[0].data.category.content"
            label="Headline"
          />
        </FieldSet>

        <FieldSet name="slides[0].data.body">
          <Textarea
            propertyPath="slides[0].data.body.content"
            label="Text"
            rows={4}
            cols={30}
          />
          <TextScale propertyPath="slides[0].data.body.scale" />
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
          legend={`Autor:in`}
          iconType={`person`}
          targetFieldset={`slides[${currentSlide}].data.author`}
        />
        <MenuItem
          legend={`Headline`}
          iconType={`title`}
          targetFieldset={`slides[${currentSlide}].data.category`}
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
