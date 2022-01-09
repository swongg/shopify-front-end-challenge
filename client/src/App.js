import React, { useState, useEffect } from "react";
import { fetchImageDataArr } from "./utils/server";
import { getImageDataArray, saveImageDataArray } from "./utils/localStorage";
import ImageCard from "./components/ImageCard";
import ParticlesSwitch from "./components/ParticlesSwitch";
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./App.css";

const App = () => {
  const [imageDataArray, setImageDataArray] = useState([]);
  const [backgroundEffect, setBackgroundEffect] = useState(false);

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
      <ParticlesSwitch
        backgroundEffect={backgroundEffect}
        setBackgroundEffect={setBackgroundEffect}
      />
      <Typography variant="h2" gutterBottom>
        Spacestagram: Shopify's Expansion into the Extragalactic
      </Typography>

      {imageDataArray.map(
        (imageData) =>
          imageData.media_type !== "video" && (
            <Box padding={2}>
              <ImageCard imageData={imageData} />
            </Box>
          )
      )}

      {backgroundEffect && <ParticlesBackground />}
    </Box>
  );
};

export default App;
