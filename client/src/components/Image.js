import React, { useState } from "react";
import { imageWidth, imageHeight, fontColor } from "../constants";
import Heart from "react-animated-heart";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Image = ({ imageData }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Box>
      <Box padding={2}>
        <Typography variant="h4" gutterBottom>
          {imageData.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {imageData.date}
        </Typography>
      </Box>
      <Box>
        <img src={imageData.url} width={imageWidth} height={imageHeight} />
      </Box>

      <Heart isClick={liked} onClick={() => setLiked(!liked)} />
    </Box>
  );
};

export default Image;
