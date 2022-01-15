import { cloneDeepWith, get, set } from "lodash";
import { colorThemes, colors } from "../config/vars";

import emojiRegex from "emoji-regex";
import { saveAs } from "file-saver";
import slugify from "react-slugify";
import axios from "axios";
import { toSvg } from "html-to-image";

export const getScreenshot = async (state, setState, fileName = "ljs") => {
  setState((prev) => ({ ...prev, templateScale: false }));
  toSvg(state.slides[state.currentSlide].ref.current, {
    canvasWidth: state.format.width,
    canvasHeight: state.format.height,
  }).then(async (blob) => {
    await axios({
      method: "post",
      url: process.env.GATSBY_API_URL,
      headers: {
        "Content-Type": "text/plain",
      },
      data: `<img src="${blob}" style="padding:0; margin:0; position: absolute; top: 0; left: 0;" />`,
    })
      .then(({ data }) => {
        const blob = new Blob([data], { type: "image/png" });
        saveAs(blob, `sharepic-${slugify(fileName)}.png`);
      })
      .catch((error) => console.log(error));
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

export const updateProperty = (setState, path, newValue) => {
  setState((prev) => {
    let prevCloned = cloneDeepWith(prev);
    set(prevCloned, path, newValue);
    return prevCloned;
  });
};

export const getProperty = (state, path) => {
  return get(state, path);
};

export const getScrollRight = (ref) => {
  return (
    ref?.current?.scrollWidth -
    (ref?.current?.clientWidth + ref?.current?.scrollLeft)
  );
};

export const getScrollLeft = (ref) => {
  return ref?.current?.scrollLeft;
};

export const mapToRange = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
