import { cloneDeepWith, get, set } from "lodash";
import { colorThemes, colors } from "../config/vars";

import JSZip from "jszip";
import emojiRegex from "emoji-regex";
import htmlToImage from "html-to-image";
import { saveAs } from "file-saver";
import slugify from "react-slugify";

export const html2image = async ({ state, setState }, fileName = "solid") => {
  setState({ ...state, templateScale: false });
  htmlToImage
    .toJpeg(state.slides[state.currentSlide].ref.current, {
      quality: 1,
      width: 1080,
      height: 1080,
    })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `sharepic-${slugify(fileName.substring(0, 20))}.jpg`;
      link.href = dataUrl;
      link.click();
      setState({ ...state, templateScale: true });
    });
};

export const downloadZip = async ({ state, setState }) => {
  setState({ ...state, templateScale: false });

  var zip = new JSZip();

  await state.slides.map((slide, index) => {
    htmlToImage
      .toJpeg(slide.ref.current, {
        quality: 1,
        width: 1080,
        height: 1080,
      })
      .then(function (blob) {
        zip.file(`${index}.jpg`, blob);
      });
    return true;
  });

  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "sharepics.zip");
  });

  setState({ ...state, templateScale: true });
  return true;
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

export const updateProperty = ({ state, setState }, path, newValue) => {
  let prevState = cloneDeepWith(state);
  set(prevState, path, newValue);
  setState(prevState);
};

export const getProperty = ({ state }, path) => {
  return get(state, path);
};
