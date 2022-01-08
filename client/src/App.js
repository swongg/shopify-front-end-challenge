import React, { useState, useEffect } from "react";
import fetchImageDataArr from "./utils/server";
import Image from "./components/Image";
import "./App.css";

const App = () => {
  const [imageDataArray, setImageDataArray] = useState([]);

  useEffect(() => {
    const imageDataArray = async () => {
      const data = await fetchImageDataArr();
      setImageDataArray(data);
    };
    imageDataArray();
  }, []);

  return (
    <div className="App">
      <h1>Spacestagram: Shopify's Expansion into the Extragalactic </h1>
      {imageDataArray.map((imageData) => (
        <Image imageData={imageData}> </Image>
      ))}
    </div>
  );
};

export default App;
