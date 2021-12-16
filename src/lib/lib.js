import { cloneDeepWith, get, set } from "lodash";
import { colorThemes, colors } from "../config/vars";

import emojiRegex from "emoji-regex";
import { toJpeg } from "html-to-image";
import { saveAs } from "file-saver";
import slugify from "react-slugify";

export const html2image = async ({ state, setState }, fileName = "solid") => {
  setState((prev) => ({ ...prev, templateScale: false }));
  toJpeg(state.slides[state.currentSlide].ref.current, {
    quality: 1,
    canvasWidth: 1080,
    canvasHeight: 1080,
  }).then(function (blob) {
    saveAs(blob, `sharepic-${slugify(fileName.substring)}`);
    setState((prev) => ({ ...prev, templateScale: true }));
  });
};

export const formatEmojis = (text = "") => {
  return text.replace(
    emojiRegex(),
    (m) => `<span class="not-italic" role="img">${m}</span>`
  );
};

export const getColor = (currentState, order) => {
  return colors.filter(
    (color) =>
      color.name ===
      colorThemes.filter(
        (colorTheme) => colorTheme.label === currentState.colorTheme
      )[0].colors[order]
  )[0].value;
};

export const getPrimaryColor = (currentState) => {
  return colors.filter((color) => color.name === currentState.primaryColor)[0]
    .value;
};

export const updateProperty = ({ setState }, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, newValue);
    return prevCloned;
  });
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};
