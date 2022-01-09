import React, { useState, useEffect } from "react";
import { fetchImageDataArr } from "./utils/server";
import { getImageDataArray, saveImageDataArray } from "./utils/localStorage";
import ImageCard from "./components/ImageCard";
import ParticlesSwitch from "./components/ParticlesSwitch";
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

const App = () => {
  const [loadState, setLoadState] = useState(true);
  const [imageDataArray, setImageDataArray] = useState([]);
  const [backgroundEffect, setBackgroundEffect] = useState(false);

  useEffect(() => {
    const storedImageDataArray = getImageDataArray();
    if (storedImageDataArray) {
      setImageDataArray(storedImageDataArray);
      setLoadState(false);
    } else {
      (async () => {
        const data = await fetchImageDataArr();
        saveImageDataArray(data);
        setImageDataArray(data);
        setLoadState(false);
      })();
    }
  }, []);

  return (
    <Box className="App" padding={10}>
      <Typography variant="h3" gutterBottom>
        Spacestagram: Shopify's Expansion into the Extragalactic
      </Typography>
      <Box padding={3}>
        <ParticlesSwitch
          backgroundEffect={backgroundEffect}
          setBackgroundEffect={setBackgroundEffect}
        />
      </Box>
      {backgroundEffect && <ParticlesBackground />}

      {loadState ? (
        <CircularProgress color="success" />
      ) : (
        imageDataArray.map(
          (imageData) =>
            imageData.media_type !== "video" && (
              <Box padding={2}>
                <ImageCard imageData={imageData} />
              </Box>
            )
        )
      )}
    </Box>
  );
};

export default App;
