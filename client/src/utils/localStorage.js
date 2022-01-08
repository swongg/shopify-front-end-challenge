import { IMAGES_KEY } from "../constants";

const localStorage = window.localStorage;

const saveImageDataArray = (imageDataArray) => {
  localStorage.setItem(IMAGES_KEY, JSON.stringify(imageDataArray));
};

const getImageDataArray = () => {
  return JSON.parse(localStorage.getItem(IMAGES_KEY));
};

export { saveImageDataArray, getImageDataArray };
