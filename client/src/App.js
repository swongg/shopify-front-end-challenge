import React, { useState, useEffect } from "react";
import { fetchImageDataArr } from "./utils/server";
import { getImageDataArray, saveImageDataArray } from "./utils/localStorage";
import Image from "./components/Image";
import ImageCard from "./components/ImageCard"
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./App.css";

const App = () => {
  const [imageDataArray, setImageDataArray] = useState([]);

  useEffect(() => {
    const storedImageDataArray = getImageDataArray();
    if (storedImageDataArray) {
      setImageDataArray(storedImageDataArray);
    } else {
      (async () => {
        const data = await fetchImageDataArr();
        saveImageDataArray(data);
        setImageDataArray(data);
      })();
    }
  }, []);

  return (
    <Box className="App" padding={5}>
      <Typography variant="h2" gutterBottom>
        Spacestagram: Shopify's Expansion into the Extragalactic
      </Typography>

      {imageDataArray.map(
        (imageData) =>
          imageData.media_type !== "video" && <ImageCard imageData={imageData} />
      )}
      <ParticlesBackground />
    </Box>
  );
};

export default App;
