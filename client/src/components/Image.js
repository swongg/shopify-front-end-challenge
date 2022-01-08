import React, { useState } from "react";
import Heart from "react-animated-heart";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const Image = ({ imageData }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Box>
      <Box padding={5}>
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

      <Box>
        <Heart
          className="heart"
          isClick={liked}
          onClick={() => setLiked(!liked)}
        />
      </Box>

      <Button variant="outlined">Shareable link</Button>
    </Box>
  );
};

export default Image;
