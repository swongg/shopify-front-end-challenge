import React from "react";
const Image = ({imageData}) => {
  return (
    <div>
      <h3>{imageData.title}</h3>
      <img src={imageData.url}/>
    </div>
  );
};

export default Image;
