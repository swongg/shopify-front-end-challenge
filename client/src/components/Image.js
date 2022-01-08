import React, { useState } from "react";
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

        <Typography
          style={{ marginLeft: "200px", marginRight: "200px" }}
          paragraph={true}
          variant="h6"
          gutterBottom
        >
          {imageData.explanation}
        </Typography>
      </Box>
      <Box>
        <img src={imageData.url} width={750} height={500} />
      </Box>

      <Heart isClick={liked} onClick={() => setLiked(!liked)} />
    </Box>
  );
};

export default Image;
