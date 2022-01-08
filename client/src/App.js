import React, { useState, useEffect } from "react";
import fetchImageDataArr from "./utils/server";
import Image from "./components/Image";
import ParticlesBackground from "./components/ParticlesBackground";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
    <Box className="App" padding={5}>
      <Typography variant="h2" gutterBottom>
        Spacestagram: Shopify's Expansion into the Extragalactic
      </Typography>

      {imageDataArray.map((imageData) => (
        <Image imageData={imageData} />
      ))}
      <ParticlesBackground />
    </Box>
  );
};

export default App;
