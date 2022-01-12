import { IMAGES_KEY } from "../constants";

const localStorage = window.localStorage;

const saveImageDataArray = (imageDataArray) => {
  localStorage.setItem(IMAGES_KEY, JSON.stringify(imageDataArray));
};

const getImageDataArray = () => {
  let imageDataArray = localStorage.getItem(IMAGES_KEY);
  if (imageDataArray === "undefined") {
    return null;
  }
  return imageDataArray;
};

export { saveImageDataArray, getImageDataArray };
