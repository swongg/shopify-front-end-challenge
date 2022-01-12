import { IMAGES_KEY } from "../constants";

const localStorage = window.localStorage;

const saveImageDataArray = (imageDataArray) => {
  localStorage.setItem(IMAGES_KEY, JSON.stringify(imageDataArray));
};

const getImageDataArray = () => {
  let getImageDataArray = localStorage.getItem(IMAGES_KEY);
  if (getImageDataArray === "undefined") {
    return null;
  }
  return getImageDataArray;
};

export { saveImageDataArray, getImageDataArray };
