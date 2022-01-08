import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import Box from "@material-ui/core/Box";


const HeartButton = ({ liked, setLiked }) => {
  return (
    <Box>
      {liked ? (
        <IconButton
          onClick={() => setLiked(!liked)}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => setLiked(!liked)}
          aria-label="add to favorites"
        >
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </Box>
  );
};
export default HeartButton;
