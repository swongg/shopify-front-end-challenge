import React from "react";
import { imageWidth, imageHeight } from "../constants";
const Image = ({ imageData }) => {
  return (
    <div>
      <h3>{imageData.title}</h3>
      <img src={imageData.url} width={imageWidth} height={imageHeight} />
    </div>
  );
};

export default Image;
