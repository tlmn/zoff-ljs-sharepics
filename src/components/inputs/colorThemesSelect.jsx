import React from "react";
import {
  colorThemes,
  corporateThemes,
  secondaryThemes,
} from "../../config/vars";

import useDataContext from "../../lib/useDataContext";

const ColorThemesSelect = () => {
  const { state, setState } = useDataContext();
  return (
    <>
      <div className="uppercase font-headline italic text-black md:text-white">
        Corporate Design
      </div>
      <div className="grid-cols-2 grid">
        {corporateThemes.map((colorTheme) => (
          <div className="col-span-1" key={colorTheme}>
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
              onChange={({ target: { value } }) => {
                setState((prev) => ({ ...prev, colorTheme: value }));
              }}
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
                      )[0].label && `border-white`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
      <div className="uppercase font-headline italic text-black md:text-white">
        Geht auch...
      </div>
      <div className="grid-cols-4 grid">
        {secondaryThemes.map((colorTheme) => (
          <div className="col-span-1" key={colorTheme}>
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
              onChange={({ target: { value } }) => {
                setState((prev) => ({ ...prev, colorTheme: value }));
              }}
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
                      )[0].label && `border-white`
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
