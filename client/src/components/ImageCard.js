import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import HeartButton from "./HeartButton";
import ShareButton from "./ShareButton";
import ExpandButton from "./ExpandButton";

export default function ImageCard({ imageData }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <Card className="App" sx={{ maxWidth: 1000 }}>
      <CardHeader title={imageData.title} subheader={imageData.date} />
      <CardMedia component="img" height="750" image={imageData.url} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {imageData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <HeartButton liked={liked} setLiked={setLiked} />
        <ShareButton url={imageData.url} />
        <ExpandButton expanded={expanded} setExpanded={setExpanded} />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{imageData.explanation}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
