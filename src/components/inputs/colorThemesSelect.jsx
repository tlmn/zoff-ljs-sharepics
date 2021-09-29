import React, { useContext } from "react";
import {
  colorThemes,
  corporateThemes,
  secondaryThemes,
} from "../../config/vars";

import TemplateContext from "../templateContext";

const ColorThemesSelect = () => {
  const [state, setState] = useContext(TemplateContext);
  return (
    <>
      <div className="uppercase font-headline italic text-white">
        Corporate Design
      </div>
      <div className="grid-cols-2 grid">
        {corporateThemes.map((colorTheme) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .label
              }
              name="colorTheme"
              id={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .name
              }
              onChange={(e) =>
                setState((prev) => ({ ...prev, colorTheme: e.target.value }))
              }
            />
            <label
              htmlFor={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .name
              }
              className="label__radio"
            >
              <div className="px-2">
                <img
                  alt={`Farbschema Vorschau für ${
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .name
                  }`}
                  src={`/assets/images/colorThemes/${
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .label
                  }.png`}
                  className={`colorThumbnail ${
                    state.colorTheme ===
                      colorThemes.filter(
                        (theme) => theme.label === colorTheme
                      )[0].label && `border-lightGray`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="uppercase font-headline italic text-white">
        Geht auch...
      </div>
      <div className="grid-cols-4 grid">
        {secondaryThemes.map((colorTheme) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .label
              }
              name="colorTheme"
              id={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .name
              }
              onChange={(e) =>
                setState((prev) => ({ ...prev, colorTheme: e.target.value }))
              }
            />
            <label
              htmlFor={
                colorThemes.filter((theme) => theme.label === colorTheme)[0]
                  .name
              }
              className="label__radio"
            >
              <div className="px-1">
                <img
                  alt={`Farbschema Vorschau für ${
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .name
                  }`}
                  src={`/assets/images/colorThemes/${
                    colorThemes.filter((theme) => theme.label === colorTheme)[0]
                      .label
                  }.png`}
                  className={`colorThumbnail ${
                    state.colorTheme ===
                      colorThemes.filter(
                        (theme) => theme.label === colorTheme
                      )[0].label && `border-lightGray`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorThemesSelect;
